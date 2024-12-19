import Types from "./Types"
import axios from 'axios';
export const toggleDrawer = (isOpen, activeTab=0) => dispatch => {

    dispatch({
        type: Types.toggleDrawer,
        payload: {
            isOpen: isOpen,
            activeTab: activeTab
        }
    })
}