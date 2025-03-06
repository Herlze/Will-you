fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("title").innerText = data.title;
        document.getElementById("catImage").src = data.image;
    })
    .catch(error => console.error("Error loading JSON:", error));
