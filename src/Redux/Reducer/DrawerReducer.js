import Types from "../Action/Types"

const initialState = {
    isOpen: false,
    activeTab: 0,
}

const drawer = (state=initialState, action) => {
   
    switch(action.type) {
        case Types.toggleDrawer:
            return Object.assign({},state,{
                isOpen: action.payload.isOpen,
                activeTab: action.payload.activeTab
            })
        default: 
            return state;
    }
}

export default drawer;