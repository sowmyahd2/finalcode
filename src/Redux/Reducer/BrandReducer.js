import Type from '../Action/Types';

const intialState = {
    brand: [],
    brandOffer: [],
    brandcat:[],
    brandOfferDetail:[],
    brandCategory:[],
    brandMainCategory:[],
    brandMainCategoryHasMore: true,
    brandSubCategory:[],
    brandSubCategoryHasMore: true,
    browseByBrandDepartment:[],
    browseByBrandCategory:[],
}

const BrandReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.brandSuccess:
            return Object.assign({}, state, {
                brand: action.payload
            })
            case Type.brandcatSuccess:
                return Object.assign({}, state, {
                    brandcat: action.payload
                })
            case Type.brandOfferSuccess:
            return Object.assign({}, state, {
                brandOffer: action.payload
            })            
            case Type.brandOfferDetailSuccess:
            return Object.assign({}, state, {
                brandOfferDetail: action.payload
            })            
            case Type.brandcategorySuccess:
            return Object.assign({}, state, {
                brandCategory: action.payload,
            })
            case Type.brandMainCategorySuccess:
            return Object.assign({}, state, {
                brandMainCategory: action.payload,
                brandMainCategoryHasMore: action.payload.length > 0 ? true : false
            })
            case Type.brandSubCategorySuccess:
            return Object.assign({}, state, {
                brandSubCategory: action.payload,
                brandSubCategoryHasMore: action.payload.length > 0 ? true : false
            })            
            case Type.browseByBrandDepartmentSuccess:
            return Object.assign({}, state, {
                browseByBrandDepartment: action.payload
            })
            case Type.browseByBrandCategorySuccess:
            return Object.assign({}, state, {
                browseByBrandCategory: action.payload
            })
            
            default:
                return state;
    } 
}

export default BrandReducer;