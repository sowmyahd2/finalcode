import Type from '../Action/Types';

const intialState = {
    category: [],
    browseByMainCategory:[],
    browseBySubCategory:[],
    
}

const CategoryReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.CategorySuccess:
            return Object.assign({}, state, {
                category: action.payload
            })
            case Type.browseByMainCategorySuccess:
                return Object.assign({}, state, {
                    browseByMainCategory: action.payload
                })
                case Type.browseBySubCategorySuccess:
                    return Object.assign({}, state, {
                        browseBySubCategory: action.payload
                    })
            
            default:
                return state;
    } 
}

export default CategoryReducer;