let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem("reviewCount", reviewCount);

// Update the review counter element if it exists
const spanCount = document.getElementById("review-counter");
if (spanCount) {
    spanCount.textContent = reviewCount;
}