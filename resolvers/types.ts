import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
  PositiveInt: number;
  UnsignedInt: number;
};

export type HumanName = {
  __typename?: 'HumanName';
  use?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  given?: Maybe<Array<Maybe<Scalars['String']>>>;
  prefix?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Array<Maybe<Scalars['String']>>>;
  period?: Maybe<Period>;
}

export type Period = {
  __typename?: 'Period';
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
}

export type Identifier = {
  __typename?: 'Identifier';
  use?: Maybe<Scalars['String']>;
  type?: Maybe<CodeableConcept>;
  system?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  period?: Maybe<Period>;
  assigner?: Maybe<Scalars['String']>;
}

export type CodeableConcept = {
  __typename?: 'CodeableConcept';
  coding?: Maybe<Array<Maybe<Coding>>>;
  text?: Maybe<Scalars['String']>;
}

export type Coding ={
  __typename?: 'Coding';
  system?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  userSelected?: Maybe<Scalars['Boolean']>;
}

export type Bundle = {
  __typename?: 'Bundle';
  resourceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  type?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['DateTime']>;
  total?: Maybe<Scalars['UnsignedInt']>;
  link?: Maybe<Array<Maybe<Link>>>;
  entry?: Maybe<Array<Maybe<Entry>>>;
  hasMore?: Maybe<Scalars['Boolean']>;
}

