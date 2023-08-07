import Type from "../Action/Types"

const intialState = {
    city: []
}


const CityReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.citySuccess:
            return Object.assign({}, state, {
                city: action.payload
            })
        default:
            return state;
    }
}

export default CityReducer;