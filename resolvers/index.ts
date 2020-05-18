import { Resolvers } from './types';
import Query from './Query';
import { resolvers } from 'graphql-scalars';

const resolver: Resolvers = {
  ...resolvers,
  Query
}

export default resolver