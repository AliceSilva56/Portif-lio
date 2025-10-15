<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>🚀 Primeiros Passos com Flutter</h1>
    <p class="sub">Publicado em 15 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Flutter é um framework incrível do Google para criar aplicativos nativos
        com um único código base. Ele usa a linguagem Dart e permite desenvolver
        para Android, iOS, web e desktop com desempenho absurdo.
      </p>

      <p>
        Antes de tudo, configure seu ambiente instalando o Flutter SDK e o VS Code.
        Depois, use o comando <code>flutter create meu_app</code> e veja a mágica acontecer.
      </p>

      <p>
        A estrutura básica do Flutter gira em torno de <strong>Widgets</strong> —
        tudo na tela é um widget: texto, botões, containers e até o layout em si.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlutterBasico",
};
</script>

<style scoped>
.artigo-container {
  max-width: 800px;
  margin: 60px auto;
  padding: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.voltar-btn {
  background: none;
  border: 1px solid #00cfff;
  color: #00cfff;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.voltar-btn:hover {
  background: #00cfff;
  color: #0d0d0d;
  box-shadow: 0 0 10px #00cfff;
}

h1 {
  color: #00cfff;
  text-shadow: 0 0 10px #00cfff;
  margin-bottom: 10px;
}

.sub {
  color: #000000;
  font-size: 0.9rem;
  margin-bottom: 25px;
}

.conteudo p {
  line-height: 1.7;
  margin-bottom: 20px;
  color: #000000;
}
code {
  background: #111;
  padding: 3px 6px;
  border-radius: 4px;
  color: #39ff14;
}
</style>
