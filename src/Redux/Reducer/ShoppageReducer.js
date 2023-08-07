import Type from '../Action/Types';

const intialState = {
    shopPage: [],
    storeMainCategoryProducts:[],
    storeMainCategoryProductsHasMore: true
    
}

const ShopPageReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.shoppageSuccess:
            return Object.assign({}, state, {
                shopPage: action.payload
            })
            case Type.storeMainCategoryProductsSuccess:
            return Object.assign({}, state, {
                storeMainCategoryProducts: action.payload,
                storeMainCategoryProductsHasMore: action.payload.length > 0 ? true : false
            })
            default:
                return state; 
    } 
}

export default ShopPageReducer;
