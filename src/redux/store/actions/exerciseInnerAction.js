/*eslint-disable*/

import { exercisesConst } from "../constant/exerciseInnerConst"

export const getResetValue= (data) => (dispatch) =>{
    dispatch({type:exercisesConst.RESET_DAY,payload:data})
}
export const getSlotdata= (data) => (dispatch) =>{
    dispatch({type:exercisesConst.DATA_VAR,payload:data})
}