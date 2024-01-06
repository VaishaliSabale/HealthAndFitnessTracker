function logMeal() {
    // Get form values
    var mealName = document.getElementById("mealName").value;
    var calories = document.getElementById("calories").value;
    var proteins = document.getElementById("proteins").value;
    var carbs = document.getElementById("carbs").value;
    var fats = document.getElementById("fats").value;

    // Validate form values
    if (!mealName || !calories || !proteins || !carbs || !fats) {
        alert("Please fill in all fields.");
        return;
    }

    // Create meal object
    var meal = {
        name: mealName,
        calories: calories,
        proteins: proteins,
        carbs: carbs,
        fats: fats
    };

    // Add meal to the log
    var mealLog = document.getElementById("mealLog");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(formatMeal(meal)));
    mealLog.appendChild(listItem);

    // Clear form fields
    document.getElementById("mealName").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("proteins").value = "";
    document.getElementById("carbs").value = "";
    document.getElementById("fats").value = "";
}

function formatMeal(meal) {
    return `${meal.name} - ${meal.calories} calories | ${meal.proteins}g proteins | ${meal.carbs}g carbs | ${meal.fats}g fats`;
}
