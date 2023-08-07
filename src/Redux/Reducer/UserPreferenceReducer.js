import Type from "../Action/Types"

const intialState = {
    city: "mysore",
    pcount:"0",
    homecount:"0",


}


const UserPreferenceReducer = (state=intialState, action) => {

    switch(action.type){
        case Type.selectCitySuccess:
            return Object.assign({}, state, {
                city: action.payload
            })
            case Type.pcartcountsSuccess:
            return Object.assign({}, state, {
                pcount: action.payload
            })
            case Type.homecountsSuccess:
            return Object.assign({}, state, {
                homecount: action.payload
            })
            
        default:

            return state;
    }
}

export default UserPreferenceReducer;