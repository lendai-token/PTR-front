import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Home } from "./components/home";
import { Signin } from "./components/auth/signin";
import { Signup } from "./components/auth/signup";
import { CreateUserOne } from "./components/create_user_one";
import { CreateUserTwo } from "./components/create_user_two";
import { CreateUserThree } from "./components/create_user_three";
import { CreateUserFour } from "./components/create_user_four";
import { CreateUserFive } from "./components/create_user_five";
import { CreateUserFinal } from "./components/create_user_final";
import { Pricing } from "./components/pricing";
import { EmpSignin } from "./components/auth/emp-signin";
import { EmpSignup } from "./components/auth/emp-signup";
import { EmpCard } from "./components/auth/emp-card";
import { CreateEmployer } from "./components/create_employer";
import { JobOpen } from "./components/job_open";
import { Management } from "./components/management";

function App() {
  return (
    <Provider store={store}>
      <div className="relative min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-user/step1" element={<CreateUserOne />} />
            <Route path="/create-user/step2" element={<CreateUserTwo />} />
            <Route path="/create-user/step3" element={<CreateUserThree />} />
            <Route path="/create-user/step4" element={<CreateUserFour />} />
            <Route path="/create-user/step5" element={<CreateUserFive />} />
            <Route path="/create-user/final" element={<CreateUserFinal />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/emp/signin" element={<EmpSignin />} />
            <Route path="/emp/signup" element={<EmpSignup />} />
            <Route path="/emp/card" element={<EmpCard />} />
            <Route path="/create-employer" element={<CreateEmployer />} />
            <Route path="/job/open" element={<JobOpen />} />
            <Route path="/job/management" element={<Management />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
