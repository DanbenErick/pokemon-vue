<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="container">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Pokemon</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/favoritos">Favoritos</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
