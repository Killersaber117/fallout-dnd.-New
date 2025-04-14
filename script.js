function generateStats() {
  const name = document.getElementById('name').value;
  const race = document.getElementById('race').value;
  const charClass = document.getElementById('class').value;

  const maxPoints = 40;
  const min = 1;
  const max = 10;

  const stats = {
    Strength: 5,
    Perception: 5,
    Endurance: 5,
    Charisma: 5,
    Intelligence: 5,
    Agility: 5,
    Luck: 5
  };

  let output = `<h3>${name} - ${race} ${charClass}</h3>`;
  output += `<form id="stat-form">`;

  for (const stat in stats) {
    output += `
      <label>${stat}:
        <input type="number" name="${stat}" value="${stats[stat]}" min="${min}" max="${max}" onchange="updatePoints()">
      </label><br>
    `;
  }

  output += `<p id="points-left">Points left: ${maxPoints - Object.values(stats).reduce((a, b) => a + b, 0)}</p>`;
  output += `<button type="submit">Save</button></form>`;

  document.getElementById('stat-output').innerHTML = output;

  document.getElementById('stat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Character saved!');
  });

  updatePoints(); // Initial call
}

function updatePoints() {
  const maxPoints = 40;
  const inputs = document.querySelectorAll('#stat-form input[type=number]');
  let total = 0;

  inputs.forEach(input => {
    let val = parseInt(input.value) || 0;
    if (val < 1) input.value = 1;
    if (val > 10) input.value = 10;
    total += val;
  });
