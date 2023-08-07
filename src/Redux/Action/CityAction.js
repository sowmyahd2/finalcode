import Api from "../../Config/Api"
import Type from './Types';

export const getcity = () => async dispatch => {
    try
    {
        const response =  await Api.get('city');
        if(response.message === "success"){
        dispatch({
                type : Type.citySuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 