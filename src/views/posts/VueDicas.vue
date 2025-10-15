<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>💡 Dicas de Produtividade com Vue.js</h1>
    <p class="sub">Publicado em 16 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Vue é um framework extremamente fluido e intuitivo, mas com algumas boas práticas,
        dá pra turbinar sua produtividade.
      </p>

      <ul>
        <li>🔥 Use <code>script setup</code> para menos boilerplate.</li>
        <li>🎯 Componentize tudo que se repete.</li>
        <li>⚙️ Configure aliases no vite.config.js para encurtar imports.</li>
        <li>💬 Aproveite o Vue DevTools para debugar estado e props facilmente.</li>
      </ul>

      <p>
        O segredo é deixar o código simples, claro e reusável. O Vue não é só um framework —
        é um estilo de pensar desenvolvimento.
      </p>
    </div>
  </div>
</template>

<script>
export default { name: "VueDicas" }
</script>

<style scoped>
@import './_artigo.css';
</style>
