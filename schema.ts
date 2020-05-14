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

type Patient {
  id: String
  identifier: [Identifier]
  active : Boolean
  name: [HumanName]
  telecom: [ContactPoint]
  gender: Genders
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
  type: typeLinkPatient
}

enum typeLinkPatient {
  "replaced-by"
  replaces
  refer
  seealso
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
  gender: Genders
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
  use: UsesAddress
  type: typesAddress
  text: String
  line: [String]
  city: String
  district: String
  state: String
  postalCode: String
  country: String
  period: Period
}

enum typesAddress {
  postal
  physical
  both
}

enum UsesAddress {
  home
  work
  temp
  old
  billing
}

enum Genders {
  male
  female
  other
  unknown
}

type ContactPoint {
  system: System
  value: String
  use: UsesContact
  rank: PositiveInt
  period: Period
}

enum UsesContact{
  home
  work
  temp
  old
  mobile
}

enum System {
  phone
  fax
  email
  pager
  url
  sms
  other
}

enum UsesName {
  usual
  official
  temp
  nickname
  anonymous
  old
  maiden
}

type HumanName {
  use: UsesName
  text: String
  family: String
  given: [String]
  prefix: [String]
  suffix: [String]
  period: Period
}

enum UsesIdentifier {
  usual
  official
  temp
  secondary
  old
}

 type Period {
   start: DateTime
   end: DateTime
 }

type Identifier {
  use: UsesIdentifier
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
  patients: [Entry]
}
`

export default schema