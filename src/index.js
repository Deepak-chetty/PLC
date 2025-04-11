import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Chatbot from "./components/Chatbot/Chatbot";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Quiz from "./components/Quiz/Quiz";
import Dashboard from "./components/Quiz/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatBot" element={<Chatbot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='*' element = {<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
