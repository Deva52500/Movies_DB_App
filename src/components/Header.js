import React from 'react'

const Header = ({popularMovies, topMovies, upcomingMovies, searchValue}) => {

  const searchMovie = ()=>{
    let input= document.getElementById('text_field').value;
    searchValue(input);
    input=''

  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MoviesDB</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=> popularMovies()}>Popular </button>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=> topMovies()}>Top-rated</button>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=> upcomingMovies()}>Recent</button>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" id="text_field" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={searchMovie}>Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header
