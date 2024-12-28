const array = [
  "img_1.webp",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpeg",
  "img_6.jpeg",
];

let currentIndex = 0;

function showImage(index, direction) {
  const slide = document.getElementById("demo");

  // Remove existing classes
  slide.classList.remove("active", "exit-right", "exit-left");

  // Set exit animation direction
  if (direction === "next") {
    slide.classList.add("exit-right");
  } else if (direction === "prev") {
    slide.classList.add("exit-left");
  }

  setTimeout(() => {
    // Update image src after exit animation
    slide.src = array[index];

    // Add active class for entry animation
    slide.classList.remove("exit-right", "exit-left");
    slide.classList.add("active");
  }, 500); // Matches the transition duration in CSS
}

function nextImage() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % array.length;
  showImage(currentIndex, "next");
}

function prevImage() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + array.length - 1) % array.length;
  showImage(currentIndex, "prev");
}

// Initialize the first image
showImage(currentIndex);
