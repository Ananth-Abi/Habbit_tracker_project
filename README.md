# 🧠 HabitTracker

HabitTracker is a modern web application that helps users build consistency by tracking daily and weekly habits.  
It allows users to add habits, mark them as completed, track streaks, and view useful statistics — all in a clean and intuitive UI.

---

## ✨ Features

- ➕ Add daily or weekly habits  
- ✅ Mark habits as completed  
- 🔄 Toggle completion by date  
- 🔥 Automatic streak calculation  
- 📊 Habit statistics dashboard  
- ⏳ Async data handling with Redux Toolkit  
- 🎨 Clean UI using Material UI  
- ⚡ Fast development with Vite  

---

## 🧩 How It Works

- Habits are stored in **Redux global state**
- Completion is tracked using date strings (`YYYY-MM-DD`)
- Streaks are calculated by checking consecutive completed days
- Async habit loading is simulated using `createAsyncThunk`

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript  
- **State Management:** Redux Toolkit  
- **UI Library:** Material UI  
- **Build Tool:** Vite  
