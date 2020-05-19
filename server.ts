import { makeExecutableSchema, ApolloServer } from 'apollo-server-micro'
import { default as typeDefs } from './schema'
import { default as encounterTypeDefs } from './encounterSchema'
import { default as medicationTypeDefs } from './medicationSchema'
import resolvers from './resolvers'
import fetch from 'node-fetch'
import microCors = require('micro-cors');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, encounterTypeDefs, medicationTypeDefs],
  resolvers
})

let patients = null;
let patient = null;
let encounter = null;
let medication = null;
let encounters = null;
let medications = null;

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
  context({req}) {
    const {headers = {}} = req;

    const getPaginated = async (first, remaining, next="") => {
      var result;
      if(next=="") {
        result = await first();
      }
      else{
        result = await remaining(next);
      }
      result.hasMore = false;
      for (var i =0, l=result.link.length; i<l;i++){
        var obj = result.link[i];
        if(obj.relation=="next" && obj.url){
          result.hasMore = true;
          break;
        }
      }
      return result;
    }
    
    const getPatients = async () => {
      const res = await fetch('https://innotestfhir.azurehealthcareapis.com/Patient', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      patients = await res.json();
      return patients;
    }

    const getNext = async (next: String) => {
      const res = await fetch(`${next}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      patients = await res.json();
      return patients;
    }

    const getPatient = async (id: String) => {
      const res = await fetch(`https://innotestfhir.azurehealthcareapis.com/Patient/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      patient = await res.json();
      return patient;
    }

    const getEncounter = async (id: String) => {
      const res = await fetch(`https://innotestfhir.azurehealthcareapis.com/Encounter/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      encounter = await res.json();
      return encounter;
    }

    const getEncounters = async () => {
      const res = await fetch('https://innotestfhir.azurehealthcareapis.com/Encounter', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      encounters = await res.json();
      return encounters;
    }

    const getMedication = async (id:String) => {
      const res = await fetch(`https://innotestfhir.azurehealthcareapis.com/Medication/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      medication = await res.json();
      return medication;
    }
    
    const getMedications = async () => {
      const res = await fetch('https://innotestfhir.azurehealthcareapis.com/Medication', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      medications = await res.json();
      return medications;
    }

    return {
      getPaginated,
      getPatients,
      getNext,
      getPatient,
      getEncounter,
      getEncounters,
      getMedication,
      getMedications
    }
  },
})


const cors = microCors()

const handler = server.createHandler({ path: '/' })

export default cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))