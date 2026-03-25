import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  increment,
  deleteDoc,
  getDoc,
  setDoc,
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

/* ---------------- DOM ---------------- */

const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const googleLogin = document.getElementById("googleLogin");
const logoutBtn = document.getElementById("logoutBtn");
const dropdown = document.getElementById("dropdown");
const userName = document.getElementById("userName");
const feed = document.getElementById("feed");

/* ---------------- AUTH ---------------- */

googleLogin.onclick = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

loginBtn.onclick = () => {
  if (auth.currentUser) dropdown.classList.toggle("hidden");
  else loginModal.style.display = "flex";
};

logoutBtn.onclick = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginModal.style.display = "none";
    userName.innerText = user.displayName;
  } else {
    loginModal.style.display = "flex";
    userName.innerText = "Guest";
  }
});

/* ---------------- CREATE POST ---------------- */

document.getElementById("postBtn").onclick = async () => {
  if (!auth.currentUser) {
    loginModal.style.display = "flex";
    return;
  }

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const file = document.getElementById("image").files[0];

  let fileUrl = "";
  let fileType = "";

  // ✅ FIXED: use "file" not "imgFile"
  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "community_upload");

    // 🔥 IMPORTANT FIX
    const isPDF = file.type === "application/pdf";

    const uploadURL = isPDF
      ? "https://api.cloudinary.com/v1_1/dnqrdgv2u/raw/upload"
      : "https://api.cloudinary.com/v1_1/dnqrdgv2u/image/upload";

    try {
      const res = await fetch(uploadURL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      fileUrl = data.secure_url;
      fileType = file.type;

      console.log("Uploaded:", fileUrl);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
      return;
    }
  }

  // ✅ save post
  await addDoc(collection(db, "posts"), {
    title,
    body,
    fileUrl,
    fileType,
    voteScore: 0,
    author: auth.currentUser.displayName,
    authorId: auth.currentUser.uid,
    userPhoto: auth.currentUser.photoURL,
    createdAt: Date.now(),
  });

  // clear inputs
  document.getElementById("title").value = "";
  document.getElementById("body").value = "";
  document.getElementById("image").value = "";

  alert("Post uploaded!");
};
/* ---------------- LOAD POSTS ---------------- */

function loadPosts() {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

  onSnapshot(q, (snapshot) => {
    feed.innerHTML = "";

    snapshot.forEach((docSnap) => {
      const p = docSnap.data();
      const postId = docSnap.id;

      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `

<div class="post-top">

<div class="post-left">

<div class="post-header">
<span>Posted by</span>

<a href="profile.html?uid=${p.authorId}">
<img 
class="user-img" 
src="${p.userPhoto || "https://i.pravatar.cc/40"}"
title="${p.author}"
>
</a>
</div>

<h2 class="post-title">${p.title}</h2>
<p>${p.body}</p>

${
  p.fileUrl
    ? p.fileType && p.fileType.includes("image")
      ? `<img class="post-img" src="${p.fileUrl}">`
      : p.fileType && p.fileType.includes("pdf")
        ? `<div class="file-box">
          📄 PDF File
          <a href="${p.fileUrl.replace("/upload/", "/upload/fl_attachment/")}" target="_blank">
            Open PDF
          </a>
        </div>`
        : `<div class="file-box">
          📁 File
          <a href="${p.fileUrl}" download>Download</a>
        </div>`
    : ""
}

${
  auth.currentUser && auth.currentUser.uid === p.authorId
    ? `
<div class="post-actions">
<button onclick="editPost('${postId}','${p.title}','${p.body}')">Edit</button>
<button onclick="deletePost('${postId}')">Delete</button>
</div>`
    : ""
}

</div>

<div class="vote-box">
<button onclick="vote('${postId}',1)">▲</button>
<span>${p.voteScore}</span>
<button onclick="vote('${postId}',-1)">▼</button>
</div>

</div>

<hr>

<div class="comments">
<h4>Comments</h4>
<div id="comments-${postId}"></div>
<input id="commentInput-${postId}" placeholder="Write comment">
<button onclick="addComment('${postId}')">Post</button>
</div>

`;

      feed.appendChild(div);
      loadComments(postId);
    });
  });
}

loadPosts();

/* ---------------- VOTE ---------------- */

window.vote = async (postId, value) => {
  if (!auth.currentUser) return (loginModal.style.display = "flex");

  const voteRef = doc(db, "posts", postId, "votes", auth.currentUser.uid);
  const voteDoc = await getDoc(voteRef);

  if (voteDoc.exists()) return alert("Already voted");

  await setDoc(voteRef, { value });

  await updateDoc(doc(db, "posts", postId), {
    voteScore: increment(value),
  });
};

/* ---------------- DELETE ---------------- */

window.deletePost = async (postId) => {
  if (confirm("Delete post?")) {
    await deleteDoc(doc(db, "posts", postId));
  }
};

/* ---------------- EDIT ---------------- */

window.editPost = async (postId, oldTitle, oldBody) => {
  const newTitle = prompt("Edit Title", oldTitle);
  const newBody = prompt("Edit Body", oldBody);

  if (!newTitle || !newBody) return;

  await updateDoc(doc(db, "posts", postId), {
    title: newTitle,
    body: newBody,
  });
};

/* ---------------- COMMENTS ---------------- */

window.addComment = async (postId) => {
  if (!auth.currentUser) return (loginModal.style.display = "flex");

  const input = document.getElementById(`commentInput-${postId}`);
  const text = input.value;

  if (!text.trim()) return;

  await addDoc(collection(db, "posts", postId, "comments"), {
    text,
    author: auth.currentUser.displayName,
    createdAt: Date.now(),
  });

  input.value = "";
};

function loadComments(postId) {
  const box = document.getElementById(`comments-${postId}`);

  onSnapshot(collection(db, "posts", postId, "comments"), (snapshot) => {
    box.innerHTML = "";

    snapshot.forEach((doc) => {
      const c = doc.data();
      box.innerHTML += `<p><b>${c.author}</b>: ${c.text}</p>`;
    });
  });
}

const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Save preference
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});
