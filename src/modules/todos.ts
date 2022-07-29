// 액션 타입 선언, 액션 생성 함수, 초기값, 리듀서
// 할일추가, 할일제거, 할일체크

// 액션타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;
// 액션 생성 함수 
export const addTodo = (text: string) => ({
    type:ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = (id:number) => ({
    type:TOGGLE_TODO,
    payload: id
})
export const removeTodo = (id:number) => ({
    type:REMOVE_TODO,
    payload: id
})

// 액션 객체들에 대한 타입 작성
type TodosAction = 
| ReturnType<typeof addTodo>
| ReturnType<typeof toggleTodo>
| ReturnType<typeof removeTodo>

// 상태에서 사용할  할일 항목 데이터 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}
// 이 모듈에서 관리할 상태 타입 작성
export type TodoState = Todo[]

// 초기상태 선언
const initialStat: TodoState = [];

// 리듀서 작성하기
function todos(
    state: TodoState = initialStat,
    action: TodosAction
): TodoState {
    switch(action.type){
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.payload ? {...todo, done: !todo.done } : todo
            )
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload );
        default:
            return state
    }
}
export default todos;