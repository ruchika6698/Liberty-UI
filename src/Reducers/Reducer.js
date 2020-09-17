import dashboardData from "./../dashboardData.json"

const defaultState ={
    dashbaord : dashboardData,
}

function Reducer(state = defaultState,action) {
    switch(action.type){
        case "GET_DASHBOARD_DATA":
            return {
                ...state,
                dashboard : action.payload
            }
            default : return state
    }
}

export default Reducer;