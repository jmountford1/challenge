var menuChoices = document.getElementsByClassName('menuItem');

var capabilities = document.getElementById('capabilities');

var capabilitiesMenu = document.getElementById('capabilitiesMenu');

var flavors = document.getElementById('flavors');

var flavorsMenu = document.getElementById('flavorsMenu');

function visibleMenu() {
    menuChoices = document.querySelectorAll(".menuItem");
}

let myMenuCounter = 0;

function navDisplay() {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    }
    let navbarItems = document.querySelectorAll('.toplink');
    navbarItems.forEach((element) => {
        element.classList.add('dropItemAnimation');
    });
    if (myMenuCounter === 0) {
        x.classList.add("expandMobileMenu");
        myMenuCounter = 1;
    } else if (myMenuCounter === 1) {
        x.classList.remove("expandMobileMenu");
        myMenuCounter = 0;
        x.classList.remove('responsive');
        capabilitiesMenu.style.display = "none";
        flavorsMenu.style.display = "none";
        nav.style.height = "15px";
        navBar.style.height = "15px";
        myMenuCounter = 0;
        nav.style.marginBottom = "20px";
        capabilities.style.pointerEvents = "none";
        flavors.style.pointerEvents = "none";
        mobileCapCounter = 0;
        mobileFlavCounter = 0;
    }
}

let counter = 0;

document.getElementById("navigation").addEventListener('click', function () {
    if (counter === 0) {
        counter = 1;
        document.getElementById("navigation").classList.add("colorChange");
        document.getElementById("navigation").classList.remove("reverseColorChange");
    } else if (counter === 1) {
        counter = 0;
        document.getElementById("navigation").classList.remove("colorChange");
        document.getElementById("navigation").classList.add("reverseColorChange");
    }
});

let capabilitiesOpen = 0;


capabilities.addEventListener('mouseover', function () {
    if (window.outerWidth > 800) {
        capabilitiesMenu.classList.add('dropDownHoverMenu');
        let capabilityItems = document.querySelectorAll('.capabilityItem');
        capabilityItems.forEach((element) => {
            element.classList.add('dropItemAnimation');
        });
    }
});


document.addEventListener('mousemove', function (event) {
    var capabilitiesMenuRect = capabilitiesMenu.getBoundingClientRect();
    let width = window.innerWidth;
    if (width > 800) {
        document.getElementById('navBar').classList.remove('responsive');   
        document.getElementById('navBar').classList.remove('expandMobileMenu');
    }
    newTopDivRect = capabilitiesMenuRect.top - 50;
    newLeftDivRect = capabilitiesMenuRect.left - 15;
    //console.log(divRect);
    //console.log(event.clientX, event.clientY);
    if (event.clientX >= newLeftDivRect && event.clientX <= capabilitiesMenuRect.right && event.clientY >= newTopDivRect && event.clientY <= capabilitiesMenuRect.bottom) {
        return;
    } else {
        capabilitiesMenu.classList.remove('dropDownHoverMenu');
    }

    var flavorsMenuRect = flavorsMenu.getBoundingClientRect();
    newFlavorsTopRect = flavorsMenuRect.top - 50;
    if (event.clientX >= flavorsMenuRect.left && event.clientX <= flavorsMenuRect.right && event.clientY >= newFlavorsTopRect && event.clientY <= flavorsMenuRect.bottom) {
        return;
    } else {
        document.getElementById('flavorsMenu').classList.remove('dynamicDropAnimationMenu');
    }
});


/*capabilities.addEventListener('mouseout', function () {
    capabilitiesMenu.classList.remove('dropDownHoverMenu');
});*/

flavors.addEventListener('mouseover', function () {
    if (window.outerWidth > 800) {
        flavorsMenu.classList.add('dynamicDropAnimationMenu');
        let flavorItems = document.querySelectorAll('.flavorItem');
        flavorItems.forEach((element) => {
            element.classList.add('dropItemAnimation');
        });
    };
});

let mobileCapCounter = 0;

let mobileFlavCounter = 0;

let hrefCounter = 0;

let navBar = document.getElementById('navBar');

let nav = document.getElementById('nav');

function checkForMobileMenu() {
    let width = window.innerWidth;
    if (width < 800) {
        let allMenuItems = document.querySelectorAll('.menuItem');
        allMenuItems.forEach((element) => {
            element.style.color = "#FFD700";
        })
        capabilities.style.pointerEvents = "none";
        flavors.style.pointerEvents = "none";
        capabilities.href = "javascript:void(0)";
        flavors.href = "javascript:void(0)";
        document.getElementById('capabilitiesWrap').addEventListener('click', function () {
            console.log('capabilities menu open');
            capabilities.href = "/challenge/capabilities";
            capabilities.style.pointerEvents = "auto";
            capabilities.style.height =
            capabilitiesMenu.style.opacity = "100%";
            capabilitiesMenu.style.display = "block";
            mobileCapCounter = 1;

            if (mobileFlavCounter === 0) {
                navBar.style.height = "370px";
                nav.style.height = "370px";
                capabilitiesMenu.style.backgroundColor = "rgba(0, 105, 148, 1)";
                navBar.classList.remove('expandMobileMenu');
                navBar.style.background = "rgba(0, 105, 148, 1)";
                mobileCapCounter = 1;
                capabilitiesMenu.style.height = "115px";
            } else if (mobileFlavCounter === 1) {
                let dynamicHeight = document.getElementById('ui_height').value;
                let height = Math.round(dynamicHeight) + 370;
                navBar.style.height = String((height) + "px");
                nav.style.height = String((height) + "px");
                flavorsMenu.style.backgroundColor = "rgba(0, 105, 148, 1)";
                navBar.style.background = "rgba(0, 105, 148, 1)";
            }
        });

        document.getElementById('flavorsWrap').addEventListener('click', function () {
            console.log('flavors menu open!');
            flavors.href = "/challenge/flavors";
            flavors.style.pointerEvents = "auto";
            flavorsMenu.style.opacity = "100%";
            flavorsMenu.style.display = "block";
            let dynamicHeight = document.getElementById('ui_height').value;
            flavorsMenu.style.height = (String(Math.round(dynamicHeight))) + "px";

            if (mobileCapCounter === 0) {
                let height = Math.round(dynamicHeight) + 240;
                navBar.style.height = String((height) + "px");
                nav.style.height = String(Math.round(height) + "px");
                navBar.classList.remove('expandMobileMenu');
                navBar.style.background = "rgba(0, 105, 148, 1)";
                console.log(height);
                mobileFlavCounter = 1;

            } else if (mobileCapCounter === 1) {
                let height = Math.round(dynamicHeight) + 360;
                navBar.style.height = String((height) + "px");
                nav.style.height = String(Math.round(height) + "px");
                navBar.style.background = "rgba(0, 105, 148, 1)";
                navBar.classList.remove('expandMobileMenu');
                console.log(height);
            }
        });
    }
}

checkForMobileMenu();

window.onresize = checkForMobileMenu();