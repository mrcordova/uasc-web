import {
  EMULATOR_AUTH_PORT,
  EMULATOR_FIRESTORE_PORT,
  EMULATOR_HOST
} from "data-layer/adapters/EmulatorConfig"
import * as _admin from "firebase-admin"

const IS_JEST = process.env.JEST_WORKER_ID !== undefined

const keysEnvVar = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

if (!keysEnvVar && !IS_JEST) {
  throw new Error("The service account environment variable was not found!")
}

const keys = JSON.parse(keysEnvVar ?? "{}")

if (IS_JEST) {
  process.env.FIRESTORE_EMULATOR_HOST = `${EMULATOR_HOST}:${EMULATOR_FIRESTORE_PORT}`
  process.env.FIRESTORE_AUTH_EMULATOR_HOST = `${EMULATOR_HOST}:${EMULATOR_AUTH_PORT}`
}

const firebase = _admin.initializeApp(
  Object.keys(keys).length > 0
    ? {
        credential: _admin.credential.cert(keys)
      }
    : {}
)

export const admin = _admin

export const auth = firebase.auth()
