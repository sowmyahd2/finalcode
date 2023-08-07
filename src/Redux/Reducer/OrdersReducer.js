import Type from '../Action/Types';

const intialState = {
    psorders: [],

}

const OrdersReducer = (state=intialState, action) => {
    
    switch(action.type){
        case Type.psorderSuccess:
            return Object.assign({}, state, {
                psorders: action.payload
            })

    
    

            default:return state;
    }
}

export default OrdersReducer;