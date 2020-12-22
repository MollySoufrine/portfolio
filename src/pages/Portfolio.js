import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="container">
        <div className="myPortfolio">
          <div className="row">
            <div className="col">
              <h2>My Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>
                With my time spent in this bootcamp I have learned how to use
                HTML, CSS, Javascript, Node and Express.js, React.js, MongoDB,
                MySQL and API's. My github account{" "}
                <a href="https://github.com/MollySoufrine?tab=repositories">
                  MollySoufrine
                </a>{" "}
                , has all of my repos for the class activities, homework
                assignemts, projects and outside class work I have completed. As
                far as work done outside the class room, I have tried to find
                projects online either by following videos on youtube or written
                instructions from an information website or course from udemy.
                Udemy was first suggested to me to better my skills with
                JavaScript and it has helped tremendously. I've realized within
                this industry so much changes that it is important to continue
                practcing your skills while learning more.
              </p>
            </div>

            <div className="col-md-4">
              <p>
                One assignment I enjoyed was a{" "}
                <a href="https://github.com/MollySoufrine/noteTaker">
                  Note Take
                </a>{" "}
                that required us to use JS express and node. At first I had a
                challenging time with this assignment as I didnt fully
                understand routes at the beginning but with time I have
                developed a better grasp on their importance. The function of
                this assignment is to be able to write a title for your todo or
                note, write your note and be able to save it. Once you have
                saved it, you could cross it off once it is completed or even
                delete it.
              </p>
            </div>
            <div className="col-md-4">
              <p>
                For my internship with TN Integrations we use Gitlab to store
                our repositories, however, they are all private. Our most recent
                project though has taught me about PHPunit testing and I'm
                excited to become more involved with testing code. My mentor has
                developed a program for a local restaurant to have multiple
                subscriptions for weekly meals where customers can add on food
                items or skip a week. They can be picked up or delivered and the
                subscribers delivery date is calculated based on their zip code
                within two counties. For this project I have been actively
                creating data providers to test a few of our functions. A few
                examples of tests and data providers I have made are checking
                whether an order for add-ons has been placed before or after the
                cutoff date, creating a customer and order to then be able to
                test other subscriptions and shipping functions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
