import React from "react";
import molly from "./molly.jpg";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="aboutMe">
          <div className="row">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={molly}
                className="imag-fluid"
                alt=""
                width={425}
                height={300}
                mode="fit"
              />
            </div>
            <div className="col-md-6">
              <p>
                I am fairly new to web development, just starting my journey in
                May 2020. Although I have no background experience I approach
                every learning opportunity head on with an open mind to gain
                progression. I have a Bachelors degree in Exercise Science and
                leverage an experienced background in customer service. I have
                recently graduated from a Full Stack Web Development bootcamp
                through Uconn October 2020 where I was introduced to skills for
                JavaScript, CSS, Node.js, React.js, Mysql, nosql and responsive
                web design.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                I've quickly begun exploring more indepth what can be done
                within the world of Web Development and beyond. At the moment I
                have an internship with <b>TN Integrated Solutions</b>. This
                internship has helped me discover that i enjoy writing tests for
                functions and solving any problems or puzzles our code reveals.
                From this opportunity I have alreayd begun to expand my
                knowledge. I have been apart of numerous projects developing and
                designing websites for clients as well as writing tests in
                PHPUnit to write more effiecient code as well as debug. I am
                hoping to learn more about the freelance opportunities, servers,
                managing databases, testing code and using other languages as
                well for development.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                I am also a tutor for 2U Trilogy Ed for students who went
                through the same bootcamp I completed. This gives me the
                opportunity to not only give back but to rehearse the skills I
                have learned. It's very satisfying to guide someone and see them
                fully grasp a concept they were struggling with previously.
                Coming from a background with no experience within this field I
                always like to remind students as well as myself that they're
                doing a great job and it takes a lot of work but it's worth it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
