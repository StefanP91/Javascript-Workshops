// Task 3

let filename = "text.txt"

if (filename.endsWith(".txt")) {
    console.log("The file is a text file")
}

else if (filename.endsWith(".pdf")) {
    console.log("The file is a pdf file")
}

else if (filename.endsWith(".jpg")) {
    console.log("The file is an image file")
}

else if (filename.endsWith(".css")) {
    console.log("The file is a CSS file")

}

else {
    console.log("Invalid file name")
}