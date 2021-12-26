/*eslint-disable*/

import { exercisesConst } from "../constant/exerciseInnerConst"

export const getResetValue= (data) => (dispatch) =>{
    dispatch({type:exercisesConst.RESET_DAY,payload:data})
}