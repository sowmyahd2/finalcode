import Api from '../../Config/Api';
import Type from './Types';

export const getProduct = () => async dispatch => {
    try
    {
        const response = await Api.get('products')
        if(response.message === 'success'){
            dispatch({
                type : Type.productSuccess,
                payload : response.data
            })
        }
    }catch(error){
        dispatch({
            type : Type.productFailure,
            payload : error.message
        })
    }
}

export const getMostViewProduct = (city) => async dispatch => {
    try
    {
        const response = await Api.get('products/mostview/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.mostViewProductSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.mostViewProductFailure,
                payload : error.message
            })
    }
}

export const addtowishlist = (userid,pid,city) => async dispatch => {
    try
    {
        const response = await Api.get('addtowishlist/'+userid+"/"+pid+"/"+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.AddtowishlistSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            
    }
}

export const getProductByDepartment = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('products/department/' +city +'/'+id)
        if(response.message === 'success'){
            dispatch({
                type : Type.productByDepartmentSuccess,
                payload : response.data
            })
        }
    }catch(error){
        dispatch({
            type : Type.productByDepartmentFailure,
            payload : error.message
        })
    }
}
export const getProductbySubcategory = (city,id,limit=24, offset=0, brandIds, price,sort) => async dispatch => {
    try
    {
        const response = await Api.get('products/subcategory/' +city +'/'+id+"?limit="+limit+"&offset="+offset+"&brandIds="+brandIds+"&price="+price+"&sort="+sort)
        if(response.message === 'success'){
            dispatch({
                type : Type.productBySubcategorySuccess,
                payload : response.data
            })
        }
    }catch(error){
        dispatch({
            type : Type.productBySubcategoryFailure,
            payload : error.message
        })
    }
}
export const getProductByMaincategory = (city,id, limit=24, offset=0, brandIds, price,sort) => async dispatch => {
    try
    {
        const response = await Api.get('products/maincategory/' +city +'/'+id+"?limit="+limit+"&offset="+offset+"&brandIds="+brandIds+"&price="+price+"&sort="+sort)
        if(response.message === 'success'){
            dispatch({
                type : Type.productByMaincategorySuccess,
                payload : response.data
            })
        }
    }catch(error){
        dispatch({
            type : Type.productByMaincategoryFailure,
            payload : error.message
        })
    }
}

export const getProductDetails = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('products/'+id +'/'+city)
        if(response.message === 'success'){
            dispatch({
                type : Type.productDetailsSuccess,
                payload : response.data
            })
        }
    }catch(error){
        dispatch({
            type : Type.productDetailsFailure,
            payload : error.message
        })
    }
}