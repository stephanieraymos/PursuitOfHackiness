import React from "react";
import styled from "styled-components";

function Landing() {
  const GridWrapper = styled.div`
    display: grid;
    grid-gap: 15px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(25px, auto);
  `;

  return (
    <div>
      <GridWrapper>
        <div>
          <h1>About the game</h1>
          <p>
            This game was created to simulate the journey of someone entering
            into the world of a web developer.
          </p>
        
          <h1>How it works</h1>
          <p>
            INITIALIZATION: You'll start at home, deciding which language you'd
            like to learn. You can add more languages later in the game once
            you've grasped the main concepts of your current language or
            framework. You'll be asked some questions and given feedback for
            incorrect answers to help you understand. Once you pass
            initialization, your virtual self decides to take the next step and
            join a bootcamp. BOOTCAMP: The bootcamp in the game is inspired by a
            bootcamp I attended called NuCamp. Here you will have coding
            challenges along with more questions. CAREER CENTER: Here you can
            decide which languages or frameworks you want to move into your
            career. You'll create a basic resume (mostly prefilled with your
            avatars sign up information) and will begin to receive interview
            requests from employers. If you choose to accept an interview you
            will have a "Woom" call (inspired by zoom) to simulate a real
            interview. The interviewer will ask you questions. If you receive a
            passing score you get a job offer.
          </p>
        </div>
      </GridWrapper>
    </div>
  );
}

export default Landing;
