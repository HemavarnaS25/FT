import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exercise.css"; 

const Exercise = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const calculateBmi = () => {
    setErrorMessage(""); 

    if (!weight || !height) {
      setErrorMessage("Please enter both weight and height.");
      return;
    }
    if (weight <= 0 || height <= 0) {
      setErrorMessage("Weight and height must be positive values.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiResult(bmiValue);
    setTimeout(() => {
      if (bmiValue < 18.5) {
        navigate("/u-e"); 
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        navigate("/n-e"); 
      } else {
        navigate("/o-e"); 
      }
    }, 3000); 
  };

  return (
    <div className="exercise-container">
      <h1>Welcome! Exercise Page</h1>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

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
      <button onClick={calculateBmi}>Get Exercise Plan</button>

      {bmiResult && (
        <div className="exercise-result">
          <h3>Your BMI: {bmiResult}</h3>
          <h4>Based on your BMI, a tailored exercise plan will be provided.</h4>
        </div>
      )}
    </div>
  );
};

export default Exercise;
