<script>
export default {
  name: "Costura"
}
</script>

<template>
  <div class="costura-page">

    <!-- Botão voltar -->
    <div class="voltar-container">
      <router-link to="/card" class="btn-voltar">⬅ Voltar</router-link>
    </div>

    <!-- Conteúdo -->
    <div class="costura-container">
      <img src="@/assets/img/projetos/Costura.png" alt="Costura Certa" class="costura-img" />

      <div class="card costura-card">
        <h2 class="card-title">Costura Certa ✂️</h2>
        <p class="card-text">
          Aplicativo em desenvolvimento voltado para gestão de pedidos de costura, permitindo cadastrar medidas, acompanhar pedidos e controlar parte financeira. Interface simples, organizada e com recursos de backup.
        </p>

        <div class="btn-group">
          <a href="https://costura-certa-web.vercel.app/" target="_blank" class="btn btn-primary">Ver Demo Online</a>
          <a href="https://github.com/AliceSilva56/Costura-Certa/releases/tag/Costura-Certa" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/costura-certa" target="_blank" class="btn btn-dark">Ver Repositório</a>
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
.costura-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px;
}

/* Imagem */
.costura-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 12px #39FF14, 0 0 24px rgba(57, 255, 20, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.costura-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #39FF14, 0 0 40px rgba(57, 255, 20, 0.6);
}

/* Card */
.costura-card {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 24px;
  background: #111;
  border-radius: 16px;
  box-shadow: 0 0 16px #00CFFF44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.costura-card:hover {
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
  .costura-container {
    flex-direction: column;
    align-items: center;
  }

  .costura-card {
    width: 90%;
  }

  .costura-img {
    max-width: 80%;
  }
}
</style>
