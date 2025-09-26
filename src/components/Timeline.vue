<script>
export default {
  name: "Timeline"
}
</script>

<template>
  <section class="timeline">
    <!-- Item 1 -->
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">2024</span>
        <h3 class="timeline-title">Primeiros Passos</h3>
        <p>
          Iniciei minha jornada no desenvolvimento de sistemas, aprendendo lógica de programação e construindo minhas primeiras páginas em HTML, CSS e JS.
        </p>
      </div>
    </div>

    <!-- Item 2 -->
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">2025 - Início</span>
        <h3 class="timeline-title">Meus Primeiros Projetos</h3>
        <p>
          Criei sistemas como o <strong>Guardião de Senhas</strong> e o <strong>FluxoApp</strong>, explorando segurança e design futurista.
        </p>
      </div>
    </div>

    <!-- Item 3 -->
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">2025 - Meio</span>
        <h3 class="timeline-title">Explorando Frameworks</h3>
        <p>
          Mergulhei em <strong>Vue.js</strong> e <strong>Flutter</strong>, criando apps responsivos e melhorando a experiência do usuário.
        </p>
      </div>
    </div>

    <!-- Item 4 -->
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">Futuro</span>
        <h3 class="timeline-title">Construindo Meu Futuro</h3>
        <p>
          Quero evoluir como desenvolvedora fullstack, colaborar em projetos reais e criar soluções que inspirem outras pessoas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 40px auto;
  padding: 20px 0;
  width: 90%;
  max-width: 700px;
  border-left: 3px solid #00CFFF;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

.timeline-dot {
  position: absolute;
  left: -11px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #39FF14;
  border-radius: 50%;
  box-shadow: 0 0 10px #39FF14, 0 0 20px rgba(57, 255, 20, 0.6);
}

.timeline-content {
  background: #111;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 207, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 0 20px rgba(0, 207, 255, 0.6);
}

.timeline-date {
  font-size: 0.85rem;
  color: #00CFFF;
  font-weight: bold;
  text-shadow: 0 0 6px #00CFFF;
}

.timeline-title {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #39FF14;
  text-shadow: 0 0 8px #39FF14;
}

.timeline p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
