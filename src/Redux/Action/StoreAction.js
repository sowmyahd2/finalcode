import Api from '../../Config/Api';
import Type from './Types'
import axios from 'axios';
export const getStore = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('stores/catstore/'+city+"/"+id)
        if(response.message === "success"){
            dispatch({
                    type : Type.storeSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    console.log(error)
        }

}
export const getcatStore = () => async dispatch => {
    try
    {
        const res =  await axios.get(`${Api}stores`);
        const response=res.data;
        
        if(response.message === "success"){
            dispatch({
                    type : Type.storecatSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    console.log(error)
        }

}
export const getMostViewStore = (city) => async dispatch => {
    try
    {
      
        if(city==="mysore"){
            city="mysuru";
        }
        const res =  await axios.get(`${Api}mostviewedstores/${city}`);
        const response=res.data;
        console.log("gdata",response);

        if(response.message === "success"){
            dispatch({
                    type : Type.mostViewStoreSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    }
}