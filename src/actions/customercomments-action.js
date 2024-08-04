import {createRequestTypes,
    action,
    REQUEST,
    SUCCESS,
    FAILURE
} from './base-action'

export const ADD_CUSTOMER_COMMENTS = 'ADD_CUSTOMER_COMMENTS'
export const ADD_CUSTOMER_COMMENTS_VAR = createRequestTypes(ADD_CUSTOMER_COMMENTS)

export const addCustomerComments = {
    request: () => action(ADD_CUSTOMER_COMMENTS_VAR[REQUEST]),
    success: () => action(ADD_CUSTOMER_COMMENTS_VAR[SUCCESS], {}),
    failure: ( error) => action(ADD_CUSTOMER_COMMENTS_VAR[FAILURE], {error}),
}

export const doAddCustomerComments = (addCommentsReq, requiredFields = []) => action(ADD_CUSTOMER_COMMENTS, {addCommentsReq})


