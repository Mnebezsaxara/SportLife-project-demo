// Beket Batyra Section
const field1 = document.getElementById("field1");
const video1 = document.getElementById("video1");

field1.addEventListener("mouseenter", () => {
    video1.play();
});

field1.addEventListener("mouseleave", () => {
    video1.pause();
});

// Orynbaeva Section
const field2 = document.getElementById("field2");
const video2 = document.getElementById("video2");

field2.addEventListener("mouseenter", () => {
    video2.play();
});

field2.addEventListener("mouseleave", () => {
    video2.pause();
});

// Gym Section
const field3 = document.getElementById("field3");
const video3 = document.getElementById("video3");

field3.addEventListener("mouseenter", () => {
    video3.play();
});

field3.addEventListener("mouseleave", () => {
    video3.pause();
});
