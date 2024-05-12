function boom() {
    new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3").play();
}

function darkMode() {
    // Toggle dark mode
    var body = document.body;
    var dark = body.getAttribute("class");
    if (dark == "light") {
        body.setAttribute("class", "dark");
    }
    else {
        body.setAttribute("class", "light");
    }
}

function showDialog(){
    var dia = document.getElementById("mori_jumpscare")
    dia.show();
}

function toggleMenu() {
    // Toggle the navigation menu
    var expanded = document.getElementById("menu").getAttribute("class");
    if (expanded == "content") {
        document.getElementById("menu").setAttribute("class", "content expanded");
    } else {
        document.getElementById("menu").setAttribute("class", "content");
    }
}

function fixNav() {
    // Fix the navigation menu when the user scrolls past it
    var x = window.matchMedia("(max-width: 992px) or (max-width: 368px)");
    var nav = document.getElementById("menu");
    if (x.matches) {
        var pos = nav.offsetTop; // Get the offset position of the navbar
        var height = nav.offsetHeight;
        if (window.scrollY > pos + height) {
            nav.style.position = "fixed";
        }
        else {
            nav.style.position = "relative";
        }
    }else{
        nav.style.position = "fixed";
    }
    // Highlight the current section in the navigation menu
    var sections = document.querySelectorAll("section h2");
    var navLinks = document.querySelectorAll("nav ul li a");
    var scrollY = window.scrollY;
    sections.forEach(function (current, index) {
        var top = current.offsetTop - 100;
        var bottom = top + current.offsetHeight;
        if (scrollY > top && scrollY <= bottom) {
            navLinks.forEach(function (current) {
                current.classList.remove("active");
            });
            navLinks[index].classList.add("active");
        }
    });
}

function mori_jumpscare(){
    var mori = document.getElementById("mori_jumpscare");
    mori.style.display = "block";
    boom();
    setTimeout(function(){
        mori.style.display = "none";
    }, 5000);
}

window.onscroll = fixNav;
window.onresize = fixNav;