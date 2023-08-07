import Api from '../../Config/Api';
import Type from './Types';

export const getAddtoCart = (city,type,dealerPriceId,qty,) => async dispatch => {
    try
    {
        const body = {
            city,
            type,
            dealerPriceId,
            qty,
        }
        const response = await Api.post('cart',body)
        if(response.message === "success"){
            dispatch({
                    type : Type.addtocartSuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.addtocartFailure,
                payload : error.message
            })          
         
        }
    } 
    export const getViewCart = (type,city) => async dispatch => {
        try
        {
            const response = await Api.get('cart/'+type+'/'+city)
            if(response.message === "success"){
                dispatch({
                        type : Type.addtocartSuccess,
                        payload : response.data
                    })
                }
            } catch(error){
                dispatch({
                    type : Type.addtocartFailure,
                    payload : error.message
                })          
             
            }
        } 
    export const removeproduct=(userid,type,city,productid)=>async dispatch=>{

        try{
            const response = await Api.get('cart/removeproduct/'+userid+'/'+type+'/'+city+'/'+productid)
            if(response.message === "success"){
                dispatch({
                        type : Type.removeproduct,
                        payload : response.data
                    })
                }

        }catch(error){

        }
    }