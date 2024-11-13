let score = 0;

function allowDrop(event) {
    event.preventDefault();  // Enable drop functionality
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);  // Set data for the dragged item
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let item = document.getElementById(data);
    let target = event.target;

    // Check for correct drop
    if (target.id === "recycle-bin" && data === "plastic" || target.id === "recycle-bin" && data === "glass" || target.id === "recycle-bin" && data === "can") {
        score += 1;
        item.classList.add("correct");
    } else if (target.id === "compost-bin" && data === "banana") {
        score += 1;
        item.classList.add("correct");
    } else if (target.id === "trash-bin" && data === "paper") {
        score += 1;
        item.classList.add("correct");
    } else {
        item.classList.add("incorrect");
        setTimeout(() => {
            item.classList.remove("incorrect");
        }, 1000);  // Reset incorrect item after a short delay
    }

    target.appendChild(item);  // Append item to the target bin
}

function checkScore() {
    alert("Your score: " + score);
    score = 0;  // Reset score for next round
}
