import { put, call, takeLatest } from "redux-saga/effects";
import * as ReduxSaga from "redux-saga"
import axios from "axios";
import {
  APP_TYPES,
  getMenuSuccess,
  getTestimonalSuccess,
  getMenuFailure,
  getTestimonalFailure,
  getCalculatorSuccess,
  getCalculatorFailure
} from "./actions";

function getMenu() {
  return axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json");
}

function getTestimonal() {
  return axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json");
}

function getCalculator() {
  return axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json");
}

function* getMenuSagaEffect(): ReduxSaga.SagaIterator {
  try {
    const response = yield call(getMenu);
    yield put(getMenuSuccess(response.data.menu.items));
  } catch (error) {
    yield put(getMenuFailure());
  }
}

function* getTestimonalEffect(): ReduxSaga.SagaIterator {
  try {
    const response = yield call(getTestimonal);
    yield put(getTestimonalSuccess(response.data.slider));
  } catch (error) {
    yield put(getTestimonalFailure());
  }
}

function* getCalculatorEffect(): ReduxSaga.SagaIterator {
  try {
    const response = yield call(getCalculator);
    yield put(getCalculatorSuccess(response.data.calculator));
  } catch (error) {
    yield put(getCalculatorFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(APP_TYPES.GET_MENU_REQUEST, getMenuSagaEffect);
  yield takeLatest(APP_TYPES.GET_TESTIMONAL_REQUEST, getTestimonalEffect);
  yield takeLatest(APP_TYPES.GET_CALCULATOR_REQUEST, getCalculatorEffect);
}