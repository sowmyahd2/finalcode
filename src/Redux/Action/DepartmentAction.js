import Api from "../../Config/Api"
import Type from './Types';
import axios from 'axios';
export const getDepartment = () => async dispatch => {
    try
    {
      
        const response =  await axios.get(`${Api}department`);
        const res=response.data;
    
        if(res.message === "success"){
        dispatch({
                type : Type.departmentSuccess,
                payload : res.data
            })
        }
    } catch(error){
    
    }
} 
export const getCategoryByDepartment = (city,id) => async dispatch => {
    try
    {
        const response =  await axios.get(`${Api}departmentmaicategory/`+id)
       const res=response.data;
       console.log("rad",res);
        if(res.message === "success"){
        dispatch({
                type : Type.categoryByDepartmentSuccess,
                payload : res.data
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

