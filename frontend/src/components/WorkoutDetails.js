const WorkoutDetails = ({ workout }) => {
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg):</strong>{workout._id}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createAt}</p>
        </div>
    );
}
export default WorkoutDetails;