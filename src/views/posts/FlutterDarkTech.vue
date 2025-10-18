<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>🌌 Design Futurista no Flutter (Dark Tech)</h1>
    <p class="sub">Publicado em 17 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Sempre curti esse visual meio tecnológico, com luzes neon e clima de ficção científica.  
        Então quando comecei a criar meus apps, pensei:  
        <strong>“Por que não fazer cada tela parecer saída de um filme futurista?”</strong> 💡
      </p>

      <p>
        Assim nasceu meu estilo favorito: o <strong>Dark Tech</strong>.  
        Um design que mistura <strong>minimalismo</strong>, <strong>cores neon</strong> e
        <strong>animações sutis</strong> — tudo no tom certo pra transmitir energia, tecnologia e um toque de mistério.
      </p>

      <p>
        No <strong>Flutter</strong>, isso é pura diversão de fazer.  
        Gradientes suaves, sombras com brilho e transições com  
        <code>AnimatedContainer</code> e <code>Hero</code> deixam o app com vida própria.  
        Cada detalhe parece pulsar com luz própria ⚡.
      </p>

      <p>
        Dois exemplos são o <strong>Guardião de Senhas</strong> e o <strong>Neon Code Café</strong>.  
        Ambos seguem essa linha visual:  
        <em>escuro, vibrante, tecnológico — mas ainda aconchegante.</em>  
        É tipo um neon que não cansa os olhos.
      </p>

      <p>
        Dica de ouro: <strong>contraste é tudo</strong>.  
        Deixe o fundo respirar, escolha bem as cores neon (nada de arco-íris piscando kkkk)  
        e use tipografias limpas e modernas.
      </p>

      <p class="final">
        O estilo Dark Tech é mais do que estética — é uma sensação.  
        É olhar pra tela e sentir que o futuro já começou. 🚀
      </p>
    </div>
  </div>
</template>

<script>
export default { name: "FlutterDarkTech" }
</script>

<style scoped>
@import './_artigo.css';

/* === MESMO ESTILO PADRÃO DO InicioDev === */

h1 {
  color: #181717;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
}

.sub {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.conteudo {
  line-height: 1.7;
  color: #1e1e1e;
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
}

.conteudo p {
  margin-bottom: 18px;
}

.conteudo strong {
  color: #0077ff;
}

.final {
  text-align: center;
  font-weight: 600;
  color: #181717;
  margin-top: 30px;
}

.voltar-btn {
  background-color: #0077ff;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;
}

.voltar-btn:hover {
  background-color: #005fd1;
}

/* Código em destaque */
code {
  background: #0e0e0e;
  color: #39ff14;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
}
</style>
