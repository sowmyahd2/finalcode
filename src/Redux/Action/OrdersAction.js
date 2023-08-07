import Api from "../../Config/Api"
import Type from './Types';

export const getpsorders = (userid,cityname) => async dispatch => {
    try
    {
        const response =  await Api.get('pickupinshoporders/'+userid+'/'+cityname);
      
        if(response.message === "success"){
            alert(response.data[0].ProductName);
        dispatch({
                type : Type.psorderSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 



