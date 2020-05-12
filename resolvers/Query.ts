import { QueryResolvers } from './types';

const resolvers: QueryResolvers = {
  async patients(_parent, {}, {getPatients}) {
    const result = await getPatients();
    return result.entry;
  },

  async patient(_parent, {id}, {getPatient}) {
    const result = await getPatient(id);
    return result;
  }
}

export default resolvers 