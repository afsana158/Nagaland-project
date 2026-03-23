console.log("🔥 auth.js loaded");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ---------------- FIREBASE ---------------- */

const firebaseConfig = {
  apiKey: "AIzaSyCh5va30-mdRVteU5-zKXJl2XK3DH0zBTA",
  authDomain: "nagaland-project.firebaseapp.com",
  projectId: "nagaland-project",
  storageBucket: "nagaland-project.firebasestorage.app",
  messagingSenderId: "726622891966",
  appId: "1:726622891966:web:b183bf2bc8439cf07f13ef",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* ---------------- PROFILE PIC ---------------- */

const profilePic = document.getElementById("profilePic");

onAuthStateChanged(auth, (user) => {
  if (user && profilePic) {
    profilePic.src = user.photoURL;
  }
});

/* ================= TRENDING POSTS ================= */

function loadTrendingPosts() {
  console.log("🚀 loadTrendingPosts running...");

  const grid = document.getElementById("trendingGrid");
  if (!grid) return;

  onSnapshot(collection(db, "posts"), (snapshot) => {
    console.log("🔥 Snapshot size:", snapshot.size);

    let posts = [];

    snapshot.forEach((docSnap) => {
      posts.push({ id: docSnap.id, ...docSnap.data() });
    });

    // sort by votes
    posts.sort((a, b) => (b.voteScore || 0) - (a.voteScore || 0));

    const trending = posts.slice(0, 6);

    grid.innerHTML = "";

    trending.forEach((p) => {
      const card = document.createElement("div");
      card.className = "trending-card";

      card.innerHTML = `
        ${
          p.fileUrl && p.fileType?.includes("image")
            ? `<img src="${p.fileUrl}" />`
            : ""
        }

        <div class="vote-badge">⬆ ${p.voteScore || 0}</div>

        <div class="trending-content">
          <h3>${p.title || "Untitled"}</h3>
          <p>${
            p.body && p.body.trim()
              ? p.body.substring(0, 80)
              : "No content available"
          }</p>
        </div>
      `;

      // 🔥 CLICK TO OPEN MODAL
      card.onclick = () => openModal(p);

      grid.appendChild(card);
    });
  });
}

/* ================= MODAL ================= */

window.openModal = function (post) {
  const modal = document.getElementById("postModal");

  modal.classList.remove("hidden");

  document.getElementById("modalTitle").innerText = post.title || "Untitled";

  document.getElementById("modalBody").innerText =
    post.body || "No content available";

  const img = document.getElementById("modalImg");

  if (post.fileUrl) {
    img.src = post.fileUrl;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
};

window.closeModal = function () {
  document.getElementById("postModal").classList.add("hidden");
};

/* ---------------- RUN ---------------- */

loadTrendingPosts();
