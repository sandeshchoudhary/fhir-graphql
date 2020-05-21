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
      const res = await fetch('https://r4.smarthealthit.org/Patient', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      patients = await res.json();
      return patients;
    }

    const getNext = async (next: String) => {
      const res = await fetch(`${next}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      patients = await res.json();
      return patients;
    }

    const getPatient = async (id: String) => {
      const res = await fetch(`https://r4.smarthealthit.org/Patient/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      patient = await res.json();
      return patient;
    }

    const getEncounter = async (id: String) => {
      const res = await fetch(`https://r4.smarthealthit.org/Encounter/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      encounter = await res.json();
      return encounter;
    }

    const getEncounters = async () => {
      const res = await fetch('https://r4.smarthealthit.org/Encounter', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      encounters = await res.json();
      return encounters;
    }

    const getMedication = async (id:String) => {
      const res = await fetch(`https://r4.smarthealthit.org/Medication/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medication = await res.json();
      return medication;
    }
    
    const getMedications = async () => {
      const res = await fetch('https://r4.smarthealthit.org/Medication', {
        headers: {
          'Content-Type': 'application/json',
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