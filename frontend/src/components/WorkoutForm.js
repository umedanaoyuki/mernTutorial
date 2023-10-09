import {useState} from "react";
import {hasFormSubmit} from "@testing-library/user-event/dist/utils";

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setReps('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json);
        }
    }


    return(
        <form className="cretae" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)} value={load} />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)} value={reps} />

            <button>Add Workout</button>
        </form>

    )
}

export default WorkoutForm;