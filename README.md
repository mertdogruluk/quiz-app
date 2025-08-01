# ⚡ React Quiz App

This is a basic quiz application built with **React.js**.  
Users are presented with randomly shuffled React-related questions, each with a 60-second time limit.  
The app provides instant visual feedback for each selected answer and displays a final score upon completion.

---


## 🛠️ Features

- ✅ 5 React-related multiple-choice questions  
- ⏱️ 60-second timer per question  
- 🟢 Visual feedback: green for correct, red for incorrect  
- 💬 Popup messages after each answer  
- 📊 Final score display at the end  
- 🔁 Option to restart the quiz  
- 🎨 Modern and responsive design  
- 🔀 Questions are shuffled every time the quiz starts  

---

## 🧰 Technologies Used

- React (Functional Components)  
- React Hooks (`useState`, `useEffect`)  
- Pure CSS (gradients, transitions, responsive design)  
- JavaScript (conditional rendering, logic, timer)  

---

## 📁 Folder Structure

src/
├── App.jsx # Main state & logic container
├── components/
│ ├── Quiz.jsx # Handles question rendering, answer checking
│ └── Timer.jsx # Countdown timer component
├── data/
│ └── Questions.jsx # Static question data and shuffle function
├── App.css # Main styles and UI


---

## ⚙️ How to Run the Project

1. **Clone the repository**

```bash
git clone https://github.com/mertdogruluk/quiz-app.git
cd quiz-app
pnpm install
pnpm run dev

📌 Project Purpose
This project was developed to apply and demonstrate key React concepts such as:

Component structuring

State and props

Conditional rendering

Timer management

UI feedback and styling

It was also designed to practice UI/UX with animations and responsiveness.

📬 Contact
If you'd like to connect or ask a question, feel free to visit my GitHub profile:
👉 https://github.com/mertdogruluk

📄 License
This project is open source and available under the MIT License.