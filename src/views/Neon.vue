<script>
export default {
  name: "Neon"
}
</script>

<template>
  <div class="neon-page">

    <!-- Botão voltar -->
    <div class="voltar-container">
      <router-link to="/" class="btn-voltar">⬅ Voltar</router-link>
    </div>

    <!-- Conteúdo -->
    <div class="neon-container">
      <img src="@/assets/img/Neon.png" alt="Neon code café" class="neon-img" />

      <div class="card neon-card">
        <h2 class="card-title">Neon Code Cafe ☕</h2>
        <p class="card-text">
          Website institucional com tema futurista, apresentando um cardápio criativo inspirado no mundo da programação. Layout neon, responsivo e envolvente, com elementos visuais modernos e imersivos.
        </p>
        <div class="btn-group">
          <a href="https://neon-code-cafe-1.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online</a>
          <a href="https://miauh-apk-link.com" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/neon-code-cafe" target="_blank" class="btn btn-dark">Ver Repositório</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.voltar-container {
  margin: 20px 0 10px 20px;
}

.btn-voltar {
  background: linear-gradient(90deg, #00CFFF, #1495ff);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: bold;
  color: #0d0d0d;
  text-decoration: none;
  transition: 0.3s;
}

.btn-voltar:hover {
  filter: brightness(1.2);
  box-shadow: 0 0 10px #00CFFF;
}

/* layout */
.neon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 32px;
}

.neon-img {
  width: 450px;
  height: auto;
  border-radius: 16px;
}

.neon-card {
  flex: 1;
  max-width: 1000px;
  padding: 24px;
  box-shadow: 0 2px 12px #00CFFF44;
  border-radius: 16px;
}

.card-title {
  color: #00CFFF;
  text-align: left;
  margin-bottom: 16px;
}
</style>
