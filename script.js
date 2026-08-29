const images = {
  laptop: "assets/images/chibi-laptop.svg",
  headset: "assets/images/chibi-headset.svg",
  tablet: "assets/images/chibi-tablet.svg",
  reading: "assets/images/chibi-reading.svg",
  prueba: "assets/images/prueba.png"
};

const labels = {
  laptop: "Chibi con portátil",
  headset: "Chibi gaming con auriculares",
  tablet: "Chibi con tablet",
  reading: "Chibi leyendo",
  prueba: "assets/images/prueba.png"
};

document.querySelectorAll("select[data-section]").forEach(select => {
  Object.entries(labels).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });

  const key = select.dataset.section;
  const initial = window.SAMU_CONFIG?.sectionImages?.[key] || "laptop";
  select.value = initial;

  const target = document.getElementById(`img-${key}`);
  if (target) target.src = images[initial];

  select.addEventListener("change", () => {
    if (target) {
      target.src = images[select.value];
      target.animate(
        [{opacity:.25, transform:"scale(.97)"},{opacity:1, transform:"scale(1)"}],
        {duration:260, easing:"ease-out"}
      );
    }
  });
});
