/*eslint-disable*/
import { exercisesConst } from "../constant/exerciseInnerConst";
const initialState = {
    reset:0,
    datavar:[]
}
export const ExercisesReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case exercisesConst.RESET_DAY:
            return {...state,reset:payload}
        case exercisesConst.DATA_VAR:
            return {...state,datavar:payload}
        default:
            return state ;
    }
}