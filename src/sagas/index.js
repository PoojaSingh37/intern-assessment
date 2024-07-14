import { all } from 'redux-saga/effects';
import servicesSaga from './services';

export default function* rootSaga() {
  yield all([
    servicesSaga(),
  ]);
}
