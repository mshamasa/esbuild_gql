import {mergeTypeDefs} from '@graphql-tools/merge';

// GraphQL Schema
import type1 from './typeDefs';
import type2 from './typeDefs2';
import resolvers from './resolvers'

const typeDefs = mergeTypeDefs([type1, type2]);

export { typeDefs, resolvers };




