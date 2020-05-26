import { makeExecutableSchema, ApolloServer } from 'apollo-server-micro'
import { default as typeDefs } from './Schema/schema'
import { default as encounterTypeDefs } from './Schema/encounterSchema'
import { default as medicationTypeDefs } from './Schema/medicationSchema'
import { default as medicationRequestSchema } from './Schema/medicationRequestSchema'
import { default as medicationDispenseSchema } from './Schema/medicationDispenseSchema'
import { default as medicationAdministrationSchema } from './Schema/medicationAdministrationSchema'
import { default as medicationStatementSchema } from './Schema/medicationStatementSchema'
import resolvers from './resolvers'
import fetch from 'node-fetch'
import microCors = require('micro-cors');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, encounterTypeDefs, medicationTypeDefs, medicationRequestSchema, medicationDispenseSchema, medicationAdministrationSchema, medicationStatementSchema ],
  resolvers
})

let patients = null;
let patient = null;
let encounter = null;
let medication = null;
let encounters = null;
let medications = null;
let medicationRequest = null;
let medicationRequests = null;
let medicationDispense = null;
let medicationDispenses = null;
let medicationStatement = null;
let medicationStatements = null;

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

    const getMedicationRequest = async (id: String) => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationRequest/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medicationRequests = await res.json();
      return medicationRequests;
    }

    const getMedicationRequests = async () => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationRequest`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medicationRequest = await res.json();
      return medicationRequest;
    }

    const getMedicationDispense = async (id: String) => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationDispense/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medicationDispense = await res.json();
      return medicationDispense;
    }

    const getMedicationDispenses = async () => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationDispenses`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medicationDispenses = await res.json();
      return medicationDispenses;
    }

    const getMedicationStatement = async (id:String) => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationStatement/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medication = await res.json();
      return medication;
    }
    
    const getMedicationStatements = async () => {
      const res = await fetch('https://r4.smarthealthit.org/MedicationStatement', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medications = await res.json();
      return medications;
    }

    const getMedicationAdministration = async (id:String) => {
      const res = await fetch(`https://r4.smarthealthit.org/MedicationAdministration/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      medication = await res.json();
      return medication;
    }
    
    const getMedicationAdministrations = async () => {
      const res = await fetch('https://r4.smarthealthit.org/MedicationAdministration', {
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
      getMedications,
      getMedicationRequest,
      getMedicationRequests,
      getMedicationDispense,
      getMedicationDispenses,
      getMedicationStatement,
      getMedicationStatements,
      getMedicationAdministration,
      getMedicationAdministrations
    }
  },
})


const cors = microCors()

const handler = server.createHandler({ path: '/' })

export default cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))