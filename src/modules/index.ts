import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github";


const rootReducer = combineReducers({ counter, todos, github });
export default rootReducer;

//나중에 이타입을 컨테이너 컴포넌트에서 불러와서 사용해야하므로
//내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>