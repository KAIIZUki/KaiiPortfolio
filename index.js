const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));


const moreContactButton = document.getElementById("contact-more");
const moreContactOptions = document.getElementById("contact-more-options")

let moreContactOpen = false

function clicked() {
moreContactOptions.classList.add("is-open")
}

function clickedClosed() {
moreContactOptions.classList.remove("is-open")
}
