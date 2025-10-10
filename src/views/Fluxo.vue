<script>
export default {
  name: "Fluxo"
}
</script>

<template>
  <div class="fluxo-page">

    <!-- Botão voltar -->
    <div class="voltar-container">
      <router-link to="/" class="btn-voltar">⬅ Voltar</router-link>
    </div>

    <!-- Conteúdo -->
    <div class="fluxo-container">
      <img src="@/assets/img/Fluxo.png" alt="FluxoApp" class="fluxo-img" />

      <div class="card fluxo-card">
        <h2 class="card-title">FluxoApp 🚀</h2>
        <p class="card-text">
          Aplicativo de controle financeiro pessoal, com registro de gastos, gráficos dinâmicos, resumo de períodos e exportação em PDF. Focado em ajudar o usuário a equilibrar finanças de forma prática e visual.
        </p>
        <div class="btn-group">
          <a href="https://miauh-demo.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online</a>
          <a href="https://miauh-apk-link.com" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/miauh-timer" target="_blank" class="btn btn-dark">Ver Repositório</a>
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
.fluxo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 32px;
}

.fluxo-img {
  width: 450px;
  height: auto;
  border-radius: 16px;
}

.fluxo-card {
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


