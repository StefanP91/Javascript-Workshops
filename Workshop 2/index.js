// Task 2

let link = "https://www.google.com"

if (link.startsWith("https://")) {
    console.log("This URL is secure")
}

else if (link.startsWith("http://")) {
    console.log("Warning: The URL is not secure")
}

else {
    console.log("Invalid URL")
}