const clickButton = document.getElementById('click-button');
const clickCount = document.getElementById('click-count');
const rankDisplay = document.getElementById('rank');

let count = 0;
let rank = '';

clickButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = `${count} click${count !== 1 ? 's' : ''}`;

  if (count >= 20) {
    rank = getRank(count);
    rankDisplay.textContent = `Rank: ${rank}`;
    count = count % 420; // Reset count to continue increasing ranks
  }
});

function getRank(clicks) {
  const ranks = [
    'Beginner',
    'Amateur',
    'Novice',
    'Apprentice',
    'Intermediate',
    'Skilled',
    'Experienced',
    'Advanced',
    'Expert',
    'Master',
    'Grandmaster',
    'Champion',
    'Legend',
    'Hero',
    'Myth',
    'Immortal',
    'Ascendant',
    'Ethereal',
    'Supreme',
    'Ultimate'
  ];

  const rankIndex = Math.floor(clicks / 20) - 1;
  return ranks[rankIndex];
}
