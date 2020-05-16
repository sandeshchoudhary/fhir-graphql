import { makeExecutableSchema, ApolloServer } from 'apollo-server-micro'
import { default as typeDefs } from './schema'
import { default as encounterTypeDefs } from './encounterSchema'
import resolvers from './resolvers'
import fetch from 'node-fetch'
import microCors = require('micro-cors');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, encounterTypeDefs],
  resolvers
})

let patients = null;
let patient = null;
let encounter = null;

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
  context({req}) {
    const {headers = {}} = req;
    
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

    const getNextPatients = async (next: String) => {
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
    
    return {
      getPatients,
      getNextPatients,
      getPatient,
      getEncounter
    }
  },
})


const cors = microCors()

const handler = server.createHandler({ path: '/' })

export default cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))