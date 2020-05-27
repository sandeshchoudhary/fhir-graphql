import { gql } from 'apollo-server-micro';

const schema = gql`
type Medication {
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
    expirationDate: String
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