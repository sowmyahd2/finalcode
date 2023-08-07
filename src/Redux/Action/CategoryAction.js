import Api from '../../Config/Api';
import Type from './Types';

export const getCategory = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('Category/subcategory/'+id +'/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.CategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.CategoryFailure,
                payload : error.message
            })
            
         
        }
} 
export const getBrowseByMainCategory = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('maincategory/browseby/'+id +'/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.browseByMainCategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.browseByMainCategoryFailure,
                payload : error.message
            })
            
         
        }
} 
export const getBrowseBySubCategory = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('subcategory/browseby/'+id +'/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.browseBySubCategorySuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.browseByMainCategoryFailure,
                payload : error.message
            })
            
         
        }
} 