// charity_profile.js

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1) Volunteer Now prompts
  document.querySelectorAll('.about-box a.btn').forEach(link => {
    if (link.textContent.trim() === 'Volunteer Now') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const charityName = this.closest('.about-box').querySelector('h2').textContent;
        const name  = prompt(`Sign up to volunteer at ${charityName}!\n\nEnter your name:`);
        if (!name) return alert('Signup cancelled.');
        const email = prompt('Enter your email address:');
        if (!email) return alert('Signup cancelled.');
        const phone = prompt('Enter your phone number (optional):');
        alert(`Thanks, ${name}! 🎉\nWe’ll reach out at ${email}${phone ? ` or ${phone}` : ''}.`);
      });
    }
  });

  // 2) Follow Charity button
  document.querySelectorAll('.about-box').forEach(box => {
    const btn = document.createElement('button');
    btn.textContent = 'Follow Charity';
    btn.className = 'btn';
    btn.style.marginTop = '0.5rem';
    btn.addEventListener('click', () => {
      btn.textContent = 'Following';
      btn.disabled = true;
    });
    box.appendChild(btn);
  });
});

