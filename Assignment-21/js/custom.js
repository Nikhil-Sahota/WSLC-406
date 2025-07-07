const allQuestions = document.querySelectorAll('.faq_question');

allQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const icon = question.querySelector('i');
        const answer = question.nextElementSibling;

        // Toggle this one
        answer.classList.toggle('faq_display');

        // Change arrow direction for this one
        if (icon.classList.contains('fa-angle-down')) {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }

        // Close all others
        allQuestions.forEach((other) => {
            if (other !== question) {
                other.nextElementSibling.classList.add('faq_display');
                const otherIcon = other.querySelector('i');
                otherIcon.classList.remove('fa-angle-up');
                otherIcon.classList.add('fa-angle-down');
            }
        });
    });
});
