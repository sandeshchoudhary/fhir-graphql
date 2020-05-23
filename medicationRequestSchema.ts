import { gql } from 'apollo-server-micro';

const schema = gql`
type MedicationRequest {
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
    status: String
    statusReason: CodeableConcept
    intent: String
    category: [CodeableConcept]
    priority: String
    doNotPerform: Boolean
    reportedBoolean: Boolean
    reportedReference: Reference
    medicationCodeableConcept: CodeableConcept
    medicationReference: Reference
    subject: Reference
    encounter: Reference
    supportingInformation: [Reference]
    authoredOn: String
    requester: Reference
    performer: Reference
    performerType: CodeableConcept
    recorder: Reference
    reasonCode: CodeableConcept
    reasonReference: Reference
    instantiatesCanonical: [String]
    instantiatesUri: [String]
    basedOn: [Reference]
    groupIdentifier: Identifier
    courseOfTherapyType: CodeableConcept
    insurance: [Reference]
    note: [Annotation]
    dosageInstruction: [Dosage]
    dispenseRequest: DispenseRequest
    substitution: Substitution
    priorPrescription: Reference
    detectedIssue: [Reference]
    eventHistory: [Reference]
}

type Substitution {
    allowedBoolean: Boolean
    allowedCodeableConcept: CodeableConcept
    reason: CodeableConcept
}

type DispenseRequest {
    initialFill: InitialFill
    dispenseInterval: Quantity
    validityPeriod: Period
    numberOfRepeatsAllowed: UnsignedInt
    quantity: Quantity
    expectedSupplyDuration: Quantity
    performer: Reference
}

type InitialFill {
    quantity: Quantity
    duration: Quantity
}

type Annotation {
    extension: [Extension]
    authorReference: Reference
    authorString: String
    time: String
    text: String
}

type Dosage {
    extension: [Extension]
    modifierExtension: [Extension]
    sequence: Int
    text: String
    additionalInstruction: [CodeableConcept]
    patientInstruction: String
    timing: Timing
    asNeededBoolean: Boolean
    asNeededCodeableConcept: CodeableConcept
    site: CodeableConcept
    route: CodeableConcept
    method: CodeableConcept
    doseAndRate: [DoseAndRate]
    maxDosePerPeriod: Ratio
    maxDosePerAdministration: Quantity
    maxDosePerLifetime: Quantity
}

type DoseAndRate {
    type: CodeableConcept
    doseRange: Range
    doseQuantity: Quantity
    rateRatio: Ratio
    rateRange: Range
    rateQuantity: Quantity
}

type Timing {
    extension: [Extension]
    modifierExtension: [Extension]
    event: [String]
    repeat: TimingRepeat
    code: CodeableConcept
}

type TimingRepeat {
    boundsDuration: Quantity
    boundsRange: Range
    boundsPeriod: Period
    count: PositiveInt
    countMax: PositiveInt
    duration: Float
    durationMax: Float
    durationUnit: String
    frequency: PositiveInt
    frequencyMax: PositiveInt
    period: Float
    periodMax: Float
    periodUnit: String
    dayOfWeek: [String]
    timeOfDay: [String]
    when: [String]
    offset: UnsignedInt
}

type Range {
    low: Quantity
    high: Quantity
}
`

export default schema