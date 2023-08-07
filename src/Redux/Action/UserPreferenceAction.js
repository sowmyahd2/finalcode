import Type from './Types';
import Api from '../../Config/Api';

export const setCity = (city) =>  dispatch => {
    
        
        dispatch({
                type : Type.selectCitySuccess,
                payload : city
            })
        
    } 
    export const  getpcartcount= (userid,city) => async dispatch => {
        try
        {
            const response =  await Api.get('pickcartcount/'+userid+'/'+city);
           
            if(response.message === "success"){
                dispatch({
                        type : Type.pcartcountsSuccess,
                        payload : response.data
                    })
                }
            } catch(error){
             
            }
    } 
    export const  gethomecartcount= (userid,city) => async dispatch => {
        try
        {
            const response =  await Api.get('homecartcount/'+userid+'/'+city);
           
            if(response.message === "success"){
                dispatch({
                        type : Type.homecountsSuccess,
                        payload : response.data
                    })
                }
            } catch(error){
             
            }
    }  
  
