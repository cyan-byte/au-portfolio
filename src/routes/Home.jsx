import React from "react";
import NavHome from "../components/NavHome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavHome />
      <div className="flex-container">
        <div className="home-left">
          <img
            src="wall-avatar.png"
            alt="slatted wall and avatar illustration"
          />
        </div>
        <div className="home-right">
          <p className="intro-paragraph font-link2">
            <span className="greeting font-link1">Hi, I'm Alisha.</span>
            <br />
            I'd like to share some of my most
            <br /> recent projects with you.
            <br />
            Let's take a look:
          </p>
          <p className="projects-bar">PROJECTS</p>
          <div className="scroll-text-and-icon">
            <p>
              <span className="scroll">scroll down</span>
            </p>
            <img src="/scroll-down-arrow.png" alt="down arrow icon" />
          </div>
        </div>
      </div>
      <div className="home-ux-section">
        {/* UX Left */}
        <div className="home-ux-top">
          <div className="home-ux-left">
            <div className="screenshot-bg">
              <Link to="/uxquiz">
                <img
                  src="screenshot9.png"
                  alt="ux-game-screenshot"
                  className="img-bg"
                />
              </Link>
            </div>
            <h3 className="font-link1">
              <Link to="/uxquiz">UX/UI Design Quiz Game</Link>{" "}
            </h3>
            <p className="home-ux-paragraph font-link1">
              I’ve been studying UX/UI design and after absorbing categories of
              information, I wondered if there was a game that would help to
              reinforce the concepts. Because I didn’t find one, I created one.
              This was my first project as a student of Per Scholas’ Software
              Engineering intensive.
            </p>
          </div>

          {/* UX Right */}
          <div className="home-ux-right">
            <div className="screenshot-bg">
              <Link to="/uxquiz">
                <img
                  src="screenshot10.png"
                  alt="ux-game-screenshot"
                  className="img-bg"
                />
              </Link>
            </div>
            <div>
              <h3 className="font-link1">
                <Link to="/uxquiz">Take a Peek Inside of Round 1</Link>
              </h3>
              <p className="home-ux-paragraph font-link1">
                So here’s how the game goes: The computer always answers
                correctly. Player may only answer 2 questions incorrectly for
                each round of the game, else the game will reset back to round
                1. As each level is passed, a new one opens up on the menu
                screen.
              </p>
            </div>
          </div>
        </div>
        <div className="home-project-link">
          <div>
            By the way, you can play it here:
            <span className="game-link">
              <a
                href="https://cyan-byte.github.io/ux-design-game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UX/UI Design Quiz
              </a>
            </span>
          </div>
          <p>
            <a
              href="https://github.com/cyan-byte/ux-design-game/"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="home-asl-section">
        <Link to="/asldictionary">
          <img
            src="screenshot5.png"
            alt="ASL dictionary screenshot"
            className="home-asl-image"
          />
        </Link>
        <div className="home-asl-text">
          <h3>
            <Link to="/asldictionary">ASL Dictionary App</Link>
          </h3>
          <p>
            I wanted to create an ASL (American Sign Language) app that uses the
            GIPHY API to allow users to enter a search term and see a GIF of an
            ASL sign. It’s designed to search one Giphy user’s channel
            (@signwithrobert) and deliver all possible results.
          </p>
        </div>
        <div className="home-project-link">
          Try it out here:{" "}
          <span className="game-link">
            <a
              href="https://cyan-byte.github.io/asl-react-dictionary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              American Sign Language Dictionary
            </a>
          </span>
        </div>
        <p>
          <a
            href="https://github.com/cyan-byte/asl-react-dictionary"
            target="_blank"
          >
            GitHub Repo
          </a>
        </p>
      </div>
      <div className="home-artisan-section">
        <div className="home-artisan-top">
          <h3>
            <Link to="/artisanstore">Artisan E-Commerce App</Link>
          </h3>
          <p>
            Introducing Talon. This is the UI of a store made using MERN
            (MongoDB, Express.js, React.js, Node.js). I built an API for it that
            holds details about each product, along with product images. It’s
            all stored in MongoDB. As I complete this app, it will have CRUD
            functionality for adding, updating and removing items from the cart.
            Stay tuned . . .
          </p>
        </div>
        <div className="home-artisan-middle">
          <div className="home-artisan-middle-left">
            <Link to="/artisanstore">
              <img src="screenshot1.png" alt="artisan store screenshot" />
            </Link>
            <p>
              Here’s a shot of the top of the homepage and as you scroll, the
              oversized logo appears normally in the top left corner.
            </p>
          </div>
          <div className="home-artisan-middle-right">
            <Link to="/artisanstore">
              <img src="screenshot3.png" alt="artisan store screenshot" />
            </Link>
            <p>A little more of what you’ll see as you scroll . . .</p>
          </div>
        </div>
        <div className="home-artisan-bottom">
          <div className="home-artisan-bottom-left">
            <Link to="/artisanstore">
              <img src="screenshot4.png" alt="artisan store screenshot" />
            </Link>
          </div>
          <p>
            This is a shot of the product page template, which repeats the style
            of the fun, oversized text which displays the product name.
          </p>
        </div>
        <div className="home-project-link">
          Take a look at Talon here:
          <span className="game-link talon-link">
            {" "}
            <a
              href="https://modern-e-commerce-store-front-end-1-1.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artisan E-Commerce Store
            </a>
          </span>
        </div>
        <p>
          <a
            href="https://github.com/cyan-byte/modern-e-commerce-store-front-end/tree/master"
            target="_blank"
          >
            Front-End GitHub Repo,{" "}
          </a>
          <a
            href="https://github.com/cyan-byte/modern-e-commerce-store-back-end"
            target="_blank"
          >
            Back-End GitHub Repo
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
