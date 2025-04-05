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
