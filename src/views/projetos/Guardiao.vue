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
      <img src="@/assets/img/projetos/Guardiao.png" alt="Guardião de senhas" class="guardiao-img" />

      <div class="card guardiao-card">
        <div class="projeto-descricao">
    <h2>🔐 Guardião de Senhas</h2>
    <p>
      🧠 <strong>Guardião de Senhas</strong> é aquele amigo confiável que nunca esquece nada — mas guarda tudo com segurança.<br><br>
      Feito para proteger o que há de mais valioso no seu mundo digital, ele combina praticidade, design moderno e foco total em privacidade.<br><br>
      É um lembrete de que segurança também pode ser simples e bonita.<br><br>
      Com o Guardião de Senhas, você tem tranquilidade para focar no que importa, sabendo que seus segredos estão em boas mãos.
    </p>
  </div>
        <div class="btn-group">
          <a href="https://guardi-o-de-senhas-web.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online(Web)</a>
          <a href="https://github.com/AliceSilva56/Guardi-o-de-Senhas/releases/tag/Guardião-de-Senhas" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/Guardi-o-de-Senhas" target="_blank" class="btn btn-dark">Ver Repositório</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projeto-descricao {
  color: #ffffff;
  padding: 1rem;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.projeto-descricao h2 {
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.projeto-descricao p {
  color: #ffffff;
  margin: 0.25rem 0;
  white-space: pre-wrap;
}

/* Pequenas melhorias visuais para cards escuros */
.projeto-descricao strong {
  font-weight: 700;
}
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

/* layout */
.guardiao-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px;
}

/* Imagem */
.guardiao-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 12px #39FF14, 0 0 24px rgba(57, 255, 20, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.guardiao-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #39FF14, 0 0 40px rgba(57, 255, 20, 0.6);
}

/* Card */
.guardiao-card {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 24px;
  background: #111;
  border-radius: 16px;
  box-shadow: 0 0 16px #00CFFF44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.guardiao-card:hover {
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
  .guardiao-container {
    flex-direction: column;
    align-items: center;
  }

  .guardiao-card {
    width: 90%;
  }

  .guardiao-img {
    max-width: 80%;
  }
}
</style>
