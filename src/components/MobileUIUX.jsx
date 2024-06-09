import React from "react";
import Nav from "./Nav";

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
          <p>Before we dive in, here's a chance to see the mini prototype.</p>
        </div>
        <div>
          <button className="primary-button">See all six</button>
        </div>
        <div className="final-mobile-screens">
          <img src="cleanup-event-screen1.png" alt="mobile screen design" />
          <img src="cleanup-event-screen2.png" alt="mobile screen design" />
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
            <img src="cleanup-event-screen1.png" alt="mobile mockup" />
          </div>
        </div>
        <div>
          <p>BACKGROUND</p>
        </div>
        <div>
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
      </div>
    </div>
  );
}
