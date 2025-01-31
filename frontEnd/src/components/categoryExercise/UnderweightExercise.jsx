import React from "react";
import './NormalExercise.css'
const UnderweightExercise = () => {
  return (
    <body>
      <div className ="exercise-container">
      <h1>Exercise Plan for Underweight Individuals</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/2tM1LFFxeKg?si=I2LG_TkXn8oxNQQq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p> The goal here is to build strength and muscle mass gradually.</p>
      <h3>Strength Training</h3>
      <ul>
        <li>Start with bodyweight exercises like push-ups and squats.</li>
        <li>Use light weights and gradually increase.</li>
        <li>Do resistance training 3-4 times a week.</li>
      </ul>

      <h3>Combine Exercise with Diet</h3>
      <p>Make sure you are eating enough protein and calories to support muscle growth.</p>

      <h3> Keep Moving</h3>
      <p>Avoid excessive cardio. Instead, focus on walking and light jogging.</p>
    </div>
    </body>
  );
};

export default UnderweightExercise;
