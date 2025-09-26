<script>
export default {
  name: 'NavBar'
}
</script>

<template> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Card.vue">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contatos</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <a class="navbar-brand">Portifólio - Alice P. da Silva</a>
    </div>
  </div>
</nav>
</template>

<style scoped>

* {
    font-family: cursive;
    scroll-behavior: smooth;
}
.navbar {
    background: #111;
    border-bottom: 1px solid #222;
    box-shadow: 0 0 12px rgba(0, 207, 255, 0.2);
}

.navbar .nav-link:hover, .navbar .nav-link:focus {
    color: #00CFFF !important;
    text-shadow: 0 0 8px #00CFFF;
}

</style>
