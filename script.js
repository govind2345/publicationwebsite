// ===== WAIT UNTIL PAGE LOADS =====
document.addEventListener("DOMContentLoaded", function () {

  // ===== ADD MEMBER =====
  window.addMember = function () {
    const name = prompt("Enter Name:");
    const role = prompt("Enter Role:");

    if (!name || !role) return;

    const container = document.getElementById("team-container");

    const card = document.createElement("div");
    card.className = "card profile";

    card.innerHTML = `
      <img src="https://via.placeholder.com/150">
      <h3>${name}</h3>
      <p>${role}</p>
    `;

    container.appendChild(card);
  };

  // ===== GALLERY POPUP =====
  const images = document.querySelectorAll(".gallery img");
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  const closeBtn = document.getElementById("closeBtn");

  if (images && popup && popupImg && closeBtn) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target !== popupImg) {
        popup.style.display = "none";
      }
    });
  }

  // ===== PROFILE POPUP =====
  window.openProfile = function (img, name, role, desc) {
    const popup = document.getElementById("profilePopup");

    document.getElementById("profileImg").src = img;
    document.getElementById("profileName").innerText = name;
    document.getElementById("profileRole").innerText = role;
    document.getElementById("profileDesc").innerText = desc;

    popup.style.display = "flex";
  };

  const closeProfile = document.getElementById("closeProfile");
  const profilePopup = document.getElementById("profilePopup");

  if (closeProfile && profilePopup) {
    closeProfile.addEventListener("click", () => {
      profilePopup.style.display = "none";
    });

    profilePopup.addEventListener("click", (e) => {
      if (e.target.id === "profilePopup") {
        profilePopup.style.display = "none";
      }
    });
  }

});
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}