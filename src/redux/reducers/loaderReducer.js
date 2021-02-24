import { LOADER_OFF, LOADER_ON } from "../constants/postConstant";
const initialState = false;

const loader = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return true;
    case LOADER_OFF:
      return false;
    default:
      return state;
  }
};
export default loader;
