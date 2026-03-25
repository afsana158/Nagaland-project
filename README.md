# 🌄 Nagaland — AI Travel & Craft Shopping Platform

A multi-frontend web platform for exploring Nagaland tourism and shopping for authentic Naga handcrafted products, powered by a RAG + rule-based AI chatbot assistant.

---

## 📁 Project Structure

```
Nagaland-project/
│
├── Chatbot/                        # Flask AI chatbot backend
│   ├── app.py                      # Flask server + CORS
│   ├── chatbot.py                  # Rule-based + RAG chatbot logic
│   ├── vector_store.py             # FAISS vector index & search
│   ├── data.csv                    # Nagaland tourism dataset
│   ├── faiss.index                 # Prebuilt FAISS index
│   └── templates/
│       └── index.html              # Standalone chat UI
│
├── Main-page/                      # Nagaland tourism frontend
│   └── frontend/
│       └── src/
│           ├── components/
│           │   ├── CardCarousel.jsx
│           │   ├── Footer.jsx
│           │   ├── Header.jsx
│           │   ├── Layout.jsx
│           │   └── Weather.jsx
│           ├── data/
│           │   └── Districts.js
│           ├── pages/
│           │   ├── AboutPages/
│           │   ├── ExplorePage/
│           │   ├── HomePages/
│           │   ├── PlanPages/
│           │   └── Home.jsx
│           ├── styles/
│           │   ├── AboutStyles.css
│           │   ├── ExploreStyles.css
│           │   ├── FooterStyles.css
│           │   ├── HeaderStyles.css
│           │   └── HomeStyles.css
│           ├── App.jsx
│           ├── main.jsx
│           └── .env
│
├── Shopping-page/                  # Naga crafts e-commerce frontend
│   └── frontend/
│       └── src/
│           ├── components/
│           │   ├── Auth.jsx / Auth.css
│           │   ├── Chatbot.jsx / Chatbot.css   # Floating chatbot widget
│           │   ├── Footer.jsx / Footer.css
│           │   ├── Layout.jsx
│           │   └── Navbar.jsx / Navbar.css
│           ├── context/
│           │   ├── CartContext.jsx
│           │   ├── ProductContext.jsx
│           │   └── WishlistContext.jsx
│           ├── data/
│           │   └── categories.js
│           ├── pages/
│           │   ├── About.jsx
│           │   ├── Cart.jsx
│           │   ├── CategoryPage.jsx
│           │   ├── Checkout.jsx
│           │   ├── Collections.jsx
│           │   ├── Hero.jsx
│           │   ├── Home.jsx
│           │   ├── OrderSuccess.jsx
│           │   ├── ProductSlider.jsx
│           │   ├── Profile.jsx
│           │   ├── Search.jsx
│           │   └── Wishlist.jsx
│           ├── App.jsx
│           └── main.jsx
│
├── Community-page/                 # Community frontend (in progress)
│   ├── backend/
│   └── frontend/
│
└── README.md
```

---

## ✨ Features

### 🤖 AI Chatbot (Floating Widget)
- Embedded on every page of the shopping site as a fixed bottom-right widget
- **Rule-based responses** for places, food, hotels, activities, transport, itinerary
- **RAG fallback** — FAISS vector search + Ollama LLM for open-ended questions
- **Craft redirect** — automatically links to the shopping platform for product queries
- Animated typing indicator, quick-action chips, and error handling

### 🗺️ Main Page (Tourism)
- Explore Nagaland districts, places, and travel plans
- Weather widget integration
- Card carousel for featured destinations
- About, Explore, Plan, and Home sections

### 🛍️ Shopping Page (E-commerce)
- Browse Naga handcrafted products by category
- Cart, wishlist, collections, and checkout flow
- User authentication and profile management
- Product search and category filtering
- Order success confirmation

