let arrayOfItems = [];

function getItem() {
    let newItem = document.getElementById("newItem").value;
    
    if (newItem) {
        let itemResult = {
            id: Math.round(Math.random() * 10000000),
            itemName: newItem
        };

        arrayOfItems.push(itemResult);
        displayItem();
    } else {
        alert("Please enter an item");
    }
}

function addItem() {
    getItem();
}

let listOfItems = document.getElementById("itemList");

function displayItem() {
    listOfItems.innerHTML = "";
    for (const item of arrayOfItems) {
        let listItem = document.createElement("li");
        listItem.setAttribute("id", item.id);
        listOfItems.appendChild(listItem);
        listItem.innerHTML = `
            <div>${item.itemName}</div>
            <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
            <button class="edit-btn" onclick="editItem(${item.id})">Edit</button>
        `;
    }
}

function deleteItem(id) {
    const index = arrayOfItems.findIndex(item => item.id === id);
    if (index !== -1) {
        arrayOfItems.splice(index, 1);
        displayItem();
    }
}

function editItem(id) {
    const listElement = document.getElementById(id);
    const index = arrayOfItems.findIndex(item => item.id === id);

    if (listElement && index !== -1) {
        listElement.innerHTML = `
            <input id="editInput${id}" type="text" placeholder="Enter new change" value="${arrayOfItems[index].itemName}">
            <button id="editBtn" class="edit-btn" onclick="editBtn(${id}, ${index})">Edit</button>
        `;
    }
}

function editBtn(id, index) {
    const newValue = document.getElementById(`editInput${id}`).value;
    
    if (newValue) {
        arrayOfItems[index].itemName = newValue;
        displayItem();
    } else {
        alert("Please enter a new value");
    }
}


// so forEach 

// function displayItem() {
//     listOfItems.innerHTML = "";
//     arrayOfItems.forEach((item, index) => {
//         let listItem = document.createElement("li");
//         listItem.setAttribute("id", item.id);
//         listOfItems.appendChild(listItem);
//         listItem.innerHTML = `
//             <div>${item.itemName}</div>
//             <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
//             <button class="edit-btn" onclick="editItem(${item.id})">Edit</button>
//         `;
//     });
// }

// function deleteItem(index) {
//     arrayOfItems.splice(index, 1);
//     deleteItem();
// }

// function editItem(index) {
//     const listElement = document.getElementById(index);

//     if (listElement) {
//         listElement.innerHTML = `
//             <input id="editInput${index}" type="text" placeholder="Enter new change" value="${arrayOfItems[index].itemName}">
//             <button id="editBtn" class="edit-btn" onclick="editBtn(${id}, ${index})">Edit</button>
//         `;
//     }
// }

// function editBtn(index) {
//     const newValue = document.getElementById(`editInput${index}`).value;
    
//     if (newValue) {
//         arrayOfItems[index].itemName = newValue;
//         displayItem();
//     } else {
//         alert("Please enter a new value");
//     }
// }