function changeColor() {
    let flavors = document.querySelectorAll('.placeholder');
    flavors.forEach((element) => {
        const colors = ["#800000", "#228B22", "#D76B00", "#7852A9", "#747880", "#006994", "#FFDB58", "#4d3024", "#78586f", "#7b9ea8", "#cddfa0", "#e6c79c", "#c93030", "#944545", "#445c6d", "#879eb0", "#b0d2cf"];
        var selected_color = Math.floor(Math.random() * colors.length);
        element.style.color = colors[selected_color];
    });
}

function changeIcon() {
    let icons = document.querySelectorAll('.flavorIcon');
    icons.forEach((element) => {
        const iconPictures = ["&#127823;", "&#127827;", "&#127823;", "&#127821;", "&#127817;", "&#127826;", "&#127818", "&#127822", "&#129373", "&#127813", "&#127812", "&#129472", "&#127830", "&#129408", "&#129384"];
        var selected_icon = Math.floor(Math.random() * iconPictures.length);
        element.innerHTML = iconPictures[selected_icon];
    })
}

changeColor();

changeIcon();