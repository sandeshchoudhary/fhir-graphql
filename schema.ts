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
  timestamp: DateTime
  total: UnsignedInt
  link: [Link]
  entry: [Entry]
  hasMore: Boolean
}

type Patient {
  resourceType: String
  id: String
  identifier: [Identifier]
  active : Boolean
  name: [HumanName]
  telecom: [ContactPoint]
  gender: String
  birthDate: DateTime
  deceasedBoolean: Boolean
  deceasedDateTime: DateTime
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
   start: DateTime
   end: DateTime
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
  patients(next: String): Bundle
  encounter(id: String): Encounter
  encounters(next: String): Bundle
  medication(id: String): Medication
  medications(next: String): Bundle
}
`

export default schema