### 👥 Community Page
- Dedicated community frontend + backend (in progress)

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 18+
- [Ollama](https://ollama.com) installed

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nagaland-project.git
cd Nagaland-project
```

---

### 2. Start the Chatbot Backend

```bash
cd Chatbot
pip install flask flask-cors ollama pandas sentence-transformers faiss-cpu
```

Pull the AI model:

```bash
ollama pull tinyllama
```

Start the server:

```bash
python app.py
# Runs at http://127.0.0.1:5000
```

> Debug mode: `FLASK_DEBUG=true python app.py`

---

### 3. Start the Main Page

```bash
cd Main-page/frontend
npm install
npm run dev
```

---

### 4. Start the Shopping Page

```bash
cd Shopping-page/frontend
npm install
npm run dev
# Runs at http://localhost:5174
```

---

## 🧠 Chatbot Logic Flow

```
User message
     │
     ▼
Input validation
     │
     ▼
Rule-based keyword match
  ├── Greeting        → welcome message
  ├── Places / Visit  → top locations from dataset
  ├── Food / Eat      → famous dishes from dataset
  ├── Hotel / Stay    → recommended hotels from dataset
  ├── Activities      → things to do from dataset
  ├── Itinerary/Plan  → day-by-day travel plan
  ├── Transport       → transport guide
  └── Craft/Scarf/
      Buy/Shop        → redirect to shopping platform
     │
     ▼ (no rule matched)
FAISS vector search over dataset
     │
     ▼
tinyllama via Ollama — answers from context only
     │
     ▼
Response returned to user
```

---

## 🌐 Chatbot API

### `POST /chat`

**Request:**
```json
{ "message": "What are the top places to visit in Nagaland?" }
```

**Response:**
```json
{ "response": "✨ Top 5 Places to Visit in Nagaland:\n1. Kohima\n2. ..." }
```

| Status | Reason |
|--------|--------|
| `200` | Success |
| `400` | Missing or empty message |
| `500` | Internal server error |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Tourism frontend | React 18, Vite, React Router |
| Shopping frontend | React 18, Vite, Context API |
| Chatbot backend | Python, Flask, Flask-CORS |
| AI / LLM | Ollama (tinyllama), FAISS, Sentence Transformers |
| Data | Pandas, custom CSV dataset |
| Styling | CSS3, DM Sans, Playfair Display, Bootstrap Icons |

---

## ⚙️ Configuration

To update the shopping site URL in the chatbot (for deployment):

```python
# Chatbot/chatbot.py
SHOP_URL = "https://your-deployed-shopping-site.com"
```

| Variable | Default | Description |
|---|---|---|
| `FLASK_DEBUG` | `false` | Enable Flask debug mode |
| Flask port | `5000` | Chatbot backend |
| Vite port | `5174` | Shopping frontend |

---

## 🐛 Common Issues

| Error | Fix |
|---|---|
| `No module named 'flask'` | `pip install flask flask-cors` |
| `FileNotFoundError: data.csv` | Ensure `data.csv` is inside `Chatbot/` |
| Ollama port already in use | Ollama is already running — skip `ollama serve` |
| Model memory error | Use `tinyllama` instead of `phi3:mini` |
| CORS error from React | Ensure `CORS(app)` is present in `app.py` |
| Chatbot only shows on one page | Place `<FloatingChatbot />` in `App.jsx` outside `<Routes>` |

---

## 📸 Screenshots


## 🚧 Roadmap

- [ ] Deploy Flask backend (Render / Railway)
- [ ] Deploy Main-page frontend (Vercel)
- [ ] Deploy Shopping-page frontend (Vercel / Netlify)
- [ ] Complete Community page
- [ ] Replace localhost chatbot URL with production URL
- [ ] Add Nagamese language support
- [ ] Expand tourism dataset with more districts

---

## 🙏 Acknowledgements

- Tourism data sourced from Nagaland Tourism resources
- Built with [Ollama](https://ollama.com) for local LLM inference
- Lottie animations via [LottieFiles](https://lottiefiles.com)
- Weather data integration via Weather API

---

## 📄 License

MIT License — free to use, modify, and distribute.
