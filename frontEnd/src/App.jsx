import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/PageEntry/Dashboard";
import Bmi from "./components/PageDashboard/Bmi";
import Signup from "./components/PageEntry/Signup";
import Login from "./components/PageEntry/Login";
import Diet from "./components/PageDashboard/Diet";
import Exercise from "./components/PageDashboard/Exercise";
import NormalDiet from "./components/categoryDiet/NormalDiet";
import OverweightDiet from "./components/categoryDiet/OverweightDiet";
import UnderweightDiet from "./components/categoryDiet/UnderweightDiet";
import UnderweightExercise from "./components/categoryExercise/UnderweightExercise";
import NormalweightExercise from "./components/categoryExercise/NormalweightExercise";
import OverweightExercise from "./components/categoryExercise/OverweightExercise";
 import './styles.css';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
          {isLoggedIn && (
            <><Route path="/dashboard" element={<Dashboard userEmail={userEmail} />} />
              <Route path="/bmi" element={<Bmi />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/n-d" element={<NormalDiet />} />
              <Route path="/o-d" element={<OverweightDiet />} />
              <Route path="/u-d" element={<UnderweightDiet />} />
              <Route path="/n-e" element={<NormalweightExercise />} />
              <Route path="/o-e" element={<OverweightExercise />} />
              <Route path="/u-e" element={<UnderweightExercise />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
