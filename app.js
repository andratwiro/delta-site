// Reveal each client's project image on hover / focus.
// Data lives on the markup (data-img) so adding a client is an HTML-only change.

const stage = document.querySelector(".stage");
const stageImg = document.querySelector(".stage__img");
const clients = document.querySelectorAll(".client");

// Preload so the first hover doesn't flash empty.
const preloaded = new Set();
function preload(src) {
  if (!src || preloaded.has(src)) return;
  const img = new Image();
  img.src = src;
  preloaded.add(src);
}
clients.forEach((c) => preload(c.dataset.img));

let hideTimer;

function show(src) {
  if (!src || !stage) return;
  clearTimeout(hideTimer);
  if (stageImg.getAttribute("src") !== src) stageImg.setAttribute("src", src);
  stage.classList.add("is-visible");
}

function hide() {
  if (!stage) return;
  // small delay avoids a flicker when moving between adjacent names
  hideTimer = setTimeout(() => stage.classList.remove("is-visible"), 80);
}

clients.forEach((client) => {
  client.addEventListener("mouseenter", () => show(client.dataset.img));
  client.addEventListener("focus", () => show(client.dataset.img));
  client.addEventListener("mouseleave", hide);
  client.addEventListener("blur", hide);
});
