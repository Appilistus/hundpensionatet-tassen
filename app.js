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

// Contact form: no reloading when click
const contactForm = document.querySelector(".contact-form");

contactForm.onsubmit = function (event) {
  event.preventDefault();
};

// ===== Booking =====

let requests = [];

const requestForm = document.getElementById("requestForm");
const ownerNameInput = document.getElementById("ownerName");
const ownerPhoneInput = document.getElementById("ownerPhone");
const dogNameInput = document.getElementById("dogName");
const requestDateInput = document.getElementById("requestDate");
const requestServiceInput = document.getElementById("requestService");
const formError = document.getElementById("formError");
const requestList = document.getElementById("requestList");

function fillServices() {
  const serviceCards = document.querySelectorAll(".service-card");

  for (let i = 0; i < serviceCards.length; i++) {
    const card = serviceCards[i];
    const name = card.querySelector("h3").textContent.trim();
    const prices = card.querySelectorAll(".service-price");

    for (let j = 0; j < prices.length; j++) {
      const price = prices[j].textContent.trim();
      const label = name + " – " + price;

      const option = document.createElement("option");
      option.value = label;
      option.textContent = label;
      requestServiceInput.appendChild(option);
    }
  }
}

function loadRequests() {
  const saved = localStorage.getItem("tassen-requests");
  if (saved !== null) {
    requests = JSON.parse(saved);
  }
}

function saveRequests() {
  localStorage.setItem("tassen-requests", JSON.stringify(requests));
}

function showRequests() {
  requestList.innerHTML = "";

  if (requests.length === 0) {
    const emptyRow = document.createElement("li");
    emptyRow.className = "request-empty";
    emptyRow.textContent = "Du har inga förfrågningar än.";
    requestList.appendChild(emptyRow);
    return;
  }

  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];

    const row = document.createElement("li");
    row.className = "request-item";

    const text = document.createElement("span");
    text.textContent =
      request.dog + " (" + request.owner + ", " + request.phone + ") – " +
      request.service + " – " + request.date;

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Avboka";
    cancelButton.className = "cancel-button";

    const place = i;
    cancelButton.onclick = function () {
      requests.splice(place, 1);
      saveRequests();
      showRequests();
    };

    row.appendChild(text);
    row.appendChild(cancelButton);
    requestList.appendChild(row);
  }
}

requestForm.onsubmit = function (event) {
  event.preventDefault();

  const ownerName = ownerNameInput.value.trim();
  const phone = ownerPhoneInput.value.trim();
  const dogName = dogNameInput.value.trim();
  const date = requestDateInput.value;
  const service = requestServiceInput.value;

  if (ownerName === "" || phone === "" || dogName === "" || date === "" || service === "") {
    formError.textContent = "Fyll i ditt namn, telefonnummer, hundens namn, datum och välj en tjänst.";
    return;
  }

  formError.textContent = "";

  const newRequest = {
    owner: ownerName,
    phone: phone,
    dog: dogName,
    service: service,
    date: date
  };

  requests.push(newRequest);

  saveRequests();
  showRequests();
  requestForm.reset();
};

fillServices();
loadRequests();
showRequests();

// ===== Reviews =====

const reviews = [
  { text: "Rex älskar att komma hit, personalen är fantastisk!", author: "Anna A." },
  { text: "Trygg och professionell hundvård. Rekommenderas varmt.", author: "Johan S." },
  { text: "Bästa hunddagiset i Hundstad, utan tvekan.", author: "Maria L." },
  { text: "Pelle och Nina är guld värda. Vår valp trivs så bra.", author: "Erik N." },
  { text: "Alltid lika trevligt bemötande. Fem stjärnor!", author: "Sara K." }
];

const reviewBox = document.getElementById("reviewBox");
const reviewButton = document.getElementById("reviewButton");

let lastIndex = -1;

function showRandomReview() {
  let index = Math.floor(Math.random() * reviews.length);

  while (index === lastIndex) {
    index = Math.floor(Math.random() * reviews.length);
  }

  lastIndex = index;

  const review = reviews[index];

  reviewBox.innerHTML =
    '<p class="review-text">"' + review.text + '"</p>' +
    '<p class="review-author">– ' + review.author + '</p>';
}

reviewButton.onclick = showRandomReview;

showRandomReview();


