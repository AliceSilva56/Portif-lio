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

    <!-- Botão hamburger para telas pequenas -->
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links do menu -->
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
              <router-link class="dropdown-item" to="/curriculo-view">📄 Currículo</router-link>
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

.navbar .nav-link:hover, 
.navbar .nav-link:focus {
    color: #00CFFF !important;
    text-shadow: 0 0 8px #00CFFF;
}

/* Personaliza o ícone hamburger */
.navbar-toggler {
    border-color: #00CFFF;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 207, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/ %3E%3C/svg%3E");
}
</style>
