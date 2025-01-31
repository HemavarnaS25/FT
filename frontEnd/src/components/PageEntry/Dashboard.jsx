import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles.css';

const Dashboard = ({ userEmail }) => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <h1>Welcome, {userEmail}!</h1>
      <p>This is a website where you can track fitness, enhance your health, and achieve your wellness goals.</p>
      
      <div className="button-container">
        <button onClick={() => navigate("/bmi")}>BMI</button>
        <button onClick={() => navigate("/diet")}>Diet</button>
        <button onClick={() => navigate("/exercise")}>Exercise</button>
      </div>

      <div className="content-container">
        <div className="container">
          <h2>BMI</h2>
          <p>
            Body Mass Index (BMI) is a simple method to assess whether you're underweight, normal weight, overweight, or obese.
            Use our tool to calculate and track your BMI for a healthier lifestyle.
          </p>
        </div>
        
        <div className="container">
          <h2>Diet</h2>
          <p>
            A balanced diet is key to good health. We offer personalized meal plans based on your health goals and preferences.
            Start planning your diet and make healthier choices today!
          </p>
        </div>
        
        <div className="container">
          <h2>Exercise</h2>
          <p>
            Regular exercise is crucial for maintaining a healthy body and mind. Explore our workout plans for various fitness levels
            and achieve your fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
