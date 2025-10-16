<script>
export default {
  name: "Neon"
}
</script>

<template>
  <div class="aly-page">

    <!-- Botão voltar -->
    <div class="voltar-container">
      <router-link to="/card" class="btn-voltar">⬅ Voltar</router-link>
    </div>

    <!-- Conteúdo -->
    <div class="aly-container">
      <img src="@/assets/img/projetos/Neon.png" alt="Neon Code Café" class="aly-img" />

      <div class="card aly-card">
        <h2 class="card-title">Neon Code Cafe ☕</h2>
        <p class="card-text">
          Website institucional com tema futurista, apresentando um cardápio criativo inspirado no mundo da programação. Layout neon, responsivo e envolvente, com elementos visuais modernos e imersivos.
        </p>

        <div class="btn-group">
          <a href="https://neon-code-cafe-1.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online</a>
          <a href="https://neon-code-cafe-1.vercel.app" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/Neon-Code-Cafe" target="_blank" class="btn btn-dark">Ver Repositório</a>
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
  background: linear-gradient(90deg, #00CFFF, #39FF14);
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
  box-shadow: 0 0 12px #00CFFF, 0 0 24px rgba(0, 207, 255, 0.5);
}

/* Layout principal */
.aly-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px;
  margin-bottom: 150px;
}

/* Imagem */
.aly-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 12px #39FF14, 0 0 24px rgba(57, 255, 20, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aly-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #39FF14, 0 0 40px rgba(57, 255, 20, 0.6);
}

/* Card */
.aly-card {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 24px;
  background: #111;
  border-radius: 16px;
  box-shadow: 0 0 16px #00CFFF44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aly-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 24px #00CFFF, 0 0 48px rgba(0, 207, 255, 0.4);
}

.card-title {
  color: #00CFFF;
  margin-bottom: 16px;
  text-shadow: 0 0 8px #00CFFF;
}

.card-text {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Botões do card */
.btn-group a {
  margin-right: 10px;
  transition: 0.3s;
}

.btn-group a:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #00CFFF, 0 0 24px rgba(0, 207, 255, 0.4);
}

/* Responsividade */
@media (max-width: 768px) {
  .aly-container {
    flex-direction: column;
    align-items: center;
  }

  .aly-card {
    width: 90%;
  }

  .aly-img {
    max-width: 80%;
  }
}
</style>
