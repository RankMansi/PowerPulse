// import { useEffect } from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()

      const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }      
    }

    return(
        <div className="workout-details">
            <h4>{workout.title }</h4>
            <br></br>
            <p className="load"><strong>Load(kg) :</strong> {workout.load}</p>
            <br></br>
            <p className="reps"><strong>Reps :</strong> {workout.reps}</p>
            <br></br>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <p className="line"><br></br></p>
            <span className="material-symbols-outlined" onClick={handleClick}>
                Delete
                {/* <img src="D:/Projects/Backend/Project-2_To-Do-List/frontend/8664938_trash_can_delete_remove_icon.png"></img> */}
            </span>
        </div>
    )
}

export default WorkoutDetails 