let currentPage = 0;
const pages = document.querySelectorAll(".page");

function flipPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        setTimeout(() => {
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }, 800);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const musicControl = document.getElementById("music-control");

    music.volume = 0.5;
    music.muted = true;
    musicControl.src = "ns.png"; // Muted icon

    // Try to autoplay muted (this works in Chrome)
    music.play().then(() => {
        console.log("Muted music autoplayed.");
    }).catch(err => {
        console.warn("Muted autoplay failed:", err);
    });

    // Make icon clickable to toggle mute/unmute
    musicControl.addEventListener("click", (e) => {
        e.stopPropagation();
        music.muted = !music.muted;
        musicControl.src = music.muted ? "ns.png" : "s.png";
    });
});
