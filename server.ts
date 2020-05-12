import { makeExecutableSchema, ApolloServer } from 'apollo-server-micro'
import { default as typeDefs } from './schema'
import resolvers from './resolvers'
import fetch from 'node-fetch'
import microCors = require('micro-cors');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

let patients = null;
let patient = null;

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
  context({req}) {
    const {headers = {}} = req;
    
    const getPatients = async () => {
      // if (patients) return patients;
      const res = await fetch('https://innotestfhir.azurehealthcareapis.com/Patient', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      patients = await res.json();
      return patients;
    }

    const getPatient = async (id: String) => {
      // if (patient) return patient;
      const res = await fetch(`https://innotestfhir.azurehealthcareapis.com/Patient/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers.authorization
        }
      })
      patient = await res.json();
      return patient;
    }
    
    return {
      getPatients,
      getPatient
    }
  },
})


const cors = microCors()

const handler = server.createHandler({ path: '/' })

export default cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))