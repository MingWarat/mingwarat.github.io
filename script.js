const dynamicText = document.querySelector("h1 span");
const words = ["Waratchaya.", "Data Science.", "Student.", "Dog Lover."];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

document.addEventListener("DOMContentLoaded", function() {
    // Show the loader
    document.getElementById("preloader").style.display = "block";
  
    // Set the duration (in milliseconds)
    var duration = 3000; // 3 seconds
  
    // Hide the loader after the specified duration
    setTimeout(function() {
      document.getElementById("preloader").style.display = "none";
    }, duration);
  });
  

// กด esc ขึ้นไปด้านบนสุด //
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        window.scrollTo(0, 0);  
    }
});

// เพิ่ม event listener สำหรับการกดปุ่มย้อนกลับบนมือถือ
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('popstate', function(event) {
        // ตรวจสอบว่าเป็นการกดปุ่มย้อนกลับ
        if (event.state && event.state.scrollTop) {
            // ให้หน้าเว็บขึ้นไปที่ตำแหน่งที่กำหนด
            window.scrollTo(0, event.state.scrollTop);
        }
    });
});

// เพิ่ม event listener สำหรับการ scroll
document.addEventListener('scroll', function() {
    // บันทึกตำแหน่ง scroll ปัจจุบันเมื่อมีการ scroll
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    history.replaceState({ scrollTop: scrollTop }, ''); 
});
