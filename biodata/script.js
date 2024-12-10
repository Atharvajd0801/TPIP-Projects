const careers = {
    after10: [
      "Diploma in Engineering",
      "Diploma in Fashion Design",
      "Diploma in Hotel Management",
      "Animation Certificate Course",
      "Digital Marketing"
    ],
    after12: [
      "Pharmacy",
      "Fashion Design",
      "Engineering",
      "Environmental Science",
      "Law"
    ],
    afterBachelors: [
      "Human Resources",
      "Digital Marketing",
      "Civil Services",
      "Journalist",
      "Content Creation"
    ],
  };
  
  function navigate(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active-section");
      section.classList.add("hidden-section");
    });
    document.getElementById(sectionId).classList.add("active-section");
  }
  
  function populateCareerLists() {
    Object.keys(careers).forEach((level) => {
      const ul = document.getElementById(`${level}-careers`);
      ul.innerHTML = careers[level]
        .map((career) => `<li>${career}</li>`)
        .join("");
    });
  }
  
  function showQuizResult() {
    const interest = document.getElementById("interest").value;
    const workType = document.getElementById("work-type").value;
    const goal = document.getElementById("goal").value;
  
    if (interest && workType && goal) {
      const result = {
        interest,
        workType,
        goal,
      };
  
      localStorage.setItem("quizResult", JSON.stringify(result));
      navigate("after12");
      populateCareerLists();
      

      const resultDiv = document.getElementById("quiz-result");
      resultDiv.innerHTML = `<h3>Your Ideal Career Path:</h3>
        <p>Based on your preferences, consider careers in <b>${workType}</b> with a focus on <b>${goal}</b>.</p>`;
      resultDiv.classList.remove("hidden-section");
    } else {
      alert("Please fill out all fields to see your result!");
    }
  }
  
  populateCareerLists();
  document.addEventListener("DOMContentLoaded", loadQuizResult);
  