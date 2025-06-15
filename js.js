//Toggle

// function myFunction() {
//     let x = document.getElementById("answer");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

function myFunction(container) {
    const answer = container.querySelector(".answer");
    const icon = container.querySelector(".plus_minus_image");
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.src="assets/images/icon-minus.svg"
    } else {
        answer.style.display = "none";
        icon.src="assets/images/icon-plus.svg"
    }
}

