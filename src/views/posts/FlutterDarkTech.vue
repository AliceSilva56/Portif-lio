<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>🌌 Design Futurista no Flutter (Dark Tech)</h1>
    <p class="sub">Publicado em 17 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        O estilo Dark Tech é uma fusão de minimalismo, cores neon e animações sutis.
        A ideia é transmitir tecnologia e energia ao mesmo tempo.
      </p>

      <p>
        No Flutter, isso é possível com <strong>gradientes</strong>, <strong>shadows</strong> e
        animações usando <code>AnimatedContainer</code> e <code>Hero</code>.
      </p>

      <p>
        Meus apps, como o <strong>Guardião de Senhas</strong> e o <strong>Miauh Timer</strong>,
        seguem essa linha visual — escuro, mas vibrante.
      </p>

      <p>
        Dica de ouro: mantenha contraste alto e tipografia limpa.  
        Neon é poder, mas equilíbrio é elegância. ⚡
      </p>
    </div>
  </div>
</template>

<script>
export default { name: "FlutterDarkTech" }
</script>

<style scoped>
@import './_artigo.css';
</style>
