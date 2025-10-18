<template>
  <div class="artigo-container">
    <button class="voltar-btn" @click="$router.push('/blog')">⬅ Voltar</button>

    <h1>🚀 Minha Jornada no Desenvolvimento</h1>
    <p class="sub">Publicado em 17 de Outubro de 2025</p>

    <div class="conteudo">
      <p>
        Tudo começou exatamente no dia <strong>19/03/2024</strong>, o dia em que comecei o curso
        <strong>Programador Full Stack</strong> no <strong>Senac</strong>.  
        Comecei sem saber nada — tinha nem um mês que eu tinha ganhado meu computador.  
        Mas queria fazer algo, já que tinha acabado de terminar o colégio.
      </p>

      <p>
        O professor desse curso foi uma pessoa inspirada.  
        Se não fosse ele, acho que nem teria terminado, pois no meio do curso passei por um
        momento muito ruim... mas enfim kkkk 😅
      </p>

      <p>
        Comecei estudando <strong>lógica de programação</strong> e <strong>fluxogramas</strong>, depois mergulhei em
        <strong>HTML, CSS e JavaScript</strong>.  
        Criei alguns “sites”, mas nada que eu queira trazer aqui — porque este espaço é reservado
        pros projetos que, mesmo faltando algo, eu <strong>amei criar cada um deles</strong>. 💻✨
      </p>

      <p>
        Esse curso Full Stack foi do período <strong>19/03/2024 a 22/07/2024</strong>.  
        E no meio tempo abriram as inscrições pro curso técnico de
        <strong>Desenvolvimento de Sistemas</strong>, que é o que estou fazendo agora 😉😁
      </p>

      <p>
        Nele conheci o <strong>Flutter/Dart</strong> — simplesmente perfeito kkkkk  
        Nada melhor do que criar algo que funcione tanto em celular quanto em computador.  
        Desde então, desenvolvi cada um desses apps que estão aqui no meu portfólio,  
        cada um nascido de uma ideia ou de um “problema” a ser resolvido — pra mim ou pra outras pessoas.
      </p>

      <p class="final">
        Pra resumir: hoje sigo em constante aprendizado,  
        e meu portfólio é o reflexo dessa jornada —  
        <strong>evolução constante e amor por transformar ideias em realidade</strong>. 🚀💙
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioDev"
}
</script>

<style scoped>
@import './_artigo.css';

/* Pequeno toque de estilo extra */
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
</style>
