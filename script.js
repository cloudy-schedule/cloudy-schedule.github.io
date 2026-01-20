const drum = document.getElementById("drum");

/*
  === МЕНЯЕШЬ ТОЛЬКО ЭТО ===
  Индекс = день месяца - 1
*/
const shifts = [
  "Лёха",   // 1
  "Лёха",   // 2
  "Артем",   // 3
  "Артем",   // 4
  "Лёха",   // 5
  "Лёха",   // 6
  "Артем",   // 7
  "Артем",   // 8
  "Лёха",   // 9
  "Лёха",   // 10
  "Артем",   // 11
  "Артем",   // 12
  "Лёха",   // 13
  "Лёха",   // 14
  "Артем",   // 15
  "Лёха",   // 16
  "Лёха",   // 17
  "Лёха",   // 18
  "Артем",   // 19
  "Артем",   // 20
  "Артем",   // 21
  "Артем",   // 22
  "Артем",   // 23
  "Артем",   // 24
  "Артем",   // 25
  "Артем",   // 26
  "Артем",   // 27
  "Артем",   // 28
  "Артем",   // 29
  "Артем",   // 30
  "Артем",   // 31
  
];

/* Цвет по имени */
function getColorClass(name) {
  if (name === "Артем") return "orange";
  if (name === "Богдан") return "green";
  if (name === "Лёха") return "violet";
  return "red";
}

/* Генерация карточек */
for (let day = 1; day <= 31; day++) {
  const name = shifts[day - 1] || "—";

  const card = document.createElement("div");
  card.className = `card ${getColorClass(name)}`;
  card.dataset.day = day;

  card.innerHTML = `
    <div class="date">${day}</div>
    <div class="name">${name}</div>
  `;

  drum.appendChild(card);
}

/* Автопрокрутка к сегодняшнему дню */
const today = new Date().getDate();
const todayCard = document.querySelector(`.card[data-day="${today}"]`);

if (todayCard) {
  todayCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
