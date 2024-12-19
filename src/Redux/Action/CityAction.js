import Api from "../../Config/Api"
import Type from './Types';
import axios from 'axios';
export const getcity = () => async dispatch => {
    try
    {
        const response =  await axios.get(`${Api}city`,{
         
        });
        const res=response.data;
        
        if(res.message === "success"){
        dispatch({
                type : Type.citySuccess,
                payload : res.data
            })
        }
    } catch(error){
    
    }
} 