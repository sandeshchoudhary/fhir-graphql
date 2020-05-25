import { gql } from 'apollo-server-micro'

const schema = gql`
scalar DateTime
scalar EmailAddress
scalar NegativeFloat
scalar NegativeInt
scalar NonNegativeFloat
scalar NonNegativeInt
scalar NonPositiveFloat
scalar NonPositiveInt
scalar PhoneNumber
scalar PositiveFloat
scalar PositiveInt
scalar PostalCode
scalar UnsignedFloat
scalar UnsignedInt
scalar URL
scalar ObjectID
scalar BigInt
scalar Long
scalar GUID
scalar HexColorCode
scalar HSL
scalar HSLA
scalar IPv4
scalar IPv6
scalar ISBN
scalar MAC
scalar Port
scalar RGB
scalar RGBA
scalar USCurrency
scalar JSON
scalar JSONObject
scalar Hexadecimal
scalar IBAN

type Link {
  relation: String
  url: String
}

type Bundle {
  resourceType: String
  id: String
  identifier: [Identifier]
  type: String
  timestamp: String
  total: UnsignedInt
  link: [Link]
  entry: [Entry]
  hasMore: Boolean
}

type Meta {
  versionId: String
  lastUpdated: String
  source: String
  profile: [String]
  security: [Coding]
  tag: [Coding]
}

type Resource {
  id: String
  meta: Meta
  implicitRules: String
  language: String
}

type Extension {
  extension: [Extension]
  url: String
  valueCode: String
  valueString: String
  valueCoding: Coding
  valueAddress: Address
  valueDecimal: Float
}

type Patient {
  resourceType: String
  id: String
  meta: Meta
  implicitRules: String
  language: String
  text: Narrative
  contained: [Resource]
  extension: [Extension]
  modifierExtension: [Extension]
  identifier: [Identifier]
  active: Boolean
  name: [HumanName]
  telecom: [ContactPoint]
  gender: String
  birthDate: String
  deceasedBoolean: Boolean
  deceasedDateTime: String
  address: [Address]
  maritalStatus: CodeableConcept
  multipleBirthBoolean: Boolean
  multipleBirthInteger: Int
  contact: Contact
  communication: [Communication]
  generalPractitioner: [Reference]
  managingOrganization: Reference
  link: [LinkPatient]
}

type Narrative {
  extension: [Extension]
  status: String
  div: String
}

type LinkPatient {
  other: Reference
  type: String
}

type Communication {
  language: CodeableConcept
  preferred: Boolean
}

type Contact {
  relationship: CodeableConcept
  name: HumanName
  telecom: [ContactPoint]
  address: Address
  gender: String
  organization: Reference
  period: Period
}

type Reference {
   reference: String
   type: String
   identifier: Identifier
   display: String
}

type Address {
  use: String
  type: String
  text: String
  line: [String]
  city: String
  district: String
  state: String
  postalCode: String
  country: String
  period: Period
}

type ContactPoint {
  system: String
  value: String
  use: String
  rank: PositiveInt
  period: Period
}

type HumanName {
  use: String
  text: String
  family: String
  given: [String]
  prefix: [String]
  suffix: [String]
  period: Period
}

 type Period {
   start: String
   end: String
 }

type Identifier {
  use: String
  type: CodeableConcept
  system: String
  value: String
  period: Period
  assigner: String
}

type Coding {
  system: String
  version: String
  code: String
  display: String
  userSelected: Boolean
}

type CodeableConcept {
  coding: [Coding]
  text: String
}

type Entry {
  fullUrl: String
  resource: Patient
}

type Query {
  patient(id: String): Patient
  patients(next: String, searchParams: [SearchParam]): Bundle
  encounter(id: String): Encounter
  encounters(next: String, searchParams: [SearchParam]): Bundle
  medication(id: String): Medication
  medications(next: String, searchParams: [SearchParam]): Bundle
  medicationRequest(id: String): MedicationRequest
  medicationRequests(next:String, searchParams: [SearchParam]): Bundle
  medicationAdministration(id: String): MedicationAdministration
  medicationAdministrations(next: String, searchParams: [SearchParam]): Bundle
  medicationStatement(id: String): MedicationStatement
  medicationStatements(next: String, searchParams: [SearchParam]): Bundle
  medicationDispenses(next: String, searchParams: [SearchParam]): Bundle
  medicationDispense(id: String): MedicationDispense
}
`

export default schema