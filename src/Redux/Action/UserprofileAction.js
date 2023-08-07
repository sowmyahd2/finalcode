import Api from '../../Config/Api';
import Type from './Types';


export const userprofile = (userid) => async dispatch => {
    try
    {
        const response = await Api.get('user/profile/'+userid)
        if(response.message === "success"){
            dispatch({
                    type : Type.Userprofile,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}

export const Useraddress = (userid) => async dispatch => {
    try
    {
        const response = await Api.get('user/address/'+userid)
        if(response.message === "success"){
            dispatch({
                    type : Type.Useraddress,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const getpickorderdetail= (city,userid) => async dispatch => {
    try
    
    {
        const response = await Api.get('pickupordertail/'+city+"/"+userid)
        
        if(response.message === "success"){
            dispatch({
                    type : Type.pickupordertailsSuccess,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const Inactiveaddress = (id) => async dispatch => {
    try
    {
        const response = await Api.get('inactiveaddress/'+id)
        if(response.message === "success"){
            dispatch({
                    type : Type.InactiveUseraddress,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}

export const Userlocality = (userid) => async dispatch => {
    try
    {
        const response = await Api.get('user/location/'+userid)
        if(response.message === "success"){
            dispatch({
                    type : Type.Userlocality,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const addbillingaddress = (userid,mobile,name,landmark,pincode,adress) => async dispatch => {
    try
    {
        const response = await Api.get('user/addadress/'+userid+'/'+mobile+'/'+name+'/'+landmark+'/'+pincode+'/'+adress)
        if(response.message === "success"){
            dispatch({
                    type : Type.addaddress,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const getpsorders = (userid,cityname) => async dispatch => {
    try
    {
        const response =  await Api.get('pickupinshoporders/'+userid+'/'+cityname);
      
        if(response.message === "success"){
           
        dispatch({
                type : Type.psorderSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }

} 
export const gethomedeliverysorders = (userid,cityname) => async dispatch => {
    try
    {
        const response =  await Api.get('homedeliveryorders/'+cityname+'/'+userid);
      
        if(response.message === "success"){
           
        dispatch({
                type : Type.homedeliveryorderSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }

}
export const gethomedeliverysorderdetail = (city,orderid) => async dispatch => {
    try
    {
        const response =  await Api.get('homedeliveryorderdetail/'+city+'/'+orderid);
      
        if(response.message === "success"){
           
        dispatch({
                type : Type.homedeliveryorderdetailSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }

}
export const cancelproduct=(city,orderid,reasonid,comment)=>async dispatch=>{
    try
    {
        const response =  await Api.get('cancelpickorder/'+city+'/'+orderid+"/"+reasonid+"/"+comment);
      
        if(response.message === "success"){
           
        dispatch({
                type : Type.cancelorderSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
}
export const getwishlist = (userid,city) => async dispatch => {
    try
    {
        const response = await Api.get('wishlist/'+userid+"/"+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.wishlistSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            
    }
}
export const removewishproduct = (userid,city,pid) => async dispatch => {
    try
    {
        const response = await Api.get('removewishlist/'+userid+"/"+city+"/"+pid)
        if(response.message === "success"){
            dispatch({
                    type : Type.removewishlistSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            
    }
}

