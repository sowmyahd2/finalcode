import Api from '../../Config/Api';
import Type from './Types'
import axios from 'axios';
export const getShopPage = (city,DealerId) => async dispatch => {
    try
    {
       
        let city1=city;
        if(city1==="mysore"){
            city1="mysuru";
        }
        
        const res =  await axios.get(`${Api}dealerdetail/${DealerId}/${city1}`);

       console.log("fd",res.data);
        if(res.data.message === "success"){
            dispatch({
                    type : Type.shoppageSuccess,
                    payload : res.data.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.shoppageFailure,
                payload : error.message
            })
        }

}
export const getShopPageproducts= (city,DealerId) => async dispatch => {
    try
    {
       
        let city1=city;
        if(city1==="mysore"){
            city1="mysuru";
        }
        
        const res =  await axios.get(`${Api}storeproducts/${city1}`);

       console.log("fd",res.data);
        if(res.data.message === "success"){
            dispatch({
                    type : Type.shoppageproductsSucess,
                    payload : res.data.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.shoppageFailure,
                payload : error.message
            })
        }

}

export const getStoreMainCategoryProducts = (city,DealerId,DepartmentId, limit=24, offset=0, brandIds,catIds, price,sort) => async dispatch => {
    try
    {
        const response = await Api.get('/store/maincategoryproducts/'+DealerId+"/"+DepartmentId+"/"+city+"?limit="+limit+"&offset="+offset+"&brandIds="+brandIds+"&catIds="+catIds+"&price="+price+"&sort="+sort)
        if(response.message === "success"){
            dispatch({
                    type : Type.storeMainCategoryProductsSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.storeMainCategoryProductsFailure,
                payload : error.message
            })
        }

}