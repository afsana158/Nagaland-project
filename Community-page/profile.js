import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  /* your config */
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");

const postsContainer = document.getElementById("userPosts");

const q = query(collection(db, "posts"), where("authorId", "==", uid));

onSnapshot(q, (snapshot) => {
  postsContainer.innerHTML = "";

  snapshot.forEach((doc) => {
    const p = doc.data();

    const div = document.createElement("div");

    div.className = "post";

    div.innerHTML = `
<h3>${p.title}</h3>
<p>${p.body}</p>
`;

    postsContainer.appendChild(div);
  });
});

const notifQuery = query(
  collection(db, "notifications"),
  where("postOwner", "==", auth.currentUser.uid),
);

onSnapshot(notifQuery, (snap) => {
  document.getElementById("notifBtn").innerText = "🔔 " + snap.size;
});
let lastDoc = null;

const postQuery = query(
  collection(db, "posts"),
  orderBy("createdAt", "desc"),
  limit(5),
);

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadMorePosts();
  }
});
