import { APP_TYPES, AppActions } from "./actions";

export interface IApp {
  menu: Array<IMenu>;
  slider: ISlider;
  calculator: ICalculator;
};

export interface IMenu {
  text: string;
  route: string;
};

export interface IReview {
  name: string;
  position: string;
  comment: string;
};

export interface ISlider {
  title: string;
  reviews: Array<IReview>;
};

export interface ICalculator {
  title: string;
  description: string;
};

const initialState: IApp = {
  menu: [],
  slider: { title: '', reviews: [] },
  calculator: { title: '', description: '' }
};

function belloteroReducer(state: IApp = initialState, action: AppActions): IApp {
  switch (action.type) {
    case APP_TYPES.GET_MENU_SUCCESS:
      return { ...state, menu: action.payload };
    case APP_TYPES.GET_TESTIMONAL_SUCCESS:
      return { ...state, slider: action.payload };
    case APP_TYPES.GET_CALCULATOR_SUCCESS:
      return { ...state, calculator: action.payload };
    default:
      return state
  }
};

export default belloteroReducer;