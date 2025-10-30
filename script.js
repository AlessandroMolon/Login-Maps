let map;
let marker;

function initMap() {
  console.log("Google Maps caricata");
}

function mostraMappa(lat, lng) {
  document.getElementById("map").style.display = "block";

  const posizione = { lat: lat, lng: lng };

  map = new google.maps.Map(document.getElementById("map"), {
    center: posizione,
    zoom: 15,
  });

  marker = new google.maps.Marker({
    position: posizione,
    map: map,
    title: "Sede Colibryx"
  });
}

document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");
  errorEl.textContent = "";

  // Controllo credenziali
  if (username !== "colibryx" || password !== "passwordTestColibryx") {
    errorEl.textContent = "Credenziali errate. Riprova.";
    return;
  }

  try {
    const response = await fetch("https://cadena.services.colibryx.com/fastify/api/testApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        psw: password
      })
    });

    const rawText = await response.text();
    const contentType = response.headers.get("Content-Type");

    if (!response.ok) {
      errorEl.textContent = `Errore HTTP ${response.status}: ${rawText}`;
      return;
    }

    if (!contentType.includes("application/json")) {
      errorEl.textContent = "Risposta non valida dal server.";
      return;
    }

    const data = JSON.parse(rawText);
    const coordinates = data.coordinates;

    if (!coordinates || coordinates.length < 2) {
      errorEl.textContent = "Coordinate non valide ricevute dal server.";
      return;
    }

    const lat = parseFloat(coordinates[1]);
    const lng = parseFloat(coordinates[0]);

    mostraMappa(lat, lng);

  } catch (err) {
    console.error("Errore fetch:", err);
    errorEl.textContent = "Errore nella comunicazione con il server.";
  }
});