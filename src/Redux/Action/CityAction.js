import Api from "../../Config/Api"
import Type from './Types';

export const getcity = () => async dispatch => {
    try {
        const response = await Api.get('city', {
            // Additional headers or parameters can be added here if needed
        });
        if (response.message === "success") {
            dispatch({
                type: Type.citySuccess,
                payload: response.data,
            });
        }
    } catch (error) {
        // Handle error (optional: log error or dispatch an error action)
        console.error("Error fetching city data:", error);
    }
};