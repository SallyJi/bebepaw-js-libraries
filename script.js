const careCarousel = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 16,
  autoplay: 4000,
  hoverpause: true,
  breakpoints: {
    767: {
      perView: 1
    },
    1023: {
      perView: 2
    }
  }
});

careCarousel.mount();

AOS.init({
  duration: 700,
  once: true,
  offset: 80
});

const clinicMap = L.map("clinic-map").setView(
  [43.6532, -79.3832],
  12
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
).addTo(clinicMap);

const clinicLocations = [
  {
    name: "BebePaw Downtown Clinic",
    coordinates: [43.6532, -79.3832],
    type: "General veterinary care"
  },
  {
    name: "Harbourfront Animal Hospital",
    coordinates: [43.6387, -79.3817],
    type: "Emergency and urgent care"
  },
  {
    name: "Midtown Pet Wellness Centre",
    coordinates: [43.7043, -79.3887],
    type: "Preventative and routine care"
  }
];

clinicLocations.forEach((clinic) => {
  L.marker(clinic.coordinates)
    .addTo(clinicMap)
    .bindPopup(`
      <strong>${clinic.name}</strong><br>
      ${clinic.type}
    `);
});