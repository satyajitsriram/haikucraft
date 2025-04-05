# 🌸 HaikuCraft

**HaikuCraft** is a minimalist web application that generates original **haiku poems** using the OpenAI API. The user provides two creative prompts — a **seasonal reference** and a **cutting word** — and receives a haiku that follows the traditional 5-7-5 syllable structure.

---

## 🚀 Live Demo

🔗 [https://haikucraft.vercel.app](https://haikucraft.vercel.app)

---

## ✨ Features

- 📜 Generates authentic 3-line haikus via GPT-4o-mini
- 🖋️ Prompts user for:
  - **Seasonal reference** (e.g., Autumn, Spring)
  - **Cutting word** (e.g., Yūgen, Kireji)
- 🎨 Clean and responsive dark-themed UI
- ⛔ Button disabled unless both inputs are filled
- 🔄 Clear button to reset the output
- ⚙️ Powered by OpenAI + FastAPI + React (Vite)

---

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Python (FastAPI)
- **API**: OpenAI (GPT-4o-mini)
- **Deployment**: Vercel (frontend only)
- **Local Hosting**: Uvicorn (backend)
- **Environment**: dotenv

---

## 💻 Local Development

Clone the repo and follow the steps below to run both the frontend and backend locally.

### 1. Clone the Repo

```bash
git clone https://github.com/satyajitsriram/haikucraft.git
cd haikucraft
```

---

### 2. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn openai python-dotenv
```

Create a `.env` file in the `backend` folder:

```
OPENAI_API_KEY=your_openai_key_here
```

Run the backend server:

```bash
uvicorn main:app --reload
```

> Runs at `http://localhost:8000`

---

### 3. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

> Runs at `http://localhost:5173`

Make sure your backend server is running when using the frontend.

---

## 📂 Folder Structure

```
haikucraft/
├── backend/
│   ├── main.py
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── public/
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## 📸 Screenshot



---

## 🤖 Prompt Logic

Example prompt sent to OpenAI API:

> “Write a traditional haiku with the cutting word `yūgen` and a seasonal reference to `spring`. Follow the 5-7-5 syllable rule.”

This ensures stylistically correct haikus in classic Japanese form.

---

## 👨‍💻 Author

**Satyajit Sriram**  
📍 NYC | 🎓 NYU | 🧠 OpenAI tinkerer  
[GitHub](https://github.com/satyajitsriram) · [LinkedIn](https://www.linkedin.com/in/satyajitsriram)

---

## 🪪 License

Open-source for learning and demo purposes. Enjoy!
