//types
type ActionType = {
    type: "active"
    payload: { loading: boolean }
}

export type stateIn = {
    loading: boolean
}
const initState: stateIn = {
    loading: false
};


export const loadingReducer = (state = initState, action: ActionType): stateIn => { // fix any
    switch (action.type) {
        case "active": {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): ActionType => {
    return {
        type: "active",
        payload: {loading}
    }
}; // fix any