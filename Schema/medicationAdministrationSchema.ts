import { gql } from 'apollo-server-micro';

const schema = gql`
type MedicationAdministration { 
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
    instantiates: [String]
    partOf: [Reference]
    status: String
    statusReason: [CodeableConcept]
    category: CodeableConcept
    medicationCodeableConcept: CodeableConcept
    medicationReference: Reference
    subject: Reference
    context: Reference
    supportingInformation: [Reference]
    effectiveDateTime: String
    effectivePeriod: Period
    performer: [Performer]
    reasonCode: [CodeableConcept]
    reasonReference: [Reference]
    request: Reference
    device: [Reference]
    note: [Annotation]
    dosage: MADosage
    eventHistory: [Reference]

}

type MADosage {
    text: String
    site: CodeableConcept
    route: CodeableConcept
    method: CodeableConcept
    dose: Quantity
    rateRatio: Ratio
    rateQuantity: Quantity
}

`

export default schema