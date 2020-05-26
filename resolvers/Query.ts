import { QueryResolvers } from './types';

const resolvers: QueryResolvers = {
  async patients(_parent, {next = "", searchParams = null}, {getResources, getNext, getPaginated}) {
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/Patient'));
    return result;
  },

  async patient(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/Patient');
    return result;
  },

  async encounter(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/Encounter');
    return result;
  },

  async encounters(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}) {
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/Encounter'))
    return result;
  },

  async medication(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/Medication');
    return result;
  },

  async medications(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}) {
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/Medication'));
    return result;
  },

  async medicationRequests(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}){
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/MedicationRequest'));
    return result;
  },

  async medicationRequest(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/MedicationResource');
    return result;
  },

  async medicationStatement(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/MedicationStatement');
    return result;
  },

  async medicationStatements(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}) {
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/MedicationStatement'));
    return result;
  },

  async medicationDispense(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/MedicationDispense');
    return result;
  },

  async medicationDispenses(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}) {
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/MedicationDispense'));
    return result;
  },

  async medicationAdministrations(_parent, {next="", searchParams = null}, {getResources, getNext, getPaginated}){
    const result = await(getPaginated(getResources, getNext, next, searchParams, '/MedicationAdministration'));
    return result;
  },

  async medicationAdministration(_parent, {id}, {getResource}) {
    const result = await getResource(id, '/MedicationAdministration');
    return result;
  },

  
}

export default resolvers 