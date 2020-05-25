import { makeExecutableSchema, ApolloServer } from 'apollo-server-micro'
import { default as typeDefs } from './Schema/schema'
import { default as encounterTypeDefs } from './Schema/encounterSchema'
import { default as medicationTypeDefs } from './Schema/medicationSchema'
import { default as medicationRequestSchema } from './Schema/medicationRequestSchema'
import { default as medicationDispenseSchema } from './Schema/medicationDispenseSchema'
import { default as medicationAdministrationSchema } from './Schema/medicationAdministrationSchema'
import { default as medicationStatementSchema } from './Schema/medicationStatementSchema'
import {default as searchSchema } from './Schema/searchSchema'
import resolvers from './resolvers'
import fetch from 'node-fetch'
import microCors = require('micro-cors');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, encounterTypeDefs, medicationTypeDefs, medicationRequestSchema, medicationDispenseSchema, medicationAdministrationSchema, medicationStatementSchema,searchSchema ],
  resolvers
})

let resource = null;
let resources = null;

let baseUrl = 'https://r4.smarthealthit.org';

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
  context({req}) {
    const {headers = {}} = req;

    const getPaginated = async (first, remaining, next="", searchParams = null, url = null) => {
      var result;
      if(next=="") {
        result = await first(searchParams, url);
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
    
    const getResources =  async (searchParams, url) => {
      url = baseUrl + url;
      if (searchParams){
        url = url +'?';
        const l = searchParams.length;
        for(var i=0; i<l; i++){
          url = url + `${searchParams[i].name}=${searchParams[i].value}&`;
        }
        const sl = url.length;
        url = url.slice(0, sl-1);
      }
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      resources = await res.json();
      return resources;
    }

    const getResource = async (id: String, url:String) => {
      const res = await fetch(baseUrl + url+`/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      resource = await res.json();
      return resource;
    }

    const getNext = async (next: String) => {
      const res = await fetch(`${next}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      resource = await res.json();
      return resource;
    }
    
    return {
      getPaginated,
      getNext,
      getResources,
      getResource
    }
  },
})


const cors = microCors()

const handler = server.createHandler({ path: '/' })

export default cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))