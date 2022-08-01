import {  createStandardAction } from "typesafe-actions";

// 액션타입 선언
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
// 액션 생성 함수 
export const addTodo: any = (text: string) => ({
    type:ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();