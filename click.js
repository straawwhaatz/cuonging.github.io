const trigger = document.getElementById('trigger');
const egg = document.getElementById('egg');

trigger.addEventListener('click', (event) => {
  if (event.detail === 3) {
    egg.style.display = 'block';
    alert("s20fe");
  }
});
