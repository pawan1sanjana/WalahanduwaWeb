  // Search FAQ
  function searchFAQ() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.getAttribute('data-question').toLowerCase();
      if (question.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // FAQ Toggle (Cleaned)
  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const button = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.toggle-icon');

      button.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');

        // Close others
        faqItems.forEach(other => {
          if (other !== item) {
            other.querySelector('.faq-answer').classList.add('hidden');
            other.querySelector('.toggle-icon').style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current
        answer.classList.toggle('hidden');
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });
  });

