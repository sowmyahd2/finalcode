import Api from '../../Config/Api';
import Type from './Types';

export const getNewArrivals = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('newarrival/'+city +'/'+id)
        if(response.message === "success"){
            dispatch({
                    type : Type.newArrivalsSuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.newArrivalsFailure,
                payload : error.message
            })
         
        }
} 
export const getNewArrivalsProducts = (city,DepartmentId,BrandId) => async dispatch => {
    try
    {
        const response = await Api.get('brands/newarrivals/products/'+city+"/"+DepartmentId+"/"+BrandId)
        if(response.message === "success"){
            dispatch({
                    type : Type.newArrivalsProductsSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.newArrivalsProductsFailure,
                payload : error.message
            })
    }
} 
