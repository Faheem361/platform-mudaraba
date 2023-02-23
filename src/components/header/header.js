import React from 'react'
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='container-fluid'>
<nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand " href="#"><img src={logo}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="">
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">BluePrint</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/roadmap">Roadmap</Link>
                  {/* <a  href="#">p</a> */}
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">lore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">syndicate</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">about</a>
                </li>

              </ul>


              <button class="btn btn-mint me-2 text-white" >Mint</button>

            </div>

          </div>
        </div>

      </nav>

    </div>
  )
}

export default Navbar