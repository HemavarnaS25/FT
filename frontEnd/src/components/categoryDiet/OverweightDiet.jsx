import React from "react";
import './NormalDiet.css'
const OverweightDiet = () => {
  return (
  <body>
      <div className="diet-container">   
      <h1>Diet Plan for Overweight Individuals</h1>
      <img 
        src="./src/assets/Overweight-diet.webp" 
        alt="Healthy balanced diet" 
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
      <ul>
        <li>Reduce sugar and refined carbs.</li>
        <li>Increase fiber intake with fruits, vegetables, and whole grains.</li>
        <li>Consume lean proteins like fish, tofu, and legumes.</li>
        <li>Drink plenty of water and avoid sugary drinks.</li>
        <li>Control portion sizes and avoid late-night snacking.</li>
      </ul>
    </div>
  </body>
  );
};
export default OverweightDiet;
