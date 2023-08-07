import Api from '../../Config/Api';
import Type from './Types';

export const getSubCategoryFilter = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('subcategory/filterlist/'+id +'/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.SubCategoryFilterSuccess,
                    payload : response.data
                })
            }
        } catch(error){
            dispatch({
                type : Type.SubCategoryFilterFailure,
                payload : error.message
            })
            
         
        }
} 