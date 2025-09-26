<script>
export default {
  name: "Rodape"
}
</script>

<template>
  <footer class="rodape">
    <div class="rodape-container">
      <!-- Logo / Marca -->
      <div class="rodape-brand">
        <img src="@/assets/Alice.png" alt="Logo Alice Dev">
        <h2>Alice Dev</h2>
        <p>Construindo o futuro, um código por vez.</p>
      </div>

      <!-- Links -->
      <div class="rodape-links">
        <h3>Links Rápidos</h3>
        <ul>
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <!-- Contato -->
      <div class="rodape-contato">
        <h3>Contato</h3>
        <p>Email: <a href="mailto:alice.dev@email.com">alice.dev@email.com</a></p>
        <p>GitHub: <a href="https://github.com/">github.com/alice</a></p>
      </div>
    </div>

    <div class="rodape-bottom">
      <p>© 2025 Alice Dev | Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
  color: #000000ff;
  padding: 40px 20px 10px;
  border-top: 2px solid #00CFFF;
  box-shadow: 0 -4px 20px rgba(0, 207, 255, 0.3);
  font-family: "Segoe UI", sans-serif;
}

.rodape-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;
}

.rodape-brand {
  max-width: 250px;
}

.rodape-brand img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 0 12px rgba(57, 255, 20, 0.6);
}

.rodape-brand h2 {
  color: #55ab46ff;
  margin: 5px 0;
  font-size: 1.4rem;
  text-shadow: 0 0 8px #39FF14;
}

.rodape-brand p {
  font-size: 0.9rem;
  color: #000000ff;
}

.rodape-links h3,
.rodape-contato h3 {
  color: #00CFFF;
  margin-bottom: 12px;
  font-size: 1rem;
  text-shadow: 0 0 6px #00CFFF;
}
.rodape-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rodape-links li {
  margin: 6px 0;
}

.rodape-links a {
  text-decoration: none;
  color: #000000ff;
  transition: color 0.3s, text-shadow 0.3s;
}

.rodape-links a:hover {
  color: #39FF14;
  text-shadow: 0 0 6px #39FF14;
}

.rodape-contato p {
  margin: 6px 0;
  font-size: 0.9rem;
}

.rodape-contato a {
  color: #000000ff;
  text-decoration: none;
  transition: color 0.3s, text-shadow 0.3s;
}

.rodape-contato a:hover {
  color: #00CFFF;
  text-shadow: 0 0 6px #00CFFF;
}

.rodape-bottom {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid #222;
  font-size: 0.85rem;
  color: #000000ff;
}
</style>
