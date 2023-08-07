import Type from '../Action/Types';

const intialState = {
    category: [],
    subCategoryFilter:[],
}

const SubCategoryReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.SubCategoryFilterSuccess:
            return Object.assign({}, state, {
                subCategoryFilter: action.payload
            })
            default:
                return state;
    } 
}

export default SubCategoryReducer;