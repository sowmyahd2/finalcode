import Type from '../Action/Types'

const intialState = {
    store: [],
    mostView:[],
    storecat: [],
}

const StoreReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.storeSuccess:
            return Object.assign({}, state, {
                store: action.payload
            })
            case Type.storecatSuccess:
                return Object.assign({}, state, {
                    store: action.payload
                })
    
        case Type.mostViewStoreSuccess:
            return Object.assign({}, state, {
                mostView: action.payload
            })
            default:
                return state;
    }
 }

export default StoreReducer;