import Type from "../Action/Types"

const intialState = {
    department: [],
    categoryByDepartment:[],
    browseByDepartment:[],
}


const DepartmentReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.departmentSuccess:
            return Object.assign({}, state, {
                department: action.payload
            })
        case Type.categoryByDepartmentSuccess:
            return Object.assign({}, state,{
                categoryByDepartment:action.payload
            })
        case Type.browseByDepartmentSuccess:
            return Object.assign({}, state,{
                browseByDepartment:action.payload

            })
        default:
            return state;
    }
}

export default DepartmentReducer;