import Api from '../../Config/Api';
import Type from './Types';

export const  getBrandcat= (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('brands/getcatbrand/'+city+'/'+id)
       
        if(response.message === "success"){
            dispatch({
                    type : Type.brandcatSuccess,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
} 
export const getBrand = () => async dispatch => {
    try
    {
        const response = await Api.get('brands')
        if(response.message === "success"){
            dispatch({
                    type : Type.brandSuccess,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const getBrandOffer = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('brands/offers/'+city+"/"+id)
        if(response.message === "success"){
            dispatch({
                    type : Type.brandOfferSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    }
} 

export const getBrandOfferDetail = (city,DepartmentId,BrandId) => async dispatch => {
    try
    {
        const response = await Api.get('brands/offers/products/'+city+"/"+DepartmentId+"/"+BrandId)
        if(response.message === "success"){
            dispatch({
                    type : Type.brandOfferDetailSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.brandOfferDetailFailure,
                payload : error.message
            })
    }
} 


export const getBrandCategory = (city,BrandId) => async dispatch => {
    try
    {
        const response = await Api.get('products/brandcategory/'+city+"/"+BrandId)
        if(response.message === "success"){
            dispatch({
                    type : Type.brandcategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.brandcategoryFailure,
                payload : error.message
            })
    }
} 

export const getBrandMainCategory = (city,DepartmentId,BrandId,limit=24, offset=0, brandIds, price,sort) => async dispatch => {
    try
    {
        const response = await Api.get('brands/maincategory/'+city+"/"+DepartmentId+"/"+BrandId+"?limit="+limit+"&offset="+offset+"&brandIds="+brandIds+"&price="+price+"&sort="+sort)
        if(response.message === "success"){
            dispatch({
                    type : Type.brandMainCategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.brandMainCategoryFailure,
                payload : error.message
            })
    }
} 

export const getBrandSubCategory = (city,DepartmentId,BrandId, limit=24, offset=0, brandIds, price,sort) => async dispatch => {
    try
    {
        const response = await Api.get('brands/subcategory/'+city+"/"+DepartmentId+"/"+BrandId+"?limit="+limit+"&offset="+offset+"&brandIds="+brandIds+"&price="+price+"&sort="+sort)
        if(response.message === "success"){
            dispatch({
                    type : Type.brandSubCategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){  
            dispatch({
                type : Type.brandSubCategoryFailure,
                payload : error.message
            })
    }
}

export const getbrowseByBrandDepartment = (city,BrandId,DepartmentId) => async dispatch => {
    try
    {
        const response = await Api.get('brands/departmentBrowseby/'+BrandId+'/'+DepartmentId+"/"+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.browseByBrandDepartmentSuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.browseByBrandDepartmentFailure,
                payload : error.message
            })
            
         
        }
}
export const getbrowseByBrandCategory = (city,BrandId,DepartmentId) => async dispatch => {
    try
    {
        const response = await Api.get('brands/categoryBrowseby/'+BrandId+'/'+DepartmentId+"/"+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.browseByBrandCategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.browseByBrandCategoryFailure,
                payload : error.message
            })
            
         
        }
}

