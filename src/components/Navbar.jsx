import React from "react";
import "../css/Navbar.css"

function Navbar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><i class="fas fa-award"></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><b>6 Suggestions </b><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item sort">
        <a class="nav-link" href="#">Sort by:</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Most Upvotes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">A Dropdown!</a>
          <a class="dropdown-item" href="#">I Presume</a>
        </div>
      </li>
    </ul>
    <button class="btn btn my-2 my-sm-0 ml-auto" type="submit"><i class="fa fa-plus pr-2" aria-hidden="true"></i>Add Feedback </button>
  </div>
</nav>
        </div>
    )
}

export default Navbar