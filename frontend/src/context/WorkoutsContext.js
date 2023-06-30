import {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

// state: state before changing
// action: object that we passed into the dispatch function i.e., type and payload
export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS': 
            return{
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter((w) => w._id!== action.payload._id)
            }

        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    // state : {workouts: null}


    // dispatch({type: 'SET_LOADS', payload: [{}, {}]})
    // dispatch : we use it for updation of the state oer the state which we used above i.e., workoutsReducer

    return(
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}