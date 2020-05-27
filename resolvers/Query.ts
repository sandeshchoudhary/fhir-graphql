import { QueryResolvers } from './types';

const resolvers: QueryResolvers = {
  async patients(_parent, {next=""}, {getPatients, getNext, getPaginated}) {
    const result = await(getPaginated(getPatients, getNext, next));
    return result;
  },

  async patient(_parent, {id}, {getPatient}) {
    const result = await getPatient(id);
    return result;
  },

  async encounter(_parent, {id}, {getEncounter}) {
    const result = await getEncounter(id);
    return result;
  },

  async encounters(_parent, {next=""}, {getEncounters, getNext, getPaginated}) {
    const result = await(getPaginated(getEncounters, getNext, next));
    return result;
  },

  async medication(_parent, {id}, {getMedication}) {
    const result = await getMedication(id);
    return result;
  },

  async medications(_parent, {next=""}, {getMedications, getNext, getPaginated}) {
    const result = await(getPaginated(getMedications, getNext, next));
    return result;
  },

  async medicationRequests(_parent, {next=""}, {getMedicationRequests, getNext, getPaginated}){
    const reuslt = await(getPaginated(getMedicationRequests, getNext, next));
    return reuslt;
  },

  async medicationRequest(_parent, {id}, {getMedicationRequest}) {
    const result = await getMedicationRequest(id);
    return result;
  },

  async medicationStatement(_parent, {id}, {getMedicationStatement}) {
    const result = await getMedicationStatement(id);
    return result;
  },

  async medicationStatements(_parent, {next=""}, {getMedicationStatements, getNext, getPaginated}) {
    const result = await(getPaginated(getMedicationStatements, getNext, next));
    return result;
  },

  async medicationDispense(_parent, {id}, {getMedicationDispense}) {
    const result = await getMedicationDispense(id);
    return result;
  },

  async medicationDispenses(_parent, {next=""}, {getMedicationDispenses, getNext, getPaginated}) {
    const result = await(getPaginated(getMedicationDispenses, getNext, next));
    return result;
  },

  async medicationAdministration(_parent, {id}, {getMedicationAdministration}) {
    const result = await getMedicationAdministration(id);
    return result;
  },

  async medicationAdministrations(_parent, {next=""}, {getMedicationAdministrations, getNext, getPaginated}) {
    const result = await(getPaginated(getMedicationAdministrations, getNext, next));
    return result;
  }

  
}

export default resolvers 