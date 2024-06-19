import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MobileUIUX() {
  return (
    <div className="mobile-page">
      <Nav />{" "}
      <div
        className="three-mobile-mockups"
        style={{
          background: `url('${process.env.PUBLIC_URL}/3-mobile-mockups.png')`,
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="mobile-page-container">
        <div className="mobile-page-hero">
          <div className="mobile-hero-h1-p">
            <h1>CleanUp App Case Study</h1>
            <p>Event Sign-Up Screen UI</p>
          </div>

          <div className="timeline-role">
            <div className="timeline">
              <h2>TIMELINE</h2>
              <p>
                March 15, 2024 - March 16, 2024 {"("}1 day{")"}
              </p>
            </div>
            <div className="role">
              <h2>MY ROLE</h2>
              <p>Solo UI designer of a conceptual design</p>
            </div>
          </div>

          <div className="section-bar">
            <h2>THE PROBLEM</h2>
          </div>

          <div className="problem-container">
            <div className="problem-left">
              <h2>PROBLEM STATEMENT</h2>
              <p>
                Aspiring volunteers need an “Event Details” screen that
                encourages them to sign up for events in their communities
              </p>
            </div>
            <div className="problem-right">
              <img
                src="tired-woman.png"
                alt="tired woman illustration"
                className="mobile-info-right-bottom"
              />
            </div>
          </div>
        </div>{" "}
        <div className="section-bar">
          <h2>THE SOLUTION</h2>
        </div>
        <div className="solution-container">
          <div className="solution-top">
            <h2>SOLUTION</h2>
            <p>
              Design the UI based on key takeaways from the user interview that
              encourage them to want to RSVP
            </p>
          </div>
          <div className="solution-bottom">
            <ol>
              <li>
                The UI helps aspiring volunteers prepare for events quickly by
                viewing icons vs. bullet points or long sentences
              </li>
              <li>
                All necessary details about the event, including photos,
                location, date & time.
              </li>
              <li>
                The user can see a quick description and press “more” to read
                more details about the event.
              </li>
            </ol>
            <div className="solution-imgs">
              <img
                src="mobile-screen1.png"
                alt="mobile screen design"
                style={{
                  width: "25rem",
                }}
              />
              <img
                src="mobile-screen2.png"
                alt="mobile screen design"
                style={{ width: "25rem" }}
              />
            </div>
          </div>
        </div>
        <div className="section-bar">
          <h2>BACKGROUND</h2>
        </div>
        <div className="background-container">
          <div className="hypothesis">
            <h2>HYPOTHESIS</h2>
            <p>I assume that users will want the following features:</p>
          </div>
          <div className="hypothesis-lists">
            <ul>
              <li>Location</li>
              <li>Date & Time</li>
              <li>Event Description</li>
              <li>Photos</li>
            </ul>
          </div>
          <div className="business-goals">
            <h2>BUSINESS GOALS</h2>
            <p>
              Add features that get users to RSVP and use insights as benchmarks
              for growth
            </p>
          </div>
        </div>
        <div className="section-bar">
          <h2>RESEARCH METHODS</h2>
        </div>
        <div className="research-methods">
          <div className="research-methods-left">
            <div>
              <h2>USER INTERVIEW</h2>
              <p>
                I observed a user interview of Chelsea, an aspiring volunteer,
                and she expressed what she wanted to see in a volunteer
                event-locating app
              </p>
            </div>

            <div>
              <h2>QUESTIONS FROM THE LEAD RESEARCHER</h2>
              <ul>
                <li>
                  What information would you want to see on this screen to
                  decide if you would sign up for this event?
                </li>
                <li>
                  What steps would you take to find an event if you weren’t
                  available on the date provided?
                </li>
              </ul>
            </div>
          </div>
          <div className="research-methods-right">
            <img src="online-interview.png" alt="interview illustration" />
          </div>
        </div>{" "}
        <div className="section-bar">
          <h2>INSIGHTS</h2>
        </div>
        <div className="insights-container">
          <div className="insights-top">
            <h2>WHAT WILL I DO?</h2>
            <p>Feature ideas gathered from user research</p>
          </div>
          <div className="insights-middle">
            <ul>
              <li>
                <span className="price-tags">$10</span> Photos
              </li>
              <li>
                <span className="price-tags">$10</span> Date & Time
              </li>
              <li>
                <span className="price-tags">$10</span> Event Description
              </li>
              <li>
                <span className="price-tags">$10</span> 1 Minute Video
              </li>
              <li>
                <span className="price-tags">$10</span> Location
              </li>
            </ul>
            <div className="insights-bottom">
              <ul>
                <li>
                  <span className="price-tags">$10</span> Add to Calendar
                </li>
                <li>
                  <span className="price-tags">$10</span> Reviews from Other
                  Volunteers
                </li>
              </ul>{" "}
            </div>

            <ul>
              <li className="list-title">
                <strong>BONUS IDEAS*</strong>
              </li>
              <li>How to prepare</li>
              <li>
                If unavailable on provided date, are there other dates available
                within that organization?
              </li>
            </ul>
          </div>
          <p>*Unique ideas straight from the user</p>
        </div>
        <div className="section-bar">
          <h2>CONCEPTS</h2>
        </div>
        <div className="concepts-container">
          <div className="concepts-top">
            <h2>MINI DESIGN SYSTEM</h2>
            <ul>
              <li>Include carousel swipe components</li>
              <li>Color scheme will represent the heart of a volunteer</li>
              <li>
                Use icons (instead of bulleted lists) to process information
                quickly
              </li>
            </ul>
          </div>
          <div className="concepts-bottom">
            <div className="concepts-bottom-left">
              <p>The color scheme represents:</p>
              <ul>
                <li>Optimism</li>
                <li>Happiness</li>
                <li>Energy</li>
                <li>Friendliness</li>
                <li>Nature</li>
                <li>Growth</li>
                <li>Serenity</li>
              </ul>
              <p>
                {"("}Great values for a volunteering app{")"}
              </p>
            </div>
            <div className="concepts-bottom-middle">
              <img src="color-blocks.png" className="color scheme" />
            </div>
            <div className="concepts-bottom-right">
              <p>Icons versus bulleted lists</p>
              <div className="app-icons">
                <div>
                  <img src="sunglasses.png" alt="sunglasses icon" />
                </div>
                <div>
                  <img src="fork.png" alt="utensils icon" />
                </div>
                <div>
                  <img src="question-mark.png" alt="question mark icon" />
                </div>
              </div>
              <p>Icons are easier to process</p>
            </div>
          </div>
        </div>
        <div className="section-bar">
          <h2>ITERATIONS</h2>
        </div>
        <div className="iterations-container">
          <div className="iterations-left">
            <div className="iterations-left-top">
              <h2>SKETCHING</h2>
              <p>
                Here are two sketch iterations for CleanUp's Event Details
                screen design.
              </p>
            </div>
            <div className="iterations-left-bottom">
              <img src="yay-woman.png" alt="happy woman illustration" />
            </div>
          </div>
          <div className="iterations-right">
            <img src="sketch-iterations.png" alt="sktch iterations" />
            <p>Organized all features by importance</p>
          </div>
        </div>{" "}
        <div className="final-sketch">
          {" "}
          <img src="final-mobile-sketch.png" alt="final mobile sketch" />
        </div>
        <div className="wireframes">
          <div className="wireframes-top">
            <div>
              <h2>LOW & HIGH FIDELITY WIREFRAMES</h2>
              <h3>8pt grid system</h3>
            </div>
            <img src="8pt-boxes.png" alt="8pt box sizes" />
          </div>
          <div className="wireframes-bottom">
            <img src="lo-fi-grid.png" alt="low-fidelity wireframe" />
            <img src="hi-fi-grid.png" alt="high-fidelity wireframe" />
          </div>
        </div>{" "}
        <div className="section-bar">
          <h2>LEARNINGS & FUTURE ROADMAP</h2>
        </div>
        <div className="learnings-container-top">
          <div className="learnings-left">
            <div>
              <h2>COMPLETED INTERFACES</h2>
              <p>
                Figma Screen Flow {"("}scroll flow{")"}
              </p>
            </div>
            <ul>
              <li>
                The green <strong>date & time</strong> feature is a design
                pattern from the Meetup app. It’s a helpful addition to this
                screen since it places the date & time “front and center”
              </li>
              <li>
                The <strong>“tips on how to prepare”</strong> feature, gathered
                from Chelsea’s user interview, is designed as icons in instead
                of text since our brains process icons faster
              </li>
              <li>
                Linking directly to <strong>reviews</strong> (well above the
                fold), where the user can jump right to that section is another
                way to help them decide on signing up.
              </li>
            </ul>
          </div>
          <div className="learnings-right">
            <div className="learnings-right-a">
              <p>Above the fold</p>
              <img
                src="mobile-screen1.png"
                alt="mobile screen"
                style={{ width: "25rem" }}
              />
            </div>
            <div className="learnings-right-b">
              <p>Below the fold</p>
              <img
                src="mobile-screen2.png"
                alt="mobile screen"
                style={{ width: "25rem" }}
              />
            </div>
          </div>
        </div>
        <div className="learning-questions-container">
          <div className="learning-questions-left">
            <div>
              <h3>WHAT DID I LEARN?</h3>
              <ul>
                <li>
                  After initially hypothesizing what features the user might
                  want on the Event Details screen, I learned that I am not the
                  user. The user offers insights that may not have been thought
                  of by the designer alone.
                </li>
              </ul>
            </div>
            <div>
              <h3>HOW DO I SEE THIS PROJECT EVOLVING IN THE FUTURE?</h3>
              <ol>
                <li>
                  User test with a minimum viable product to see if this design
                  is effective
                </li>
                <li>
                  Conduct more user research, such as interviews or surveys, to
                  offer more insight into designing the remaining screens of the
                  CleanUp app
                </li>
              </ol>
            </div>
          </div>
          <div className="learning-questions-right">
            <div>
              <h3>WHAT WOULD I DO DIFFERENTLY?</h3>
              <ol>
                <li>Increase the white space and the font size</li>
                <li>Make the RSVP button fixed to the bottom of the screen</li>
              </ol>
              <img src="magnified-ui.png" alt="ui design zoom" />
            </div>
          </div>
        </div>
        <div className="future-steps">
          <div className="future-steps-top">
            <h3>
              WHAT STEPS WOULD I TAKE TO IMPROVE THE CLEANUP APP EXPERIENCE?
            </h3>
          </div>
          <div className="future-steps-bottom">
            <div className="future-steps-bottom-left">
              <img src="circle-1.png" alt="number 1" />
              <p>
                Conduct more user research, such as interviews or surveys, to
                offer more insight into designing the remaining screens of the
                CleanUp app
              </p>
              <img src="screen-flow-ex.png" alt="screen flow diagram" />
            </div>
            <div className="future-steps-bottom-right">
              <img src="circle-2.png" alt="number 2" />
              <p>
                I would like to test is the bonus feature, “How to Prepare”.{" "}
              </p>
              <p>
                Question: Are icons better than bulleted lists or vice versa?
              </p>
              <img src="ui-ex.png" alt="UI example" />
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="thank-you-container">
        <div className="ty-left">
          <div className="ty-left-top">
            <h1>Want to work on a project?</h1>
          </div>
          <div className="ty-left-bottom">
            <a href="mailto:aliau2050@gmail.com" className="nav-link">
              <div>
                <button className="primary-button">Contact me</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="linkedin-bar">
        <p>Say hi on: </p>
        <a
          href="https://linkedin.com/in/alishaupton"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <button>LinkedIn</button>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
