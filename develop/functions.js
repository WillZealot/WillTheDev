document.addEventListener('DOMContentLoaded', () => {
    const worksBtnEl = document.querySelector(".worksArea");
    const resumeBtnEl = document.querySelector(".resumeArea");
    const projectsArea = document.querySelector(".bigProjectCard");
    const resumeDisplay = document.querySelector(".resumePdf");

    projectsArea.style.display = "none";
    resumeDisplay.style.display = "none";

    worksBtnEl.addEventListener("click", () => {
        if (projectsArea.style.display === "none"){
            projectsArea.style.display = "";
        } else {
            projectsArea.style.display = "none";
        }
    }
        
    );

    resumeBtnEl.addEventListener("click", () => {
        if (resumeDisplay.style.display === "none"){
            resumeDisplay.style.display = "";
        } else {
            resumeDisplay.style.display = "none";
        }
    }
        
    );
    
  });
