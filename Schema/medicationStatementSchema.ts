import { gql } from 'apollo-server-micro';

const schema = gql`
type MedicationStatement {
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
    basedOn: [Reference]
    partOf: [Reference]
    status: String
    statusReason: [CodeableConcept]
    category: CodeableConcept
    medicationCodeableConcept: CodeableConcept
    medicationReference: Reference
    subject: Reference
    context: Reference
    effectiveDateTime: String
    effectivePeriod: Period
    dateAsserted: String
    informationSource: Reference
    derivedFrom: [Reference]
    reasonCode: [CodeableConcept]
    reasonReference: [Reference]
    note: [Annotation]
    dosage: [Dosage]
}

`

export default schema