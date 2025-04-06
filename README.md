# EmpowerHer: Empowering Women through Resources, Community & AI Chat

EmpowerHer is a web application dedicated to empowering women by providing curated resources, peer‑to‑peer community support, and an AI‑powered chat assistant. With a responsive React frontend and a Node.js/Express backend backed by MongoDB, EmpowerHer helps bridge information gaps and foster an inclusive support network.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview
Women often face barriers accessing reliable information on health, careers, legal rights, mental wellness, and mentorship. EmpowerHer addresses these gaps by:
- Aggregating vetted articles, videos, and expert links.
- Enabling real‑time AI chat for personalized guidance.
- Fostering a moderated community forum for peer support.
- Supporting multiple languages and accessibility standards.

## Features
- **User Authentication & Profiles**  
  Secure signup/login with JWT, personalized dashboards.
- **AI‑Powered Chat Assistant**  
  Context‑aware guidance using OpenAI API for health tips, career advice, legal FAQs, and more.
- **Resource Directory**  
  Categorized library of articles, tutorials, videos, and external links.
- **Community Forum**  
  Post questions, share experiences, upvote answers, and connect with mentors.
- **Interactive Learning Modules**  
  Quizzes, goal‑setting tools, and progress tracking.
- **Multi‑Language & Accessibility**  
  i18n support (English, Hindi, etc.), WCAG‑compliant UI, keyboard navigation.
- **Responsive Design & Animations**  
  Tailwind CSS for mobile‑first layouts and Framer Motion for smooth transitions.

## Technologies Used
- **Frontend**  
  React, Vite, Tailwind CSS, React Router, i18next, Framer Motion  
- **Backend**  
  Node.js, Express, MongoDB (Mongoose), CORS, dotenv  
- **AI & APIs**  
  OpenAI GPT‑4 API for chat, RESTful endpoints  
- **Deployment**  
  Netlify (frontend), Heroku/Vercel (backend)  

## Installation & Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ManasPatil281/EmpowerHer.git
   cd EmpowerHer
   ```

2. **Backend Setup**  
   ```bash
   cd backend
   npm install
   ```
   Create `backend/.env`:
   ```env
   MONGODB_URI=your_mongo_connection_string
   PORT=5000
   OPENAI_API_KEY=your_openai_api_key
   ```
   Start server:
   ```bash
   npm run dev
   ```
   Backend runs at `http://localhost:5000`.

3. **Frontend Setup**  
   ```bash
   cd ../frontend
   npm install
   ```
   (Optional) Create `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
   Start dev server:
   ```bash
   npm run dev
   ```
   Frontend runs at `http://localhost:5173`.

## Usage
- **AI Chat**: Click “Chat” in the nav bar, type your question, and receive instant guidance.  
- **Browse Resources**: Navigate “Resources” to filter by topic (Health, Career, Legal, Wellness).  
- **Community Forum**: Post questions, reply to threads, and upvote insights.  
- **Learning Modules**: Complete quizzes and track your progress under “Learn.”

## Project Roadmap
- **Phase 1 (0–3 Months): Prototype & MVP**  
  – Build core chat and resource features  
  – Conduct user testing with focus groups  
- **Phase 2 (3–6 Months): Expansion & Refinement**  
  – Add interactive learning modules and quizzes  
  – Integrate additional languages and accessibility enhancements  
- **Phase 3 (6–12 Months): Scale & Partnerships**  
  – Launch mobile app (React Native)  
  – Partner with NGOs, universities, and government programs  
  – Implement mentor‑matching and live webinars  

## Contributing
We welcome contributions! To get started:
1. Fork the repo  
2. Create a branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```  
3. Commit your changes:  
   ```bash
   git add .
   git commit -m "Add YourFeature"
   ```  
4. Push and open a Pull Request.

## Acknowledgments
We extend our heartfelt thanks to our mentor, **Prof. Abha Tewari**, for her invaluable guidance and support throughout the project.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
```
