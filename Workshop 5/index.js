// Task 1

let array =[]

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 20) + 1)
}

let evenNumbers = array.filter(number => number % 2 === 0)

let squaredNumbers = evenNumbers.map(number => number ** 2)

console.log(squaredNumbers)

// Task 2

let toDoList = [];

function addTask(task) {
    toDoList.push(task);
    return toDoList;
}

function removeTask(task) {
    toDoList.splice(toDoList.indexOf(task), 1);
    return toDoList;
}

function viewTasks(start, end) {
    return toDoList.slice(start, end + 1);
}

function getSummary() {
    return toDoList.join(", ");
}

addTask("task 1");
addTask("task 2");
addTask("task 3");
addTask("task 4");
addTask("task 5");

console.log(toDoList);

removeTask("task 3");
console.log(toDoList);

console.log(viewTasks(0, 1));

console.log(getSummary());

//Task 3

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 25 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 42 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 4 },
    { author: 'Narayana Murthy', title: 'A Better India: A Better World', libraryID: 2 },
    { author: 'A Passage to India', title: 'E.M. Foster', libraryID: 24 }
];


const idSmallerThen10 = library.filter(book => book.libraryID < 10);
idSmallerThen10.forEach(book => console.log(`${book.title} by ${book.author} This is from the first 10`));

// Task 4

let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);
    return shoppingList;
}

function list() {
    if(shoppingList.length === 0) {
        return "Your shopping list is empty";
    } else {    
        return shoppingList;
    }
}

addItem("apples");
addItem("milk");
addItem("bread");
addItem("eggs");

console.log(list());

// Task 5

const products = [
    { name: 'Laptop', price: 999.99, category: 'Electronics' },
    { name: 'Smartphone', price: 8.99, category: 'Electronics' },
    { name: 'Bike', price: 399.99, category: 'Sports & Outdoors' },
    { name: 'Headphones', price: 79.99, category: 'Electronics' },
    { name: 'Running Shoes', price: 129.99, category: 'Sports & Outdoors' },
  ];

const filteredProducts = products.filter(product => product.category === 'Electronics');

const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price).reverse();

const filteredAndSortedProducts = sortedProducts.map(product => product.name);
console.log(filteredAndSortedProducts);

