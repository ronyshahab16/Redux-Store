import { createStore } from "redux";
import rootReducer from "./redux/main";

const store = createStore(rootReducer)

export default store