import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCh5va30-mdRVteU5-zKXJl2XK3DH0zBTA",
  authDomain: "nagaland-project.firebaseapp.com",
  projectId: "nagaland-project",
  storageBucket: "nagaland-project.firebasestorage.app",
  messagingSenderId: "726622891966",
  appId: "1:726622891966:web:b183bf2bc8439cf07f13ef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const grid = document.getElementById("trendingGrid");

const trendingQuery = query(
  collection(db, "posts"),
  orderBy("voteScore", "desc"),
  limit(9),
);

onSnapshot(trendingQuery, (snapshot) => {
  grid.innerHTML = "";

  snapshot.forEach((doc) => {
    const p = doc.data();

    const card = document.createElement("div");

    card.className = "trending-card";

    card.innerHTML = `

<div class="vote-badge">🔥 ${p.voteScore}</div>

${p.imageUrl ? `<img src="${p.imageUrl}">` : ""}

<div class="trending-content">

<h3>${p.title}</h3>

<p>${p.body.substring(0, 80)}...</p>

</div>

`;

    card.onclick = () => {
      window.location.href = "community.html";
    };

    grid.appendChild(card);
  });
});
