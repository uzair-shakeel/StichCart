import { put, call, takeEvery, delay } from "redux-saga/effects"; // Import delay
import * as actions from "../actions/customercomments-action";
import CustomerCommentsApi from "../service/customercomments-api";

const { addCustomerComments } = actions;

export function* doAddCustomerComments(action) {
  try {
    yield put(addCustomerComments.request());
    yield call(CustomerCommentsApi.addComments, action.addCommentsReq);
    yield put(addCustomerComments.success());
  } catch (err) {
    yield put(
      addCustomerComments.failure(
        "Sorry, Saving your comments encountered an error. Please try again"
      )
    );
  }
}

export function* customerCommentsWatcher() {
  yield takeEvery(actions.ADD_CUSTOMER_COMMENTS, doAddCustomerComments);
}
