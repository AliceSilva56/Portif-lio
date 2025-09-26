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
            <img src="@/assets/Alice.png" class="card-img-top" alt="Guardião">
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
/* Container em duas colunas */
.sobre-mim-container {
  display: flex; /* usa flexbox para layout em linha */
  justify-content: flex-start; /* encosta os elementos à esquerda */
  align-items: center; /* alinha verticalmente ao centro */
  gap: 20px;  /* espaço menor entre texto e imagem */
  margin: 40px 0; /* margem superior e inferior */
}

/* Texto à esquerda */
.sobre-mim-texto {
  flex: 1; /* ocupa o espaço restante */
  color: #ffffffff; /* texto branco */
  padding: 0 80px; /* espaçamento interno */
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
  flex: 0 0 500px; /* largura fixa menor */
}

.card-img-top {
  width: 250px;   /* largura menor */
  height: auto;   /* mantém proporção */
  display: block;
  margin: 0 auto 15px auto; /* centraliza e dá espaçamento embaixo */
  border-radius: 9px; /* opcional: cantos arredondados */
}

</style>