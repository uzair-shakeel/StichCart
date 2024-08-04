import initialstate from './initialstate';

function CustomerCommentsReducer(prevState = 
    {   isAddCommentsLoading: false,
        isCommentsSavedSuccess: false,
    }, action) {
    switch (action.type) {
        case 'ADD_CUSTOMER_COMMENTS_REQUEST':
            return { ...prevState, isAddCommentsLoading: true , error: '', isCommentsSavedSuccess: false};
        case 'ADD_CUSTOMER_COMMENTS_SUCCESS':
            return { ...prevState, isAddCommentsLoading: false, error: '', message:'Thank you for reaching out', isCommentsSavedSuccess: true };
        case 'ADD_CUSTOMER_COMMENTS_FAILURE':
            return { ...prevState, isAddCommentsLoading: false, error: action.error, isCommentsSavedSuccess: false, message:''};
        default:
            return prevState;
    }
}

export default CustomerCommentsReducer;