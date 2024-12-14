let mealChoice = "";
let dietChoice = "";
let dishChoice = "";
const resultText = document.getElementById("result-text");
const foodSuggestion = document.getElementById("food-suggestion");
const cuisineType = document.getElementById("cuisine-type");
const resultDiv = document.getElementById("result");

// Define meal data as an array of objects
const mealData = [
    {
        type: "Spanish",
        dishes: {
            "Big meal": { name: "Seafood Paella", image: "img/11.png" },
            "Snacking": { name: "Tapas", image: "img/12.jpg" },
            "Dessert": { name: "Churros", image: "img/13.jpg" },
        },
        cuisine: "Spanish Cuisine",
    },
    {
        type: "Western",
        dishes: {
            "Big meal": { name: "Grilled Steak", image: "img/14.jpg" },
            "Snacking": { name: "French Fries", image: "img/15.jpg" },
            "Dessert": { name: "Apple Pie", image: "img/16.jpg" },
        },
        cuisine: "Western Cuisine",
    },
    {
        type: "Chinese",
        dishes: {
            "Big meal": { name: "Peking Duck", image: "img/17.jpg" },
            "Snacking": { name: "Spring Rolls", image: "img/18.jpg" },
            "Dessert": { name: "Moon Cake", image: "img/19.jpg" },
        },
        cuisine: "Chinese Cuisine",
    },
    {
        type: "Italian",
        dishes: {
            "Big meal": { name: "Spaghetti Carbonara", image: "img/20.jpg" },
            "Snacking": { name: "Bruschetta", image: "img/21.jpg" },
            "Dessert": { name: "Tiramisu", image: "img/22.jpg" },
        },
        cuisine: "Italian Cuisine",
    },
    {
        type: "Japanese",
        dishes: {
            "Big meal": { name: "Sushi", image: "img/23.jpeg" },
            "Snacking": { name: "Onigiri", image: "img/24.jpg" },
            "Dessert": { name: "Mochi", image: "img/25.jpg" },
        },
        cuisine: "Japanese Cuisine",
    },
    {
        type: "Caribbean",
        dishes: {
            "Big meal": { name: "Jerk Chicken", image: "img/26.jpeg" },
            "Snacking": { name: "Plantain Chips", image: "img/27.jpg" },
            "Dessert": { name: "Rum Cake", image: "img/28.jpg" },
        },
        cuisine: "Caribbean Cuisine",
    },
];

function updateResult() {
    if (mealChoice && dishChoice) {
        // Find the selected meal type
        const selectedMeal = mealData.find((meal) => meal.type === mealChoice);

        if (selectedMeal) {
            const selectedDish = selectedMeal.dishes[dishChoice];
            if (selectedDish) {
                foodSuggestion.textContent = selectedDish.name;
                document.getElementById("food-image-img").src = selectedDish.image;
                cuisineType.textContent = selectedMeal.cuisine;
                resultDiv.classList.remove("hidden");
            }
        }
    }
}

// Event listeners for meal choice
document.querySelectorAll(".meal-choice").forEach((button) => {
    button.addEventListener("click", function () {
        mealChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-1").classList.add("hidden");
        document.getElementById("question-2").classList.remove("hidden");
    });
});

// Event listeners for diet choice (if needed for future expansion)
document.querySelectorAll(".diet-choice").forEach((button) => {
    button.addEventListener("click", function () {
        dietChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-2").classList.add("hidden");
        document.getElementById("question-3").classList.remove("hidden");
    });
});

// Event listeners for dish choice
document.querySelectorAll(".dish-choice").forEach((button) => {
    button.addEventListener("click", function () {
        dishChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-3").classList.add("hidden");
    });
});
