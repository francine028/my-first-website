
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const offset = 80; // adjust for navbar height if needed
    const section = document.getElementById(sectionId);
    const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }

// typing effect

  const textArray = ["SOFTWARE DEVELOPER", "WEB DESIGNER", "CREATIVE CODER"];
  let currentTextIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const pause = 1500;

  const typewriter = document.getElementById("typewriter");

  function type() {
    const currentText = textArray[currentTextIndex];

    if (!isDeleting) {
      charIndex++;
    } else {
      charIndex--;
    }

    const currentSlice = currentText.substring(0, charIndex);

    let displayText = currentSlice;
    if (displayText.length > 0) {
      displayText = `<span class="yellow">${displayText.charAt(0)}</span>${displayText.slice(1)}`;
    }

    // Always overwrite the previous word with the new one on a new line
    typewriter.innerHTML = displayText;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, pause);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
