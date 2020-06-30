import { IMenu, ISlider, ICalculator } from "./reducer";
export const APP_TYPES = {
  GET_MENU_REQUEST: "@@APP/GET_MENU_REQUEST",
  GET_MENU_SUCCESS: "@@APP/GET_MENU_SUCCESS",
  GET_MENU_FAILURE: "@@APP/GET_MENU_FAILURE",

  GET_TESTIMONAL_REQUEST: "@@APP/GET_TESTIMONAL_REQUEST",
  GET_TESTIMONAL_SUCCESS: "@@APP/GET_TESTIMONAL_SUCCESS",
  GET_TESTIMONAL_FAILURE: "@@APP/GET_TESTIMONAL_FAILURE",

  GET_CALCULATOR_REQUEST: "@@APP/GET_CALCULATOR_REQUEST",
  GET_CALCULATOR_SUCCESS: "@@APP/GET_CALCULATOR_SUCCESS",
  GET_CALCULATOR_FAILURE: "@@APP/GET_CALCULATOR_FAILURE",
} as const;

interface IGetMenuRequest {
  type: typeof APP_TYPES.GET_MENU_REQUEST;
};

interface IGetMenuSuccess {
  type: typeof APP_TYPES.GET_MENU_SUCCESS;
  payload: Array<IMenu>;
};

interface IGetMenuFailure {
  type: typeof APP_TYPES.GET_MENU_FAILURE;
};

interface IGetTestimonalRequest {
  type: typeof APP_TYPES.GET_TESTIMONAL_REQUEST;
};

interface IGetTestimonalSuccess {
  type: typeof APP_TYPES.GET_TESTIMONAL_SUCCESS;
  payload: ISlider;
};

interface IGetTestimonalFailure {
  type: typeof APP_TYPES.GET_TESTIMONAL_FAILURE;
};

interface IGetCalculatorRequest {
  type: typeof APP_TYPES.GET_CALCULATOR_REQUEST;
};

interface IGetCalculatoSuccess {
  type: typeof APP_TYPES.GET_CALCULATOR_SUCCESS;
  payload: ICalculator;
};

interface IGetCalculatoFailure {
  type: typeof APP_TYPES.GET_CALCULATOR_FAILURE;
};

export type AppActions =
  | IGetMenuRequest
  | IGetMenuSuccess
  | IGetMenuFailure
  | IGetTestimonalRequest
  | IGetTestimonalSuccess
  | IGetTestimonalFailure
  | IGetCalculatorRequest
  | IGetCalculatoSuccess
  | IGetCalculatoFailure;

export function getMenuRequest() {
  return { type: APP_TYPES.GET_MENU_REQUEST };
}

export function getMenuSuccess(payload: IMenu) {
  return { type: APP_TYPES.GET_MENU_SUCCESS, payload };
}

export function getMenuFailure() {
  return { type: APP_TYPES.GET_MENU_FAILURE };
}

export function getTestimonalRequest() {
  return { type: APP_TYPES.GET_TESTIMONAL_REQUEST };
}

export function getTestimonalSuccess(payload: ISlider) {
  return { type: APP_TYPES.GET_TESTIMONAL_SUCCESS, payload };
}

export function getTestimonalFailure() {
  return { type: APP_TYPES.GET_TESTIMONAL_FAILURE };
}

export function getCalculatorRequest() {
  return { type: APP_TYPES.GET_CALCULATOR_REQUEST };
}

export function getCalculatorSuccess(payload: ICalculator) {
  return { type: APP_TYPES.GET_CALCULATOR_SUCCESS, payload };
}

export function getCalculatorFailure() {
  return { type: APP_TYPES.GET_CALCULATOR_FAILURE };
}
