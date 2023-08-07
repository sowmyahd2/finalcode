import Type from '../Action/Types';

const intialState = {
    newArrivals: [],
    newArrivalsProducts:[],
}

const NewArrivalsReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.newArrivalsSuccess:
            return Object.assign({}, state, {
                newArrivals: action.payload
            })
            
        case Type.newArrivalsProductsSuccess:
            return Object.assign({}, state, {
                newArrivalsProducts: action.payload
            })
            default:
                return state; 
    } 
}

export default NewArrivalsReducer;