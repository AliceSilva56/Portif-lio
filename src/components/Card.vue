<script>
export default {
  name: 'Card'
}
</script>

<template> 
    <!-- Cards de projetos -->
    <h2 id="projetos" style="text-align: center; color: #00CFFF; text-shadow: 0 0 8px #00CFFF;">Meus Projetos</h2>
    <p style="text-align: center; margin-bottom: 30px;">Aqui estão alguns dos meus projetos recentes, desenvolvidos com dedicação e criatividade.</p>

<div class="card-group">
  <div class="card">
    <img src="@/assets/img/Miauh.png" class="card-img-top" alt="Miauh Timer">
    <div class="card-body">
      <h5 class="card-title">Miauh Timer 🐾</h5>
     <p class="card-text">Aplicativo temático inspirado em gatos, desenvolvido para cálculo de diferença de tempo entre duas datas/horas. Traz uma experiência divertida e funcional, com identidade visual personalizada.</p>
    
     <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
      <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
      <router-link class="card-btn" to="/miauh">Ver Mais</router-link>
    </div>
    
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 100%"></div>
      </div>
      <p class="card-text"><small class="text-body-secondary">Ultima Atualização 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="@/assets/img/Aly.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Chat Aly 🤖</h5>
      <p class="card-text">Assistente virtual em forma de chat interativo, que combina mensagens, chamadas e até histórias interativas com escolhas do usuário. Um projeto que une comunicação e entretenimento de forma criativa.</p>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
  <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
  <router-link class="card-btn" to="/aly">Ver Mais</router-link>
</div>

      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>

</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="@/assets/img/Fluxo.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">FluxoApp 🚀</h5>
      <p class="card-text">Aplicativo de controle financeiro pessoal, com registro de gastos, gráficos dinâmicos, resumo de períodos e exportação em PDF. Focado em ajudar o usuário a equilibrar finanças de forma prática e visual.</p>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
  <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
  <router-link class="card-btn" to="/fluxo">Ver Mais</router-link>
</div>

      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<br>
<div class="card-group">
  <div class="card">
    <img src="@/assets/img/Guardiao.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Guardião de Senhas 🔐</h5>
      <p class="card-text">Aplicativo focado em armazenamento seguro de senhas. Permite organizar credenciais em pastas, proteger dados com criptografia e biometria, além de oferecer interface moderna no estilo Dark Tech. O app é totalmente em português e prioriza a segurança local sem depender de servidores externos.</p>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
  <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
  <router-link class="card-btn" to="/guardiao">Ver Mais</router-link>
</div>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
    </div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="@/assets/img/Neon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Neon Code Cafe ☕</h5>
      <p class="card-text">Website institucional com tema futurista, apresentando um cardápio criativo inspirado no mundo da programação. Layout neon, responsivo e envolvente, com elementos visuais modernos e imersivos.</p>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
  <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
  <router-link class="card-btn" to="/neon">Ver Mais</router-link>
</div>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="@/assets/img/Costura.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Costura Certa ✂️</h5>
      <p class="card-text">Aplicativo Ainda em desenvolvimento voltado para gestão de pedidos de costura, permitindo cadastrar medidas, acompanhar pedidos e controlar parte financeira. Interface simples, organizada e com recursos de backup.</p>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
  <span class="lang-text lang-flutter">Linguagem: Flutter (Dart)</span>
  <router-link class="card-btn" to="/costura">Ver Mais</router-link>
</div>

      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 10%"></div>
      </div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br>
<br>
</template>

<style scoped>

.lang-flutter { color: #00CFFF; text-shadow: 0 0 6px #00CFFF; }
.lang-web { color: #FF00FF; text-shadow: 0 0 6px #FF00FF; }

* {
    font-family: cursive;
    scroll-behavior: smooth;
}
.progress {
  background: #c0c0c0ff;
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  height: 100%;
  max-width: 0; /* começa zerada */
  animation: loadBar 1.8s ease-out forwards;
}

/* anima o max-width até o valor do width inline */
@keyframes loadBar {
  from { max-width: 0; }
  to   { max-width: 100%; }
}



.card-img-top {
  width: 250px;   /* largura menor */
  height: auto;   /* mantém proporção */
  display: block;
  margin: 0 auto 15px auto; /* centraliza e dá espaçamento embaixo */
  border-radius: 9px; /* opcional: cantos arredondados */
}

.card {
  background: #ffffffff;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 0 12px rgba(0, 207, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: #181717ff; /* texto branco por padrão */
    margin: 20px auto;
    
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 20px rgba(0, 207, 255, 0.5);
}

.card-title {
  font-size: 1.3rem;
  color: #00CFFF;
  margin-bottom: 10px;
  text-shadow: 0 0 8px #00CFFF;
}

.card-content {
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.card-btn {
  background: linear-gradient(90deg, #00CFFF, #1495ff);
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  color: #0d0d0d;
  transition: 0.3s;
}

.card-btn:hover {
  filter: brightness(1.2);
  box-shadow: 0 0 10px #00CFFF;
}

/*.card-group .card:nth-child(1) .card-title {*/
  /*color: #00CFFF; /* azul neon */
/*}*/

/*.card-group .card:nth-child(2) .card-title {
  color: #39FF14; /* verde neon */
/*}

.card-group .card:nth-child(3) .card-title {
  color: #FF00FF; /* rosa neon */
/*}*/

</style>
