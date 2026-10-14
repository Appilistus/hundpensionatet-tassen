const openHoursSection = document.getElementById("openHours");

function showOpenHours() {
  const now = new Date();

  const time = now.toLocaleTimeString("sv-SE");

  const day = now.getDay();
  const hour = now.getHours();

  let isOpen = false;

  if (day >= 1 && day <= 5) {
    if (hour >= 8 && hour < 18) {
      isOpen = true;
    }
  } else if (day === 6) {
    if (hour >= 9 && hour < 14) {
      isOpen = true;
    }
  }

  let statusText = "Stängt just nu";
  let statusClass = "is-closed";

  if (isOpen === true) {
    statusText = "Öppet just nu";
    statusClass = "is-open";
  }

  openHoursSection.innerHTML =
    '<div class="open-hours">' +
      '<span class="open-clock"><i class="fi fi-rr-clock"></i> ' + time + '</span>' +
      '<span class="open-status ' + statusClass + '">' + statusText + '</span>' +
    '</div>';
}

showOpenHours();
setInterval(showOpenHours, 1000);