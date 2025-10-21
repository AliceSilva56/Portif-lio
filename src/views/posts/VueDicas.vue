<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>💡 Dicas de Produtividade com Vue.js e Flutter</h1>
    <p class="sub">Publicado em 16 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Quando comecei a usar o <strong>Vue.js</strong>, fiquei encantada com a fluidez dele.  
        Tudo parecia tão natural — componentes, reatividade, o estilo leve e intuitivo.  
        Era como montar blocos de LEGO com código 💚.
      </p>

      <p>
        Com o tempo, percebi que algumas boas práticas deixavam tudo ainda mais rápido e organizado.  
        Aí vão algumas das minhas favoritas:
      </p>

      <ul>
        <li>🔥 Use <code>&lt;script setup&gt;</code> pra cortar o excesso de código.</li>
        <li>🎯 Transforme tudo que se repete em componentes reutilizáveis.</li>
        <li>⚙️ Crie aliases no <code>vite.config.js</code> pra importar arquivos sem dor de cabeça.</li>
        <li>💬 Use o <strong>Vue DevTools</strong> — é um raio-x do seu app em tempo real.</li>
      </ul>

      <p>
        O segredo é manter o código <strong>simples, claro e vivo</strong>.  
        O Vue não é só um framework — é um jeito de pensar desenvolvimento:  
        modular, criativo e focado na experiência.
      </p>

      <p>
        Mas aí veio o <strong>Flutter</strong>… e tudo mudou 😅.  
        Foi como sair do 2D pro 3D: a mesma lógica de componentes,  
        mas agora com interfaces que ganham vida — animações, sombras,  
        e o poder de rodar em qualquer tela: Android, iOS, Web e até Desktop.
      </p>

      <p>
        No Flutter, widgets são como os componentes do Vue, mas com esteroides.  
        Você pode animar qualquer coisa, personalizar transições,  
        e até controlar o design pixel a pixel — tudo isso com performance absurda.
      </p>

      <p>
        Hoje, costumo brincar que o Vue me ensinou a ser <strong>organizada</strong>,  
        e o Flutter me ensinou a ser <strong>ousada</strong>.  
        Um constrói a base, o outro deixa tudo brilhar. ✨  
      </p>

      <p class="final">
        Se você ama Vue, experimente Flutter.  
        E se ama Flutter, aprenda com o Vue.  
        Juntos, eles formam o equilíbrio perfeito entre  
        <strong>estrutura e criatividade</strong>. 🚀
      </p>
    </div>
  </div>
</template>

<script>
export default { name: "VueDicas" }
</script>

<style scoped>
@import './_artigo.css';

/* === PADRÃO DE ESTILO DO INICIODEV === */

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
  white-space: pre-line;
}

.conteudo p {
  margin-bottom: 18px;
}

.conteudo strong {
  color: #42b883; /* Vue */
}

.final strong {
  color: #0077ff; /* Flutter */
}

.final {
  text-align: center;
  font-weight: 600;
  color: #181717;
  margin-top: 30px;
}

.voltar-btn {
  background-color: #42b883;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;
}

.voltar-btn:hover {
  background-color: #2fa36b;
}

code {
  background: #0e0e0e;
  color: #39ff14;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
}
</style>
