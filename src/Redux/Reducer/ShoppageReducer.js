import Type from '../Action/Types';

const intialState = {
    shopPage: [],
    shopproducts:[],
    storeMainCategoryProducts:[],
    storeMainCategoryProductsHasMore: true,
    shopdetail:""
}

const ShopPageReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.shoppageSuccess:
           
            return Object.assign({}, state, {
                shopdetail: action.payload
            })
            case Type.shoppageproductsSucess:
                console.log("fdsasa",action.payload);
                return Object.assign({}, state, {
                    shopproducts: action.payload
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
