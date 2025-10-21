<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>💙 Primeiros Passos com Flutter</h1>
    <p class="sub">Publicado em 15 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Lembro até hoje quando abri o <strong>Flutter</strong> pela primeira vez.  
        Era aquele mix de empolgação e confusão kkkk.  
        Só sabia que ele era um tal “framework do Google” pra criar apps bonitos e rápidos.  
        E olha… eu não tava errada!
      </p>

      <p>
        O Flutter é basicamente um superpoder pra quem quer criar
        <strong>aplicativos nativos</strong> com um único código-base.  
        Ele usa a linguagem <strong>Dart</strong> e permite desenvolver para 
        <strong>Android, iOS, Web e Desktop</strong> — tudo no mesmo projeto.
      </p>

      <p>
        Depois que instalei o <strong>SDK do Flutter</strong> e configurei o <strong>VS Code</strong>,  
        digitei o famoso comando:
      </p>

      <pre><code>flutter create meu_app</code></pre>

      <p>
        E pronto — a mágica começou ✨  
        Um projeto inteirinho nasceu em segundos, com estrutura organizada,  
        código limpo e uma tela inicial azul piscando me dizendo “funcionou!”.
      </p>

      <p>
        Logo descobri que tudo no Flutter gira em torno dos <strong>Widgets</strong>.  
        Texto, botão, imagem, layout… tudo é um widget.  
        É como brincar de LEGO, só que com código: você monta, combina e estiliza tudo.
      </p>

      <p>
        E o melhor? O <strong>Hot Reload</strong>.  
        Faz uma mudança, salva e *puff!* — a tela atualiza instantaneamente.  
        É viciante ver o app ganhando forma em tempo real 😍.
      </p>

      <p class="final">
        Desde então, Flutter virou meu ambiente favorito de criação.  
        É rápido, intuitivo e me faz sentir que qualquer ideia pode sair do papel.  
        <strong>É código, arte e magia no mesmo lugar.</strong> 💙
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
@import './_artigo.css';

/* === VISUAL NO ESTILO DO InicioDev === */

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

/* Estilo pro código */
pre {
  background: #0e0e0e;
  color: #39ff14;
  padding: 10px 14px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  overflow-x: auto;
  margin: 10px 0 20px;
  box-shadow: 0 0 8px #0077ff33;
}
</style>
