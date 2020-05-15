import { QueryResolvers } from './types';

const resolvers: QueryResolvers = {
  async patients(_parent, {next=""}, {getPatients, getNextPatients}) {
    if(next=="") {
      return await getPatients();
    }
    return await getNextPatients(next);
  },

  async patient(_parent, {id}, {getPatient}) {
    const result = await getPatient(id);
    return result;
  }
}

export default resolvers 