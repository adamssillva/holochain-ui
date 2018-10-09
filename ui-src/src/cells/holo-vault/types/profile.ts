import { JSONSchema6 } from 'json-schema'

/*----------  Created by the hApp  ----------*/

export interface ProfileSpec {
  name: string,
  sourceDNA: string, // the DNA of the hApp requesting data
  fields: Array<ProfileFieldSpec>, // array of fields this app requires
}

export interface ProfileFieldSpec {
  name: string, // How the app will ask for this data
  displayName: string, // How it will be displayed in user forms
  required: boolean,
  description: string, // describes what the app will do with this data
  usage: UsageType, // how the app will use the data.
  schema: JSONSchema6 // field must pass this validator to be accepted
}

export enum UsageType {
  STORE= 'store',    // The app will store the data in its own DHT
  DISPLAY= 'display' // The app will always bridge to vault when it needs to retreive the data
}

/*-------------------------------------------*/

export interface ProfileMapping {
  retrieverDNA: string,
  profileField: string,
  personaHash: string,
  personaField: string
}

export interface Profile extends ProfileSpec {
  fields: Array<ProfileField>,
  expiry: Number, // expiry date as a unix timestamp
}

export interface ProfileField extends ProfileFieldSpec {
  personaHash?: string, // id of the persona to map to. If not provided then an error will be thrown on access
  personaFieldName?: string, // field of persona to map to
}
