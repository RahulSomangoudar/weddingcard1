let currentPage = 0;
const pages = document.querySelectorAll(".page");

function flipPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        // Reset all pages after last page is clicked
        setTimeout(() => {
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }, 800); // Small delay to make transition smooth
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicControl = document.getElementById("music-control");

    music.volume = 0.5;

    // Attempt autoplay with muted set in HTML
    const autoplay = music.play();

    // If autoplay works, unmute after a short delay
    if (autoplay !== undefined) {
        autoplay.then(() => {
            setTimeout(() => {
                music.muted = false; // Unmute after playback starts
                musicControl.src = "s.png";
                console.log("Music autoplayed and unmuted.");
            }, 500);
        }).catch((err) => {
            console.log("Autoplay failed:", err);
        });
    }

    // Add manual toggle
    musicControl.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicControl.src = "s.png";
        } else {
            music.pause();
            musicControl.src = "ns.png";
        }
    });
});
