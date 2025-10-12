<script>
export default {
  name: "Guardiao"
}
</script>

<template>
  <div class="guardiao-page">

    <!-- Botão voltar -->
    <div class="voltar-container">
      <router-link to="/" class="btn-voltar">⬅ Voltar</router-link>
    </div>

    <!-- Conteúdo -->
    <div class="guardiao-container">
      <img src="@/assets/img/Guardiao.png" alt="Guardião de senhas" class="guardiao-img" />

      <div class="card guardiao-card">
        <h2 class="card-title">Guardião de Senhas 🔐</h2>
        <p class="card-text">
         Aplicativo focado em armazenamento seguro de senhas. Permite organizar credenciais em pastas, proteger dados com criptografia e biometria, além de oferecer interface moderna no estilo Dark Tech. O app é totalmente em português e prioriza a segurança local sem depender de servidores externos.
        </p>
        <div class="btn-group">
          <a href="https://guardi-o-de-senhas-web.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online(Web)</a>
          <a href="https://miauh-apk-link.com" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/Guardi-o-de-Senhas" target="_blank" class="btn btn-dark">Ver Repositório</a>
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
.guardiao-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 32px;
}

.guardiao-img {
  width: 450px;
  height: auto;
  border-radius: 16px;
}

.guardiao-card {
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



