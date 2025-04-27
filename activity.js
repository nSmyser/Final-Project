// activity.js

document.addEventListener('DOMContentLoaded', () => {
  const btn    = document.getElementById('getActivityBtn');
  const output = document.getElementById('activityOutput');

  btn.addEventListener('click', () => {
    output.textContent = 'Loading…';

    fetch('https://www.boredapi.com/api/activity')
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then(data => {
        output.innerHTML = `
          <strong>${data.activity}</strong><br>
          <em>Type:</em> ${data.type} • <em>Participants:</em> ${data.participants}
        `;
      })
      .catch(err => {
        console.error(err);
        output.textContent = 
          'Sorry, we couldn’t load a volunteer idea right now. Please try again later.';
      });
  });
});
