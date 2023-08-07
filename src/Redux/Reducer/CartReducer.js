import Type from '../Action/Types';

const intialState = {
    addtoCart:[],
    error:"",
    remove:"",
}

const CartReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.addtocartSuccess:
            return Object.assign({}, state, {
                addtoCart: action.payload
            })
            case Type.removeproduct:
                return Object.assign({}, state, {
                    remove: action.payload
                })
            default:
                return state;
    } 
}

export default CartReducer;