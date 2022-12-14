const circle = document.querySelector(".circle");
const bodyContainer = document.querySelector("html");

const scroll = () => {
    const slideHeight = bodyContainer.clientHeight;
    bodyContainer.scrollTo -= slideHeight;
};

circle.addEventListener("click", scroll)