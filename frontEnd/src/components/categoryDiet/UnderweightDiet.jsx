import React from "react";
import './NormalDiet.css'
const UnderweightDiet = () => {
  return (
    <div className="diet-container">
         <h1>Diet Plan for Underweight Individuals</h1>
      <img 
        src="Underweight-diet.jpg" 
        alt="Healthy balanced diet" 
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
      <ul>
        <li>Eat more calorie-dense foods like nuts, avocados, and dairy.</li>
        <li>Increase protein intake with eggs, chicken, and lentils.</li>
        <li>Consume healthy fats like olive oil and peanut butter.</li>
        <li>Have frequent meals and snacks.</li>
        <li>Stay hydrated and include smoothies or milkshakes.</li>
      </ul>
    </div>
    
  );
};
export default UnderweightDiet;
