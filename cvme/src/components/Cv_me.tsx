import { useState } from "react";
import "./Cv_me.css";
import profileImage from "../image/WhatsApp Image 2025-12-08 at 12.23.21.jpeg";


function Cv_me() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`cv ${darkMode ? "dark" : ""}`}>

      {/* ================= TOOLBAR ================= */}
      <div className="toolbar">

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Theme"}
        </button>
       
      </div>


      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        {/* PROFILE IMAGE */}
        <div className="avatar">
          <img
            src={profileImage}
            alt="Singkham Meboun"
          />
        </div>


        <h1>SINGKHAM SUVANNAVONG</h1>

        <p className="name-en">
          ສິງຄຳ ສຸວັນນະວົງ
        </p>

        <div className="role">
          JUNIOR FRONT-END DEVELOPER
        </div>


        {/* ================= CONTACT ================= */}
        <section className="side-section">

          <h2>CONTACT</h2>

          <p>📞 020 5405 1605</p>

          <p>
            ✉️ thasing436@gmail.com
          </p>

          <p>
            📍 Vientiane Capital, Laos
          </p>

          <p>
            💻 github.com/khamsing5161
          </p>

          <p>
            🌐 portfolio.singkham-dev.com
          </p>

        </section>


        {/* ================= TECH STACK ================= */}
        <section className="side-section">

          <h2>TECH STACK</h2>

          <h3>FRONTEND</h3>

          <div className="skill">
            <span>React.js</span>
          </div>

          <div className="skill">
            <span>JavaScript ES6+</span>
          </div>

          <div className="skill">
            <span>HTML5</span>
          </div>

          <div className="skill">
            <span>CSS3</span>
          </div>

          <div className="skill">
            <span>Tailwind CSS</span>
          </div>

          <div className="skill">
            <span>React Router</span>
          </div>

          <h3>BACKEND</h3>

          <div className="skill">
            <span>Node.js</span>
          </div>

          <div className="skill">
            <span>Express.js</span>
          </div>

          <div className="skill">
            <span>REST API</span>
          </div>

          <h3>DATABASE</h3>

          <div className="skill">
            <span>MySQL</span>
          </div>

          <h3>TOOLS</h3>

          <div className="skill">
            <span>Git / GitHub</span>
          </div>

          <div className="skill">
            <span>VS Code</span>
          </div>

          <div className="skill">
            <span>Postman</span>
          </div>

          <div className="skill">
            <span>Vite / npm</span>
          </div>

        </section>


        {/* ================= LANGUAGES ================= */}
        <section className="side-section">

          <h2>LANGUAGES</h2>

          <div className="skill">
            <span>Lao — Native</span>
          </div>

          <div className="skill">
            <span>Thai — Good</span>
          </div>

          <div className="skill">
            <span>English — Intermediate</span>
          </div>

        </section>


        <div className="quote">
          “ຮຽນຮູ້ສິ່ງໃໝ່
          <br />
          ແກ້ໄຂບັນຫາ
          <br />
          ແລະສ້າງ Web
          <br />
          ທີ່ດີໃຫ້ຜູ້ໃຊ້”
        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <section className="content">


        {/* ================= HEADER ================= */}
        <header className="top">

          <div>

            <span className="mini-label">
              CURRICULUM VITAE
            </span>

            <h2>
              Junior Front-End Developer
            </h2>

          </div>



        </header>


        {/* ================= PROFILE ================= */}
        <section className="section">

          <div className="section-title">

            <span>👤</span>

            <h2>PROFILE</h2>

          </div>

          <p>
            Junior Front-End Developer ທີ່ມີຄວາມສົນໃຈ
            ໃນການພັດທະນາ Web Application
            ແລະ User Interface. ມີປະສົບການໃຊ້
            React.js, JavaScript, HTML, CSS,
            Node.js ແລະ REST API ໃນການພັດທະນາ
            ໂຄງການຈິງ.
          </p>

        </section>


        {/* ================= PROJECTS ================= */}
        <section className="section">

          <div className="section-title">

            <span>💼</span>

            <h2>KEY PROJECTS</h2>

          </div>


          {/* PROJECT 1 */}
          <article className="project">

            <div className="project-head">

              <h3>
                Student Management System
              </h3>

              <time>
                2025 – 2026
              </time>

            </div>


            <div className="tags">

              <b>React.js</b>
              <b>Node.js</b>
              <b>Express.js</b>
              <b>MySQL</b>

            </div>


            <ul>

              <li>
                ພັດທະນາ Web Application
                ສຳລັບຈັດການຂໍ້ມູນນັກສຶກສາ
              </li>

              <li>
                ສ້າງ CRUD ສຳລັບເພີ່ມ,
                ແກ້ໄຂ, ລຶບ ແລະຄົ້ນຫາຂໍ້ມູນ
              </li>

              <li>
                ເຊື່ອມ React Frontend
                ກັບ REST API
              </li>

              <li>
                ອອກແບບ Responsive UI
                ສຳລັບ Desktop ແລະ Mobile
              </li>

              <li>
                ພັດທະນາ PDF ແລະ Excel Report
              </li>

            </ul>

          </article>


          {/* PROJECT 2 */}
          <article className="project">

            <div className="project-head">

              <h3>
                Online Coffee Shop Management System
              </h3>

              <time>
                2024 – 2025
              </time>

            </div>


            <div className="tags">

              <b>React.js</b>
              <b>Node.js</b>
              <b>Express.js</b>
              <b>MySQL</b>

            </div>


            <ul>

              <li>
                ພັດທະນາ Online Coffee Shop
                Web Application
              </li>

              <li>
                ສ້າງ Product Management
                ແລະ Shopping Cart
              </li>

              <li>
                ສ້າງ Order Management
                ແລະ Payment Flow
              </li>

              <li>
                ເຊື່ອມ Frontend
                ກັບ Express REST API
              </li>

              <li>
                ຈັດການ Authentication
                ດ້ວຍ JWT
              </li>

            </ul>

          </article>


          {/* PROJECT 3 */}
          <article className="project">

            <div className="project-head">

              <h3>
                Personal Portfolio Website
              </h3>

              <time>
                2025
              </time>

            </div>


            <div className="tags">

              <b>HTML</b>
              <b>CSS</b>
              <b>JavaScript</b>

            </div>


            <ul>

              <li>
                ອອກແບບ Responsive Portfolio
                ສຳລັບສະແດງ Projects
              </li>

              <li>
                ສ້າງ Modern UI
                ແລະ Responsive Layout
              </li>

              <li>
                ເພີ່ມ Animation
                ແລະ Interactive Components
              </li>

            </ul>

          </article>

        </section>




        {/* ================= TWO COLUMNS ================= */}
        <div className="two-col">


          {/* SOFT SKILLS */}
          <section className="section">

            <div className="section-title">

              <span>🤝</span>

              <h2>SOFT SKILLS</h2>

            </div>


            <ul className="checks">

              <li>
                Problem Solving
              </li>

              <li>
                Teamwork
              </li>

              <li>
                Fast Learner
              </li>

              <li>
                Responsibility
              </li>

              <li>
                Communication
              </li>

            </ul>

          </section>


          {/* LANGUAGE */}
          <section className="section">

            <div className="section-title">

              <span>🌐</span>

              <h2>LANGUAGES</h2>

            </div>


            <div className="language">

              <span>Lao</span>

              <b>Native</b>

              <i>
                <em style={{ width: "100%" }} />
              </i>

            </div>


            <div className="language">

              <span>Thai</span>

              <b>Good</b>

              <i>
                <em style={{ width: "85%" }} />
              </i>

            </div>


            <div className="language">

              <span>English</span>

              <b>Intermediate</b>

              <i>
                <em style={{ width: "65%" }} />
              </i>

            </div>

          </section>

        </div>




      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <span>
          ✉️ thasing436@gmail.com
        </span>

        <span>
          📞 020 5405 1605
        </span>

        <span>
          💻 github.com/khamsing5161
        </span>

        <strong>
          Available for Interview
        </strong>

      </footer>

    </main>
  );
}

export default Cv_me;