import { all, take, call, put, fork } from "redux-saga/effects";
import { nameActionCreator } from "../actions/nameActions";
import { getNamesApi, getTrendingNamesApi } from "../Api/apiCalls";
import { GET_NAMES, GET_RELATED_NAMES, GET_TRENDING_NAMES } from "../types/types";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
var alphabet = alpha.map((x) => {
  return { title: String.fromCharCode(x).toLowerCase(), data: [] };
});
//console.log(alphabet);

function* getNameSaga({ payload }) {
  try {
    const response = yield call(getNamesApi, payload);
    alphabet = alpha.map((x) => {
      return { title: String.fromCharCode(x).toLowerCase(), data: [] };
    });
    if (response?.length > 0) {
      response.map((item, index) => {
        const word = item.name.charAt(0).toLowerCase();
        let alphabetsString = "abcdefghijklmnopqrstuvwxyz";
        if (alphabetsString.indexOf(word) > -1) {
          alphabet[alphabetsString.indexOf(word)].data.push(item);
        }
      });
    }

    // console.log(alphabet);
    const result = [];
    yield alphabet.map((item, index) => {
      if (item?.data?.length > 0) {
        result.push(item);
      }
    });
    yield put(nameActionCreator.getNamesSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getNamesError(err));
  }
}

function* getRelatedNameSaga({ payload }) {
  try {
    const response = yield call(getNamesApi, payload);
    alphabet = alpha.map((x) => {
      return { title: String.fromCharCode(x).toLowerCase(), data: [] };
    });
    if (response?.length > 0) {
      response.map((item, index) => {
        const word = item.name.charAt(0).toLowerCase();
        let alphabetsString = "abcdefghijklmnopqrstuvwxyz";
        if (alphabetsString.indexOf(word) > -1) {
          alphabet[alphabetsString.indexOf(word)].data.push(item);
        }
      });
    }

    // console.log(alphabet);
    const result = [];
    yield alphabet.map((item, index) => {
      if (item?.data?.length > 0) {
        result.push(item);
      }
    });
    yield put(nameActionCreator.getRelatedNamesSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getRelatedNamesError(err));
  }
}

function* getTrendingNameSaga({ payload }) {
  try {
    const response = yield call(getTrendingNamesApi, payload);
    yield put(nameActionCreator.getTrendingNamesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getTrendingNamesError(err));
  }
}

function* getNamesWatchersSaga() {
  while (true) {
    const action = yield take(GET_NAMES);
    yield* getNameSaga(action);
  }
}

function* getTrendingNameWatchersSaga() {
  while (true) {
    const action = yield take(GET_TRENDING_NAMES);
    yield* getTrendingNameSaga(action);
  }
}

function* getRelatedNameWatchersSaga() {
  while (true) {
    const action = yield take(GET_RELATED_NAMES);
    yield* getRelatedNameSaga(action);
  }
}

export default function* () {
  yield all([
    fork(getNamesWatchersSaga),
    fork(getTrendingNameWatchersSaga),
    fork(getRelatedNameWatchersSaga),
  ]);
}
