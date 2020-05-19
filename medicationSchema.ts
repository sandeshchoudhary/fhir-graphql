import { gql } from 'apollo-server-micro';

const schema = gql`
type Medication {
    resourceType: String
    id: String
    identifier: [Identifier]
    code: CodeableConcept
    status: String
    manufacturer: Reference
    form: CodeableConcept
    amount: Ratio
    ingredients: [Ingredient]
    batch: Batch
}

type Batch {
    lotNumber: String
    expirationDate: DateTime
}

type Ingredient {
   itemCodeableConcept: CodeableConcept
   itemReference: Reference
   isActive: Boolean
   strength: Ratio
}

type Ratio {
   numerator: Quantity
   denominator: Quantity
}
`;

 export default schema;