function generateStats() {
  const name = document.getElementById('name').value;
  const race = document.getElementById('race').value;
  const charClass = document.getElementById('class').value;

  const stats = {
    Strength: randomStat(),
    Perception: randomStat(),
    Endurance: randomStat(),
    Charisma: randomStat(),
    Intelligence: randomStat(),
    Agility: randomStat(),
    Luck: randomStat()
  };

  let output = `<h3>${name} - ${race} ${charClass}</h3>`;
  output += `<form id="stat-form">`;

  for (const stat in stats) {
    output += `
      <label>${stat}:
        <input type="number" name="${stat}" value="${stats[stat]}" min="1" max="10">
      </label>
    `;
  }

  output += `<br><button type="submit">Save</button></form>`;
  document.getElementById('stat-output').innerHTML = output;

  document.getElementById('stat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Stats saved (locally). You can extend this to store or export!');
  });
}
