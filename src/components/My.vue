<script>
export default {
  name: 'My'
}
</script>

<template>
    <!-- Primeira Versão do card, com texto sobre mim -->
    <div id="sobre-mim" class="sobre-mim-container">
        <!-- Texto à esquerda -->
        <div class="sobre-mim-texto">
        <h2>Sobre Mim</h2>
        <p>
            Olá! Meu nome é Alice Pinheiro da Silva. <br>Estou iniciando minha jornada no 
            <strong>desenvolvimento de sistemas</strong>, <br>explorando novas tecnologias
            e criando projetos para evoluir minhas habilidades.
            <br>Estou animada para compartilhar meu progresso e aprender cada vez mais!
        </p>
        </div>

        <!-- Card à direita -->
        <div class="sobre-mim-card">
        <div class="card">
            <img src="@/assets/img/Alice.png" class="card-img-top" alt="Guardião">
            <div class="card-body">
            <h5 class="card-title">Essa sou eu (;-)</h5>
            <p class="card-text">
                Este é um card reduzido, mostrando parte do meu progresso inicial.
            </p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 75%">Progresso de Aprendizagem</div>
            </div>
            </div>
        </div>
        </div>
    </div>

<br>
</template>

<style scoped>
/* ==========================
   Estilos principais
========================== */
.progress {
  background: #c0c0c0ff;
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  height: 100%;
  max-width: 0;
  animation: loadBar 1.8s ease-out forwards;
}

@keyframes loadBar {
  from { max-width: 0; }
  to   { max-width: 100%; }
}

.card-img-top {
  width: 250px;
  height: auto;
  display: block;
  margin: 0 auto 15px auto;
  border-radius: 9px;
}

.card {
  background: #ffffffff;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 0 12px rgba(0, 207, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: #181717ff;
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

/* Container em duas colunas */
.sobre-mim-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
}

/* Texto à esquerda */
.sobre-mim-texto {
  flex: 1;
  color: #ffffffff;
  padding: 0 80px;
}

.sobre-mim-texto h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #145effff;
  text-shadow: 0 0 8px #1462ffff;
}

.sobre-mim-texto p {
  font-size: 1rem;
  line-height: 1.6;
  color: #000000ff;
}

/* Card reduzido à direita */
.sobre-mim-card {
  flex: 0 0 500px;
}

/* ==========================
   RESPONSIVIDADE
========================== */
@media (max-width: 900px) {
  .sobre-mim-container {
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
  }

  .sobre-mim-texto {
    padding: 0;
  }

  .sobre-mim-texto h2 {
    font-size: 1.7rem;
  }

  .sobre-mim-texto p {
    font-size: 0.95rem;
  }

  .sobre-mim-card {
    flex: 0 0 auto;
    width: 100%;
  }

  .card {
    width: 90%;
    padding: 15px;
  }

  .card-img-top {
    width: 180px;
  }
}

@media (max-width: 500px) {
  .sobre-mim-texto h2 {
    font-size: 1.5rem;
  }

  .sobre-mim-texto p {
    font-size: 0.9rem;
  }

  .card-img-top {
    width: 150px;
  }

  .card {
    padding: 12px;
  }
}
</style>
