<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>🚀 Como comecei no desenvolvimento</h1>
    <p class="sub">Publicado em 15 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Tudo começou com curiosidade — queria entender como os apps funcionavam,
        e acabei me apaixonando por criar interfaces e resolver problemas com código.
      </p>

      <p>
        Comecei estudando lógica, depois mergulhei em HTML, CSS e JavaScript.
        Quando descobri o Flutter, senti que tinha encontrado meu estilo:
        criar apps com design e propósito.
      </p>

      <p>
        Hoje sigo em constante aprendizado, e meu portfólio é o reflexo dessa jornada:
        evolução constante e amor por transformar ideias em realidade.
      </p>
    </div>
  </div>
</template>

<script>
export default { name: "InicioDev" }
</script>

<style scoped>
@import './_artigo.css';
</style>
