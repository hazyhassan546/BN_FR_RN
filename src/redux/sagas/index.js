import { all, fork } from 'redux-saga/effects';
import nameSaga from './nameSaga';

export default function* rootSaga() {
  yield all([
    fork(nameSaga),
  ]);
}
