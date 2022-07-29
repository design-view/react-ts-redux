import { TodoState, TodosAction } from "./types";
import { createReducer  } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';
// 초기상태 선언
const initialStat: TodoState = [];

// 리듀서 작성하기
const todos = createReducer<TodoState, TodosAction>(initialStat,{
    [ADD_TODO]: (state,action) => {
        return state.concat({
            ...action.payload,
            done:false
        })
    },
    [TOGGLE_TODO]: (state,{ payload: id }) => 
    state.map(todo => (todo.id === id ? { ...todo, done: ! todo.done } : todo )),
    [REMOVE_TODO]: (state,{ payload: id }) => 
    state.filter(todo => todo.id !== id)
})
export default todos;