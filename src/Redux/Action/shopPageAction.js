import Api from '../../Config/Api';
import Type from './Types'

export const getShopPage = (city,DealerId) => async dispatch => {
    try
    {
        const response = await Api.get('/store/categoryproducts/'+DealerId+"/"+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.shoppageSuccess,
                    payload : response.data
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