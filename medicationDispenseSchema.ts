import { gql } from 'apollo-server-micro';

const schema = gql`

type medicationDispense {
    resourceType: String
    id: String
    meta: Meta
    implicitRules: String
    language: String
    text: String
    contained: [Resource]
    extension: [Extension]
    modifierExtension: [Extension]
    identifier: [Identifier]
    partOf: [Reference]
    status: String
    statusReasonCodeableConcept: CodeableConcept
    statusReasonReference: Reference
    category: CodeableConcept
    medicationCodeableConcept: CodeableConcept
    medicationReference: Reference
    subject: Reference
    context: Reference
    supportingInformation: [Reference]
    performer: [Performer]
    location: Reference
    authorizingPrescription: [Reference]
    type: CodeableConcept
    quantity: Quantity
    daysSupply: Quantity
    whenPrepared: String
    whenHandedOver: String
    destination: Reference
    receiver: [Reference]
    note: [Annotation]
    dosageInstruction: [Dosage]
    substitution: MDSubstitution
    detectedIssue: [Reference]
    eventHistory: [Reference]
}

type MDSubstitution {
    wasSubstituted: Boolean
    type: CodeableConcept
    responsibleParty: [Reference]
}

type Performer {
    function: CodeableConcept
    actor: Reference
}

`

export default schema