/*eslint-disable*/
import { exercisesConst } from "../constant/exerciseInnerConst";
const initialState = {
    reset:0
}
export const ExercisesReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case exercisesConst.RESET_DAY:
            return {...state,reset:payload}
            break;
        default:
            break;
    }
}