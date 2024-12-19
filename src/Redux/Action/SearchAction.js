import Api from '../../Config/Api';
import Type from './Types';
import axios from 'axios';
export const getSearch = (city,term) => async dispatch => {
    try
    {
        const body = {
            city,
            term,
            departmentId:"All"
        }
        const response = await Api.post('search/autocomplete',body)
        if(response.message === "success"){
            dispatch({
                    type : Type.searchSuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.searchFailure,
                payload : error.message
            })
            
         
        }
} 

export const ClearAutoComplete = () => dispatch => {
    dispatch({
        type:Type.clearAutoComplete
    })
}
