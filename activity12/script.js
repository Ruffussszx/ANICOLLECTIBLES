const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

// Connect button to function
button.addEventListener("click", getUsers);

// Create asynchronous function
async function getUsers() {

    userList.textContent = "Loading users...";

    try {

        // Fetch JSON data from API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check if request is successful
        if (!response.ok) {
            throw new Error("Failed to retrieve users");
        }

        // Convert response into JSON
        const users = await response.json();

        console.log(users);

        // Clear previous content
        userList.innerHTML = "";

        // Display each user
        users.forEach(function(user) {

            // Create user card
            const card = document.createElement("div");
            card.className = "user-card";

            // Create name element
            const name = document.createElement("h3");
            name.textContent = user.name;

            // Create email element
            const email = document.createElement("p");
            email.textContent = user.email;

            // Create city element
            const city = document.createElement("p");
            city.textContent = user.address.city;

            // Add elements to card
            card.append(name, email, city);

            // Display card on webpage
            userList.appendChild(card);

        });

    } catch (error) {

        // Display error message
        userList.textContent = "Error: " + error.message;

    }
}