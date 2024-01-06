function recordProgress() {
    // Get form values
    var weight = document.getElementById("weight").value;
    var bodyMeasurements = document.getElementById("bodyMeasurements").value;
    var notes = document.getElementById("notes").value;

    // Validate form values
    if (!weight || !bodyMeasurements) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create progress object
    var progress = {
        weight: weight,
        bodyMeasurements: bodyMeasurements,
        notes: notes
    };

    // Add progress to the log
    var progressLog = document.getElementById("progressLog");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(formatProgress(progress)));
    progressLog.appendChild(listItem);

    // Clear form fields
    document.getElementById("weight").value = "";
    document.getElementById("bodyMeasurements").value = "";
    document.getElementById("notes").value = "";
}

function formatProgress(progress) {
    return `Weight: ${progress.weight} kg | Measurements: ${progress.bodyMeasurements} | Notes: ${progress.notes}`;
}
