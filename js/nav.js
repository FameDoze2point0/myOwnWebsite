const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded",ariaToggle);

    navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click",toggleNav)

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 1000){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }else{
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)

let nav = document.querySelector("nav");
let lastScrollValue = 0;

document.addEventListener("scroll",()=> {
    let top = document.documentElement.scrollTop;
    if(lastScrollValue < top){
        nav.classList.add("hidden");
    }else{
        nav.classList.remove("hidden");
    }
    lastScrollValue = top;
});