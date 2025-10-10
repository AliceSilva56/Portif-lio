<script>
export default {
  name: 'NavBar'
}
</script>

<template> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <!-- Nome / Marca -->
    <a class="navbar-brand">Portfólio - Alice P. da Silva</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <!-- Home -->
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>

        <!-- Contatos -->
        <li class="nav-item">
          <router-link class="nav-link" to="/contatos">Contatos</router-link>
        </li>

        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mais
          </a>
          <ul class="dropdown-menu">

            <!-- Currículo -->
            <li>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="curriculo.pdf" download>
                📄 Currículo
                <button class="btn btn-sm btn-outline-primary ms-2">Baixar</button>
              </a>
            </li>

            <!-- Certificados -->
            <li>
              <router-link class="dropdown-item" to="/certificados">🎓 Certificados</router-link>
            </li>

            <!-- Blog / Artigos -->
            <li>
              <router-link class="dropdown-item" to="/blog">✍️ Blog / Artigos</router-link>
            </li>
          </ul>
        </li>
      </ul>
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
