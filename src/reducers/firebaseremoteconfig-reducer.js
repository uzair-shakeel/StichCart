import InitialState from './initialstate';

function firebaseRemoteConfigReducers(prevState = { isRemoteConfigLoading: false}, action) {
    switch (action.type) {
        case 'INITIALIZE_REMOTE_CONFIG_REQUEST':
            return { ...prevState, isRemoteConfigLoading: true , error: ''};
        case 'INITIALIZE_REMOTE_CONFIG_SUCCESS':
            return { ...prevState, isRemoteConfigLoading: false, config: action.config, error: ''};
        case 'INITIALIZE_REMOTE_CONFIG_FAILURE':
            return { ...prevState, isRemoteConfigLoading: false, config: action.config, error: ''};
        default:
            return prevState;
    }
}

export default firebaseRemoteConfigReducers;