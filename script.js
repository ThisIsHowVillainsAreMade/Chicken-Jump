const chicken = document.querySelector(".chicken");
const chickenEater = document.querySelector(".chickenEater");


// Chicken jump with the button.
function jump() {
    console.log("saut activé")
    if (chicken.classList != "animation") {
        chicken.classList.add("animation");
    } setTimeout(function () {
        chicken.classList.remove("animation");
    }, 500)
}

// Verify if the chickenEater eat the chicken.

const verification = setInterval(function () {
    const chickenTop = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
    const chickenEaterLeft = parseInt(window.getComputedStyle(chickenEater).getPropertyValue("left"));

    if (chickenEaterLeft < 20 && chickenEaterLeft > 0 && chickenTop >= 130) {
        chickenEater.style.animation = "none";

        let chickenEatenImg = document.getElementById("chickenEaten");
        chickenEatenImg.style.visibility = "visible";

        let villain = document.getElementById("villain");
        villain.style.visibility = "hidden";

        let chickenLord = document.getElementById("chicken");
        chickenLord.style.visibility = "hidden";

        let chickenEaterAnimeDiv = document.getElementById("villainIdDiv");
        chickenEaterAnimeDiv.classList.remove("villainAnimation");

        setTimeout(function () {
            alert("Oh non ! Monsieur A. a mangé le poulet !");
        }, 200);
    }

}, 1)

// Relancer le jeu

function replay() {
    let chickenEatenImg = document.getElementById("chickenEaten");
    chickenEatenImg.style.visibility = "hidden";

    let villain = document.getElementById("villain");
    villain.style.visibility = "visible";

    let chickenLord = document.getElementById("chicken");
    chickenLord.style.visibility = "visible";

    let chickenEaterAnimeDiv = document.getElementById("villainIdDiv");
    chickenEaterAnimeDiv.classList.add("villainAnimation");
}