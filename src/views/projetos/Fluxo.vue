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
      <img src="@/assets/img/projetos/Fluxo.png" alt="FluxoApp" class="fluxo-img" />

      <div class="card fluxo-card">
        <div class="projeto-descricao">
    <h2>💸 FluxoApp</h2>
    <p>
      💰 <strong>FluxoApp</strong> é o espaço onde controle e liberdade se encontram.<br><br>
      Criado para quem quer entender o próprio dinheiro sem perder a leveza do dia a dia, ele mostra que cuidar das finanças pode ser simples, bonito e até inspirador.<br><br>
      Aqui, cada detalhe — dos gráficos ao design — foi pensado para te ajudar a visualizar seu progresso e celebrar suas conquistas.<br><br>
      O FluxoApp não é só sobre números, mas sobre histórias: a de cada meta alcançada, cada sonho realizado e cada novo começo financeiro.
    </p>
  </div>

        <div class="btn-group">
          <a href="https://fluxo-app-web-42dm.vercel.app" target="_blank" class="btn btn-primary">Ver Demo Online</a>
          <a href="https://github.com/AliceSilva56/FluxoApp/releases/tag/FluxoApp" target="_blank" class="btn btn-success">Baixar APK</a>
          <a href="https://github.com/AliceSilva56/fluxoapp" target="_blank" class="btn btn-dark">Ver Repositório</a>
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

/* Layout principal */
.fluxo-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px;
}

/* Imagem */
.fluxo-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 12px #39FF14, 0 0 24px rgba(57, 255, 20, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fluxo-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #39FF14, 0 0 40px rgba(57, 255, 20, 0.6);
}

/* Card */
.fluxo-card {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 24px;
  background: #111;
  border-radius: 16px;
  box-shadow: 0 0 16px #00CFFF44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fluxo-card:hover {
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
  .fluxo-container {
    flex-direction: column;
    align-items: center;
  }

  .fluxo-card {
    width: 90%;
  }

  .fluxo-img {
    max-width: 80%;
  }
}
</style>
