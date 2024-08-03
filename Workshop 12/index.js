const apiURL = "https://66ae6f65b18f3614e3b7b3bb.mockapi.io/users/users"

document.getElementById("btnRead").addEventListener("click", async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    for (let i = 0; i < result.length; i++) {
        const element = result[i];

        let tableContainer = document.getElementById("tableContainer")
        tableContainer.style.display = "block";


        document.getElementById("itemsContainer").innerHTML += `
            
            <tr id = "row-${element.id}">
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.city}</td>
                <td>${element.username}</td>
                <td>
                    <button class="btn btn-danger" onclick="userDelete(${element.id})">Delete</button>
                    <button class="btn btn-warning" onclick="userEdit(${element.id})">Edit</button>
                </td>
            </tr>
        `
        
    }

});

// Create user

document.getElementById("btnCreate").addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value
    const cityName = document.getElementById("city").value
    const userName = document.getElementById("username").value

    const data = {
        name: name,
        city: cityName,
        username: userName
    }

    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();
    alert("Successfully created user") 
});    

// Edit user

document.getElementById("btnEdit").addEventListener("click", async (e) => {
    e.preventDefault();

    const id = document.getElementById("userID").value
    const name = document.getElementById("editName").value
    const cityName = document.getElementById("editCity").value
    const userName = document.getElementById("editUsername").value

    const data = {
        id: id,
        name: name,
        city: cityName,
        username: userName
    }

    const response = await fetch(`${apiURL} / ${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();
    alert("Successfully edited user")

});


// Delete user

document.getElementById("btnDelete").addEventListener("click", async (e) => {
    e.preventDefault();

    const id = document.getElementById("userIDRemoval").value;

    const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE"
    })

    const result = await response.json();
    alert("Successfully deleted user")

});

// Delete user inline table

async function userDelete (id) {

    const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE"
    })

    const result = await response.json();
    alert("Successfully deleted user")
}


// Edit user inline table

async function userEdit(id) {
    let apiArray = await fetch(apiURL);
    let apiResult = await apiArray.json();


    let userToEdit = apiResult.find(user => user.id == id);

    if (userToEdit) {

        const row = document.getElementById(`row-${id}`);
        if (row) {
            row.innerHTML = `
                <td><input class="form-control" type="text" id="userIDInline" value="${userToEdit.id}" disabled></td>
                <td><input class="form-control" type="text" id="userName" value="${userToEdit.name}"></td>
                <td><input class="form-control" type="text" id="userCity" value="${userToEdit.city}"></td>
                <td><input class="form-control" type="text" id="userUsername" value="${userToEdit.username}"></td>
                <td> 
                    <button class="btn btn-success" onclick="updateUser(${id})">Update</button>
                    <button class="btn btn-secondary" onclick="cancelEdit(${id})">Cancel</button>
                </td>
            `;
        }
    }
}

// Update user information
async function updateUser(id) {
    const updatedUser = {
        id: document.getElementById("userIDInline").value,
        name: document.getElementById("userName").value,
        city: document.getElementById("userCity").value,
        username: document.getElementById("userUsername").value
    };

    const response = await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });

    const result = await response.json();
    alert("Successfully updated user");

    const row = document.getElementById(`row-${id}`);
    if (row) {
        row.innerHTML = `
            <td>${result.id}</td>
            <td>${result.name}</td>
            <td>${result.city}</td>
            <td>${result.username}</td>
            <td>
                <button class="btn btn-danger" onclick="userDelete(${result.id})">Delete</button>
                <button class="btn btn-warning" onclick="userEdit(${result.id})">Edit</button>
            </td>
        `;
    }
}


function cancelEdit(id) {
    userEdit(id);
}




