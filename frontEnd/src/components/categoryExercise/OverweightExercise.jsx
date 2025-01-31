import React from "react";
import './NormalExercise.css'
const OverweightExercise = () => {
  return (
    <body>
      <div className="exercise-container">
      <h1>Exercise Plan for Overweight Individuals</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KEhbYNmY3N4?si=R-UFSRGgLTTIk7Ej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p> The goal here is to move consistently and feel great!</p>
      <h3> Start with Gentle Movement</h3>
      <ul>
        <li>Brisk walking for 20-30 minutes daily.</li>
        <li>Low-impact exercises like swimming or cycling.</li>
        <li>Chair exercises or seated workouts for mobility.</li>
      </ul>
      <h3> Gradually Add Strength Training</h3>
      <p>Use resistance bands or light weights twice a week.</p>
      <h3>Make It Fun!</h3>
      <p>Try dance workouts, jump rope, or play your favorite music while exercising.</p>
      <h3> Listen to Your Body</h3>
      <p>Don't rush. Small, consistent efforts bring long-term results.</p>
    </div>
    </body>
  );
};
export default OverweightExercise;
