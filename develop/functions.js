document.addEventListener('DOMContentLoaded', () => {
    const worksBtnEl = document.querySelector(".worksArea");
    const resumeBtnEl = document.querySelector(".resumeArea");
    const projectsArea = document.querySelector(".bigProjectCard");
    const resumeDisplay = document.querySelector(".resumePdf");
  
    // Adding transition styles
    projectsArea.style.transition = "opacity 0.9s ease";
    resumeDisplay.style.transition = "opacity 0.9s ease";
  
    // Hiding elements initially
    projectsArea.style.opacity = "0";
    resumeDisplay.style.opacity = "0";
    projectsArea.style.display = "none";
    resumeDisplay.style.display = "none";
  
    // Event listener for works button
    worksBtnEl.addEventListener("click", () => {
      if (projectsArea.style.display === "none") {
        projectsArea.style.display = "";
        setTimeout(() => {
          projectsArea.style.opacity = "1";
        }, 10);
      } else {
        projectsArea.style.opacity = "0";
        setTimeout(() => {
          projectsArea.style.display = "none";
        }, 300);
      }
    });
  
    // Event listener for resume button
    resumeBtnEl.addEventListener("click", () => {
      if (resumeDisplay.style.display === "none") {
        resumeDisplay.style.display = "";
        setTimeout(() => {
          resumeDisplay.style.opacity = "1";
        }, 10);
      } else {
        resumeDisplay.style.opacity = "0";
        setTimeout(() => {
          resumeDisplay.style.display = "none";
        }, 300);
      }
    });
  });