export type Link = {
  __typename?: 'Link';
  relation?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export type Patient = {
  __typename?: 'Patient';
  resourceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  active?: Maybe<Scalars['Boolean']>
  name?: Maybe<Array<Maybe<HumanName>>>;
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
  gender?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  deceasedBoolean: Maybe<Scalars['Boolean']>;
  deceasedDateTime: Maybe<Scalars['DateTime']>;
  address: Maybe<Array<Maybe<Address>>>;
  maritalStatus: Maybe<CodeableConcept>;
  multipleBirthBoolean: Maybe<Scalars['Boolean']>;
  multipleBirthInteger: Maybe<Scalars['Int']>;
  contact: Maybe<Contact>;
  communication: Maybe<Array<Communication>>;
  generalPractitioner: Maybe<Array<Maybe<Reference>>>;
  managingOrganization: Maybe<Reference>;
  link: Maybe<Array<Maybe<LinkPatient>>>;
}

export type LinkPatient = {
  __typename?: 'LinkPatient';
  other?: Maybe<Reference>;
  type?: Maybe<Scalars['String']>;
}

export type Communication = {
  __typename?: 'Communication';
  language?: Maybe<CodeableConcept>;
  preferred?: Maybe<Scalars['Boolean']>;
}

export type Contact = {
  __typename?: 'Contact';
  relationship?: Maybe<CodeableConcept>;
  name?: Maybe<HumanName>;
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
  address?: Maybe<Address>;
  gender?: Maybe<Scalars['String']>;
  organization: Maybe<Reference>;
  period: Maybe<Period>;
}

export type Reference = {
  __typename?: 'Reference'
  reference?: Maybe<String>;
  type?: Maybe<String>;
  identifier?: Maybe<Identifier>;
  display?: Maybe<String>;
}

export type Address = {
  __typename?: 'Address';
  use?: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  line: Maybe<Array<Maybe<Scalars['String']>>>;
  city: Maybe<Scalars['String']>;
  district: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  period: Maybe<Period>;
}

export type ContactPoint = {
  __typename?: 'ContactPoint';
  system?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  use?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['PositiveInt']>;
  period?: Maybe<Period>;
}
export type Entry = {
  __typename?: 'Entry';
  fullUrl: Maybe<Scalars['String']>;
  resource: Patient
}

export type Encounter = {
  __typename?: 'Encounter';
  resourceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  status?: Maybe<Scalars['String']>;
  statusHistory?: Maybe<Array<Maybe<StatusHistory>>>;
  class?: Maybe<Coding>;
  classHistory?: Maybe<Array<Maybe<ClassHistory>>>;
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
  serviceType?: Maybe<CodeableConcept>;
  priority?: Maybe<CodeableConcept>;
  subject?: Maybe<Reference>;
  episodeOfCare?: Maybe<Array<Maybe<Reference>>>;
  basedOn?: Maybe<Array<Maybe<Reference>>>;
  participant?: Maybe<Array<Maybe<Participant>>>;
  appointment?: Maybe<Array<Maybe<Reference>>>;
  period?: Maybe<Period>;
  length?: Maybe<Quantity>;
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>;
  reasonReference?: Maybe<Array<Maybe<Reference>>>;
  diagnosis?: Maybe<Array<Maybe<Diagnosis>>>;
  account?: Maybe<Array<Maybe<Reference>>>;
  hospitalization?: Maybe<Hospitalization>;
  location?: Maybe<Array<Maybe<Location>>>;
  serviceProvider?: Maybe<Reference>;
  partOf?: Maybe<Reference>;
}

export type Location = {
  __typeName?: 'Location';
  status?: Maybe<Scalars['String']>;
  physicalType?: Maybe<CodeableConcept>;
  period?: Maybe<Period>;
}

export type Hospitalization = {
  __typename?: 'Hospitalization';
  preAdmissionIdentifier: Maybe<Identifier>;
  origin?: Maybe<Reference>;
  admitSource?: Maybe<CodeableConcept>;
  reAdmission?: Maybe<CodeableConcept>;
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>;
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>;
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>;
  destination?: Maybe<Reference>;
  dischargeDisposition?: Maybe<CodeableConcept>;
}

export type Diagnosis = {
  __typename?: 'Diagnosis';
  condition?: Maybe<Reference>;
  use?: Maybe<CodeableConcept>;
  rank?: Maybe<Scalars['PositiveInt']>;
}

export type Quantity = {
  __typename?: 'Quantity';
  value?: Maybe<Scalars['Float']>;
  comparators?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
}

export type Participant = {
  __typename?: 'Participant';
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
  period?: Maybe<Period>;
  individual?: Maybe<Reference>;
}

export type ClassHistory = {
  __typename?: 'ClassHistory';
  class?: Maybe<CodeableConcept>;
  period?: Maybe<Period>;
}

export type StatusHistory = {
  __typename?: 'StatusHistory';
  status?: Maybe<Scalars['String']>;
  period?: Maybe<Period>;
}

export type Medication = {
  __typename?: 'Medication';
  resourceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  code?: Maybe<CodeableConcept>;
  status?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Reference>;
  form?: Maybe<CodeableConcept>;
  amount?: Maybe<Ratio>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
}

export type Ingredient = {
  __typename?: 'Ingredient';
  itemCodeableConcept?: Maybe<CodeableConcept>;
  itemReference?: Maybe<Reference>;
  isActive?: Maybe<Scalars['Boolean']>;
  strength?: Maybe<Ratio>;
}

export type Ratio = {
  __typename?: 'Ratio';
  numerator?: Maybe<Quantity>;
  denominator?: Maybe<Quantity>;
}

export type QueryPatientsArgs = {
  next: Maybe<Scalars['String']>;
}

export type QueryPatientArgs = {
  id: Maybe<Scalars['String']>;
}

export type QueryEncounterArgs = {
  id: Maybe<Scalars['String']>;
}

export type QueryEncountersArgs = {
  next: Maybe<Scalars['String']>;
}

export type QueryMedicationArgs = {
  id: Maybe<Scalars['String']>;
}

export type QueryMedicationsArgs = {
  next: Maybe<Scalars['String']>;
}

export type Query = {
   __typename?: 'Query';
  patients?: Maybe<Bundle>;
  patient?: Maybe<Patient>;
  encounter?: Maybe<Encounter>;
  encounters?: Maybe<Bundle>;
  medication?: Maybe<Medication>;
  medications?: Maybe<Bundle>;
};


export type QueryResultsArgs = {};

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Bundle: ResolverTypeWrapper<Bundle>,
  Patient: ResolverTypeWrapper<Patient>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Encounter: ResolverTypeWrapper<Encounter>,
  Medication: ResolverTypeWrapper<Medication>
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Patient: Patient,
  Int: Scalars['Int'],
  Float: Scalars['Float'],
  Boolean: Scalars['Boolean'],
  Encounter: Encounter,
  Medication: Medication,
  Bundle: Bundle
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  patients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bundle']>>>, ParentType, ContextType, RequireFields<QueryPatientsArgs, never>>,
  patient?: Resolver<Maybe<ResolversTypes['Patient']>, ParentType, ContextType, RequireFields<QueryPatientArgs, never>>,
  encounters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bundle']>>>, ParentType, ContextType, RequireFields<QueryEncountersArgs, never>>,
  encounter?: Resolver<Maybe<ResolversTypes['Encounter']>, ParentType, ContextType, RequireFields<QueryEncounterArgs, never>>,
  medication?: Resolver<Maybe<ResolversTypes['Medication']>, ParentType, ContextType, RequireFields<QueryMedicationArgs, never>>,
  medications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bundle']>>>, ParentType, ContextType, RequireFields<QueryMedicationsArgs, never>>
};


export type PatientResolver<ContextType = any, ParentType extends ResolversParentTypes['Patient'] = ResolversParentTypes['Patient']> = {
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BundleResolver<ContextType = any, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = {
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EncounterResolver<ContextType = any, ParentType extends ResolversParentTypes['Encounter'] = ResolversParentTypes['Encounter']> = {
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MedicationResolver<ContextType = any, ParentType extends ResolversParentTypes['Medication'] = ResolversParentTypes['Medication']> = {
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};


export type Resolvers<ContextType = any> = {
  PatientResolver?: PatientResolver<ContextType>,
  Query?: QueryResolvers<ContextType>
  EncounterResolver?: EncounterResolver<ContextType>;
  MedicationResolver?: MedicationResolver<ContextType>;
  Bundle?: BundleResolver<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
