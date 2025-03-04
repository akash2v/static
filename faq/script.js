 document.addEventListener("DOMContentLoaded", function() {
            const questions = document.querySelectorAll(".faq-question");

            questions.forEach(function(question) {
                question.addEventListener("click", function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector("i");
                    if (answer.style.display === "block") {
                        answer.style.display = "none";
                        icon.classList.remove("fa-chevron-down");
                        icon.classList.add("fa-chevron-right");
                    } else {
                        answer.style.display = "block";
                        icon.classList.remove("fa-chevron-right");
                        icon.classList.add("fa-chevron-down");
                    }
                });
            });
        });
