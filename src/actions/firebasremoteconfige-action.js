export const FB_INITIALIZE_REMOTE_CONFIG = 'FB_INITIALIZE_REMOTE_CONFIG'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
          acc[type] = `${base}_${type}`
          return acc
      }, {})
}

export const INITIALIZE_REMOTE_CONFIG = createRequestTypes('INITIALIZE_REMOTE_CONFIG')

function action(type, payload = {}) {
    return {type, ...payload}
}

export const initializeRemoteConfig = {
    request: () => action(INITIALIZE_REMOTE_CONFIG[REQUEST], {}),
    success: (config) => action(INITIALIZE_REMOTE_CONFIG[SUCCESS], {config}),
    failure: (config, error) => action(INITIALIZE_REMOTE_CONFIG[FAILURE], {config, error}),
}

export const fbInitializeRemoteConfig = () => action(FB_INITIALIZE_REMOTE_CONFIG, {})