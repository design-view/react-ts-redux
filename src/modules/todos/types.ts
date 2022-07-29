import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

// 모든 액션 객체들에 대한 타입준비
// 함수의 리턴타입을 추론
export type TodosAction = ActionType<typeof actions>
// 상태에서 사용할  할일 항목 데이터 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}
// 이 모듈에서 관리할 상태 타입 작성
export type TodoState = Todo[]