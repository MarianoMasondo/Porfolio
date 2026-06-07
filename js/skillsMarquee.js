const marquees = document.querySelectorAll(".languagesIcon-container");

marquees.forEach((marquee) => {
  const items = Array.from(marquee.children);

  marquee.innerHTML = "";

  const group1 = document.createElement("div");
  const group2 = document.createElement("div");

  group1.className = "skills-marquee-group";
  group2.className = "skills-marquee-group";

  items.forEach((item) => {
    group1.appendChild(item.cloneNode(true));
    group2.appendChild(item.cloneNode(true));
  });

  marquee.appendChild(group1);
  marquee.appendChild(group2);
});