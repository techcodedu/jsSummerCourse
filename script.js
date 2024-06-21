// Functionality for toggling content on click (example)
const timelineItems = document.querySelectorAll(".timeline-item");
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
  });
});
