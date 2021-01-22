import React from "react";
import styled from "styled-components";

function Landing() {
  const GridWrapper = styled.div`
    display: grid;
    margin-top: 1em;
    margin-left: 2.5em;
    margin-right: 2.5em;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(25px, auto);

    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  return (
    <div>
      <GridWrapper>
        <div>
          <h1 className="land-headings">About the game</h1>
          <p>
            Pursuit of Hackiness was created to simulate the journey of a Web
            Developer. The game begins as your character decides their learning
            path, and ends with them landing a job if they're ready.
          </p>
          <h1 className="land-headings">How it works</h1>
          <h5 className="p-top">INITIALIZATION</h5>
          <p>
            You'll start at home, deciding which language you'd like to learn.
            You can add more languages later in the game once you've grasped the
            main concepts of your current language or framework. You'll be asked
            some questions and given feedback for incorrect answers to help you
            understand. Once you pass initialization, your virtual self decides
            to take the next step and join a bootcamp. BOOTCAMP: The bootcamp in
            the game is inspired by a bootcamp I attended called NuCamp. Here
            you will have coding challenges along with more questions. CAREER
            CENTER: Here you can decide which languages or frameworks you want
            to move into your career. You'll create a basic resume (mostly
            prefilled with your avatars sign up information) and will begin to
            receive interview requests from employers. If you choose to accept
            an interview you will have a "Woom" call (inspired by zoom) to
            simulate a real interview. The interviewer will ask you questions.
            If you receive a passing score you get a job offer.
          </p>
        </div>
      </GridWrapper>
    </div>
  );
}

export default Landing;
