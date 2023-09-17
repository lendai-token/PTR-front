import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Home } from "./components/home";
import { Size } from "./components/size";
import { Confirmation } from "./components/confirmation";
import { MoveDate } from "./components/date";
import { DestCity } from "./components/destcity";
import { Name } from "./components/name";
import { Email } from "./components/email";
import { Phone } from "./components/phone";
import { Admin } from "./components/admin";
import { Login } from "./components/auth/login";
import { ProtectedRoute } from "./components/common";
import { Signup } from "./components/auth/signup";

function App() {
  return (
    <Provider store={store}>
      <div className="relative min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signup />} />
            <Route path="/size" element={<Size />} />
            <Route path="/date" element={<MoveDate />} />
            <Route path="/destination-city" element={<DestCity />} />
            <Route path="/name" element={<Name />} />
            <Route path="/email" element={<Email />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
