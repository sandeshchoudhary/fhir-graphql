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

  async medication(_parent, {id}, {getEncounter}) {
    const result = await getEncounter(id);
    return result;
  },

  async medications(_parent, {next=""}, {getMedications, getNext, getPaginated}) {
    const result = await(getPaginated(getMedications, getNext, next));
    return result;
  }
}

export default resolvers 