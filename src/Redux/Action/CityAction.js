import Api from "../../Config/Api"
import Type from './Types';
import axios from 'axios';
export const getcity = () => async dispatch => {
    try
    {
        const response =  await axios.get(`${Api}city`,{
          
        });
        if(response.message === "success"){
        dispatch({
                type : Type.citySuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 