import { combineReducers } from "redux";
import { addReducer } from "./reducers/addReducer";
import { addCountReducer } from "./reducers/addReducer";
import { CalTotal } from "./reducers/addReducer";

const rootReducer = combineReducers({addReducer,addCountReducer, CalTotal})

export default rootReducer