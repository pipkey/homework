//types
export type initialStateType = {
    _id: number,
    name: string,
    age: number
}
type SortNameUpType = {
    type: "sort",
    payload: "up"
}
type SortNameDownType = {
    type: "sort",
    payload: "down"
}
type CheckAgeType = {
    type: "check",
    payload: 18
}

type ActionTypes = SortNameUpType | SortNameDownType | CheckAgeType


export const homeWorkReducer = (state: Array<initialStateType>, action: ActionTypes): Array<initialStateType> => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })]
            } else if (action.payload === "down") {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })]
            }
            return state
        }
        case "check": {
           return [...state.filter(el => el.age > action.payload)]
        }
        default:
            return state
    }


};