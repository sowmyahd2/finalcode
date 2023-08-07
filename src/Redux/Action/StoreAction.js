import Api from '../../Config/Api';
import Type from './Types'

export const getStore = (city,id) => async dispatch => {
    try
    {
        const response = await Api.get('stores/catstore/'+city+"/"+id)
        if(response.message === "success"){
            dispatch({
                    type : Type.storeSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    console.log(error)
        }

}
export const getcatStore = () => async dispatch => {
    try
    {
        const response = await Api.get('stores')
        if(response.message === "success"){
            dispatch({
                    type : Type.storecatSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    console.log(error)
        }

}
export const getMostViewStore = (city) => async dispatch => {
    try
    {
        const response = await Api.get('stores/mostview/'+city)
        if(response.message === "success"){
            dispatch({
                    type : Type.mostViewStoreSuccess,
                    payload : response.data
                })
            }
        } catch(error){  
    }
}