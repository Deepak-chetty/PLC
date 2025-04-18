import React from "react";

function Topbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            PLC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/Chatbot">
                ChatBot
              </a>
              <a class="nav-link" href="/Quiz">
                Quiz
              </a>
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Topbar;
