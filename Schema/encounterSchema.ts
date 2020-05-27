import { gql } from 'apollo-server-micro';

const schema = gql`
type Encounter {
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
    status: String
    statusHistory: [StatusHistory]
    class: Coding
    classHistory: [ClassHistory]
    type: [CodeableConcept]
    serviceType: CodeableConcept
    priority: CodeableConcept
    subject: Reference
    episodeOfCare: [Reference]
    basedOn: [Reference]
    participant: [Participant]
    appointment: [Reference]
    period: Period
    length: Quantity
    reasonCode: [CodeableConcept]
    reasonReference: [Reference]
    diagnosis: [Diagnosis]
    account: [Reference]
    hospitalization: Hospitalization
    location: [Location]
    serviceProvider: Reference
    partOf: Reference
}

type Location {
    location: Reference
    status: String
    physicalType: CodeableConcept
    period: Period
}

type Hospitalization {
    preAdmissionIdentifier: Identifier
    origin: Reference
    admitSource: CodeableConcept
    reAdmission: CodeableConcept
    dietPreference: [CodeableConcept]
    specialCourtesy: [CodeableConcept]
    specialArrangement: [CodeableConcept]
    destination: Reference
    dischargeDisposition: CodeableConcept
}

type Diagnosis {
    condition: Reference
    use: CodeableConcept
    rank: PositiveInt
}

type Quantity {
    value: Float
    comparator: String
    unit: String
    system: String
    code: String
}

type Participant {
    type: [CodeableConcept]
    period: Period
    individual: Reference
}

type ClassHistory {
    class: Coding
    period: Period
}

type StatusHistory {
    status: String
    period: Period
}

 `;

 export default schema;