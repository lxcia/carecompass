// script.js

// Get data from localStorage
const selectedType = localStorage.getItem("providerType");
const selectedChars = JSON.parse(localStorage.getItem("patientCharacteristics") || "[]");
const patientAddress = localStorage.getItem("patientAddress");

console.log("Loaded selections:");
console.log("Provider Type:", selectedType);
console.log("Patient Characteristics:", selectedChars);
console.log("Address:", patientAddress);

// Initialize Leaflet map
const map = L.map("map").setView([42.3601, -71.0589], 12);

// Use black & white tile layer
L.tileLayer("https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Load provider data
Papa.parse("fake_providers.csv", {
  download: true,
  header: true,
  complete: function (results) {
    const providers = results.data;

    console.log("Loaded providers:", providers);

    providers.forEach((provider) => {
      const lat = parseFloat(provider.lat);
      const lng = parseFloat(provider.lng);

      if (provider.type !== selectedType) return;
      if (!lat || !lng) return;

      const providerChars = provider.characteristics.split(";");
      const matchesAll = selectedChars.every((char) =>
        providerChars.includes(char)
      );

      if (!matchesAll) return;

      const marker = L.circleMarker([lat, lng], {
        radius: 12,
        fillColor: "#e63946",
        color: "#6a040f",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      });

      marker.bindTooltip(
        `<strong>${provider.name}</strong><br>${provider.address}<br>${provider.phone}`,
        { direction: "top", permanent: false, opacity: 0.9 }
      );

      marker.addTo(map);
    });
  },
});

