import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_SERVICES_REQUEST,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "../actions/services";

function* fetchServices() {
  try {
    const response = yield call(
      axios.get,
      "https://admin.naxa.com.np/api/services"
    );
    yield put(fetchServicesSuccess(response.data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

function* servicesSaga() {
  yield takeEvery(FETCH_SERVICES_REQUEST, fetchServices);
}

export default servicesSaga;
