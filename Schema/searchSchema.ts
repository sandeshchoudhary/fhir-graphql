import { gql } from 'apollo-server-micro';

const schema = gql`

input SearchParam {
    name: String
    value: String
}
`
export default schema