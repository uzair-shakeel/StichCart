import ApiGateway from './api-gateway';

const CustomerCommentsApi = {

    addComments: function addComments(commentsReq) {
        let url = `comments`;
        return ApiGateway.post(url, commentsReq);
    }

} 

export default CustomerCommentsApi;