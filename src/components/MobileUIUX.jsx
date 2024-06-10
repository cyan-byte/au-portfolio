import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MobileUIUX() {
  return (
    <div className="mobile-uiux">
      <Nav />
      <div className="mobile-uiux-container">
        <div className="mobile-h1-and-p">
          <h1>
            CleanUp App
            <br />
            Case Study
          </h1>
          <p>
            Before we dive in, here’s an opportunity to see the Figma prototype.
          </p>
        </div>
        <div>
          <button className="primary-button">See all six</button>
        </div>
        <div className="final-mobile-screens">
          <img src="mobile-screen1.png" alt="mobile screen design" />
          <img src="mobile-screen2.png" alt="mobile screen design" />
        </div>
        <div className="mobile-info-container">
          <div className="mobile-info-left">
            <div className="mobile-info-left-top">
              <h2>TIMELINE</h2>
              <ul>
                <li>
                  March 15, 2024 - March 16, 2024 {"("}1 day{")"}
                </li>
              </ul>
            </div>
            <div className="mobile-info-left-bottom">
              <h2>PROBLEM STATEMENT</h2>
              <p>
                Aspiring volunteers need an “Event Details” screen that
                encourages them to sign up for events in their communities
              </p>
            </div>
          </div>
          <div className="mobile-info-right">
            <div className="mobile-info-right-top">
              <h2>MY ROLE</h2>
              <ul>
                <li>Solo UI designer of a conceptual design</li>
              </ul>
            </div>
            <img
              src="tired-woman.png"
              alt="tired woman illustration"
              className="mobile-info-right-bottom"
            />
          </div>
        </div>
        <div className="solution">
          <div className="solution-top">
            <h2>THE SOLUTION</h2>
            <p>
              Design the UI based on key takeaways from the user interview that
              encourage them toe want to RSVP
            </p>
          </div>
          <div className="solution-bottom">
            <ul>
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
            </ul>
            <img src="mobile-screen1.png" alt="mobile mockup" />
          </div>
        </div>
        <div>
          <p>BACKGROUND</p>
        </div>
        <div className="hypothesis">
          <h2>HYPOTHESIS</h2>
          <p>I assume that users will want the following features:</p>
          <div className="hypothesis-lists">
            <ul>
              <li>Location</li>
              <li>Date & Time</li>
              <li>Event Description</li>
              <li>Photos</li>
            </ul>
          </div>
          <div className="business-goals">
            <div className="business-goals-left">
              <div className="business-goals-left-top">
                <h2>BUSINESS GOALS</h2>
                <p>
                  Add features that get users to RSVP and use insights as
                  benchmarks for growth
                </p>
              </div>
              <div className="business-goals-left-bottom">
                <p>INSIGHTS</p>
              </div>
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
            <div className="business-goals-right">
              <img src="online-interview.png" alt="interview illustration" />
            </div>
          </div>
        </div>
        <div className="insights">
          <div className="bar-divider">
            <h2>INSIGHTS</h2>
          </div>
          <div className="insights-top">
            <h2>WHAT WILL I DO?</h2>
            <p>Feature ideas gathered from user research</p>
          </div>
          <div className="insights-bottom-left">
            <ul>
              <li>
                <span className="price-tags">$10</span>Photos
              </li>
              <li>
                <span className="price-tags">$10</span>Date & Time
              </li>
              <li>
                <span className="price-tags">$10</span>Event Description
              </li>
              <li>
                <span className="price-tags">$10</span>1 Minute Video
              </li>
              <li>
                <span className="price-tags">$10</span>Location
              </li>
            </ul>
            <div className="insights-bottom-right">
              <ul>
                <li>
                  <span className="price-tags">$10</span>Add to Calendar
                </li>
                <li>
                  <span className="price-tags">$10</span>Reviews from Other
                  Volunteers
                </li>
              </ul>
              <ul>
                <li className="list-title">BONUS IDEAS*</li>
                <li>How to prepare</li>
                <li>
                  If unavailable on provided date, are there other dates
                  available within that organization?
                </li>
              </ul>
            </div>
            <p>*Unique ideas straight from the user</p>
          </div>
        </div>
        <div className="bar-divider">
          <h2>CONCEPTS</h2>
        </div>
        <div className="concepts">
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
              <ul>
                <li className="list-title">The color scheme represents:</li>
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
            <div className="concpts-bottom-right">
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
                <p>Icons are easier to process</p>
              </div>
            </div>
          </div>
        </div>
        <div className="iterations">
          <div className="bar-divider">
            <h2>ITERATIONS</h2>
          </div>
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
            <p>Oragnized all features by importance</p>
          </div>
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
        </div>

        <div className="learnings">
          <div className="bar-divider">
            <h2>LEARNINGS & FUTURE ROADMAP</h2>
          </div>
          <div className="learnings-left">
            <div>
              <h2>HIGH-FIDELITY INTERFACES</h2>
              <p>
                Figma Screen Flow {"("}scroll flow{")"}
              </p>
            </div>
            <ul>
              <li>
                The green date & time feature is a design pattern from the
                Meetup app. It’s a helpful addition to this screen since it
                places the date & time “front and center”
              </li>
              <li>
                The “tips on how to prepare” feature, gathered from Chelsea’s
                user interview, is designed as icons in instead of text since
                our brains process icons faster
              </li>
              <li>
                Linking directly to reviews (well above the fold), where the
                user can jump right to that section is another way to help them
                decide on signing up.
              </li>
            </ul>
          </div>
          <div className="learnings-right">
            <div className="learnings-right-a">
              <p>Above the fold</p>
              <img src="mobile-screen1.png" alt="mobile screen" />
            </div>
            <div className="learnings-right-b">
              <p>Below the fold</p>
              <img src="mobile-screen2.png" alt="mobile screen" />
            </div>
          </div>
          <div className="learnings2-left">
            <div className="learnings2-top">
              <h3>WHAT DID I LEARN?</h3>
              <p>
                After initially hypothesizing what features the user might want
                on the Event Details screen, I learned that I am not the user.
                The user offers insights that may not have been thought of by
                the designer alone.
              </p>
            </div>
            <div className="learnings2-bottom">
              <h3>HOW DO I SEE THIS PROJECT EVOLVING IN THE FUTURE?</h3>
              <ul>
                <li>
                  User test with a minimum viable product to see if this design
                  is effective
                </li>
                <li>
                  Conduct more user research, such as interviews or surveys, to
                  offer more insight into designing the remaining screens of the
                  CleanUp app
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>WHAT WOULD I DO DIFFERENTLY?</h3>
            <ul>
              <li>Increase the white space and the font size</li>
              <li>Make the RSVP button fixed to the bottom of the screen</li>
            </ul>
          </div>
          <div className="learnings3">
            <div className="learnings3-top">
              <h3>
                What steps would I take to improve the CleanUp app experience?
              </h3>
            </div>
            <div className="learnings3-bottom">
              <div className="learnings3-bottom-left">
                <img src="circle-1.png" alt="number 1" />
                <p>
                  Conduct more user research, such as interviews or surveys, to
                  offer more insight into designing the remaining screens of the
                  CleanUp app
                </p>
                <img src="screen-flow-ex.png" alt="screen flow diagram" />
              </div>
              <div className="learnings3-bottom-right">
                <img src="circle-2.png" alt="number 2" />
                <p>
                  I would like to test is the bonus feature, “How to Prepare”.{" "}
                </p>
                <p>
                  Question: Are icons better than bulleted lists or vice versa?
                </p>
                <img src="ui-ex.png" alt="UI example" />
              </div>
            </div>
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
    </div>
  );
}
