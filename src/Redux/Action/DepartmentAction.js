import Api from "../../Config/Api"
import Type from './Types';

export const getDepartment = () => async dispatch => {
    try
    {
        const response =  await Api.get('department');
        if(response.message === "success"){
        dispatch({
                type : Type.departmentSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 
export const getCategoryByDepartment = (city,id) => async dispatch => {
    try
    {
        const response =  await Api.get('department/category/'+id)
        if(response.message === "success"){
        dispatch({
                type : Type.categoryByDepartmentSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 

export const getBrowseByDepartment = (city,id) => async dispatch => {
    try
    {
        const response =  await Api.get('department/browseby/'+id+"/"+city)
        if(response.message === "success"){
        dispatch({
                type : Type.browseByDepartmentSuccess,
                payload : response.data
            })
        }
    } catch(error){
    
    }
} 

