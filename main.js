function addExercise() {
    // Get form values
    var exerciseName = document.getElementById("exerciseName").value;
    var sets = document.getElementById("sets").value;
    var reps = document.getElementById("reps").value;
    var duration = document.getElementById("duration").value;

    // Validate form values
    if (!exerciseName || !sets || !reps || !duration) {
        alert("Please fill in all fields.");
        return;
    }

    // Create exercise object
    var exercise = {
        name: exerciseName,
        sets: sets,
        reps: reps,
        duration: duration
    };

    // Add exercise to the list
    var exerciseList = document.getElementById("exerciseList");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(formatExercise(exercise)));
    exerciseList.appendChild(listItem);

    // Clear form fields
    document.getElementById("exerciseName").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("duration").value = "";
}

function formatExercise(exercise) {
    return `${exercise.name} - ${exercise.sets} sets x ${exercise.reps} reps (${exercise.duration} mins)`;
}
