//as const를 작성하는 이유
//액션생성 함수를 생성시 매개변수 타입이 string으로 되어있지 않도록 방지
import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;
//원본타입을 나타내도록 함
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";
//액션 생성함수 생성
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();
//스테이트의 타입을 지정
type CounterState = {
    count: number;
};
//초기상태 생성
const initialStat: CounterState = {
    count: 0
};
//리듀서에 액션타입을 지정해야함
const actions = { increase, decrease, increaseBy}
type CounterAction = ActionType<typeof actions>

//리듀서 만들기
//createReducer를 통해서 오브젝트맵 형태로 리듀서를 구현
const counter = createReducer<CounterState, CounterAction>(initialStat, {
    [INCREASE]: state => ({ count: state.count + 1}),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
})
export default counter;