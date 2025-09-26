<script>
export default {
  name: 'Card'
}
</script>

<template> 

/* Segunda Versão dos cards. com progresso (para mostrar meus projetos) */
<br>
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - Miauh timer</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
 
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 100%"></div>
        </div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - Chat Aly </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>

</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - FluxoApp</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<br>
<div class="card-group">
  <div class="card">
    <img src="@/assets/Guardiao.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - Guardião de Senhas </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
    </div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - Neon Code Cafe</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title - Costura Certa</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 20%"></div>
</div>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br>
<br>
</template>

<style scoped>
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
  background: linear-gradient(90deg, #00CFFF, #39FF14);
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
