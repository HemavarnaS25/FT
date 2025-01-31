import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Diet.css";

const Diet = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const navigate = useNavigate();

  const calculateBmi = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height.");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    if (bmiValue < 18.5) {
      navigate("/u-d");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      navigate("/n-d");
    } else {
      navigate("/o-d");
    }
  };

  return (
    <div className="diet-container">
        <h1>Welcome to the Diet Page</h1>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBmi}>Get Diet Plan</button>
      </div>
  );
};

export default Diet;
