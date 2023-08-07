import Type from '../Action/Types';

const intialState = {
    search: {
        category:[],
        brands:[],
        stores:[],
    },
}

const SearchReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.searchSuccess:
            return Object.assign({}, state, {
                search: action.payload
            })
        case Type.clearAutoComplete:
            return intialState            
            default:
                return state;
    } 
}

export default SearchReducer;