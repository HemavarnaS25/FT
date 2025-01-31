import React from "react";
import "./NormalExercise.css";

const NormalExercise = () => {
  return (
    <div className="exercise-container">
      <h1>Balanced Exercise Routine for Normal BMI</h1>
      <iframe
        src="https://www.youtube.com/embed/5BwlDW0CAuU?si=kFRw5S0iNy2_hVPE"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <p>The goal here is to maintain a healthy and active lifestyle.</p>

      <h3>Strength & Endurance</h3>
      <ul>
        <li>30 minutes of moderate exercise 5 times a week.</li>
        <li>Include strength training (weights, resistance bands).</li>
        <li>Mix in flexibility exercises like yoga.</li>
      </ul>

      <h3>Cardio & Fun Activities</h3>
      <p>Try fun activities like dancing, cycling, or hiking!</p>

      <h3>Recovery & Mindfulness</h3>
      <p>Prioritize sleep, hydration, and mental well-being.</p>
    </div>
  );
};

export default NormalExercise;
