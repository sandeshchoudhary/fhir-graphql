import { gql } from 'apollo-server-micro'

const schema = gql`

type Patient {
  name: [HumanName]
}

type HumanName {
  text: String
  family: String
  given: [String]
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