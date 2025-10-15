<template>
  <div class="curriculo-container">
    <div class="profile-card">
      <div class="photo-container">
        <img src="@/assets/img/Alice.png" alt="Alice Pinheiro" class="profile-photo" />
      </div>

      <div class="info-container">
        <h1 class="name">Alice Pinheiro da Silva</h1>
        <h2 class="role"></h2>

        <p class="bio">
          Apaixonada por transformar ideias em sistemas funcionais e bonitos.
          Tenho experiência com <span>Vue.js</span>, <span>Node.js</span>,
          <span>Flutter</span> e bancos de dados SQL/NoSQL.
          Busco sempre inovar, aprender e entregar código limpo com impacto real.
        </p>

        <div class="details">
          <p><i class="fa-solid fa-envelope"></i> alice.dev@email.com</p>
          <p><i class="fa-solid fa-phone"></i> (71) 99999-9999</p>
          <p><i class="fa-solid fa-location-dot"></i> Feira de Santana - BA</p>
          <p><i class="fa-brands fa-github"></i> github.com/alicepinheiro</p>
          <p><i class="fa-brands fa-linkedin"></i> linkedin.com/in/alicepinheiro</p>
        </div>

        <div class="buttons">
          <a href="/curriculo.pdf" download class="btn-download">
            <i class="fa-solid fa-download"></i> Baixar Currículo
          </a>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h2>🧠 Habilidades Técnicas</h2>
      <div class="skills-grid">
        <span class="skill">Vue.js</span>
        <span class="skill">Node.js</span>
        <span class="skill">Flutter</span>
        <span class="skill">Java</span>
        <span class="skill">JavaScript / TypeScript</span>
        <span class="skill">HTML / CSS</span>
        <span class="skill">SQL / MongoDB</span>
        <span class="skill">Git / GitHub</span>
      </div>
    </div>

    <div class="xp-section">
      <h2>🚀 Experiência Profissional</h2>
      <div class="xp-card" v-for="(exp, i) in experiencias" :key="i">
        <h3>{{ exp.cargo }}</h3>
        <h4>{{ exp.empresa }}</h4>
        <p class="tempo">{{ exp.periodo }}</p>
        <p class="descricao">{{ exp.descricao }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const experiencias = ref([
  {
    cargo: 'Desenvolvedora Fullstack',
    empresa: 'Freelancer / Projetos Próprios',
    periodo: '2022 - Atual',
    descricao: 'Criação de sistemas completos com Vue.js, Node.js e Flutter. Experiência com design futurista, interfaces responsivas e integração de APIs.'
  },
  {
    cargo: 'Estagiária em Desenvolvimento de Sistemas',
    empresa: 'Tech Solutions',
    periodo: '2021 - 2022',
    descricao: 'Desenvolvimento e manutenção de aplicações web internas, otimização de banco de dados e automação de processos administrativos.'
  }
])

onMounted(() => {
  const element = document.querySelector('.role')
  const fullText = '💻 Desenvolvedora Fullstack'
  let index = 0

  const type = () => {
    if (index < fullText.length) {
      element.textContent += fullText.charAt(index)
      index++
      const delay = fullText.charAt(index - 1) === ' ' ? 60 : 80
      setTimeout(type, delay)
    } else {
      element.classList.add('cursor-blink')
    }
  }

  type()
})
</script>

<style scoped>
.curriculo-container {
  background: #0d0d0d;
  color: #eee;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  animation: fadeIn 1s ease-in;
}

/* Perfil */
.profile-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  text-align: center;
}

.photo-container {
  flex: 1;
  max-width: 250px;
}

.profile-photo {
  width: 100%;
  border-radius: 50%;
  border: 3px solid #00CFFF;
  box-shadow: 0 0 25px #00CFFF, 0 0 40px rgba(57, 255, 20, 0.4);
  transition: 0.4s;
  animation: float 3s ease-in-out infinite;
}

.profile-photo:hover {
  transform: scale(1.05);
}

.info-container {
  flex: 2;
  max-width: 600px;
}

.name {
  color: #39FF14;
  text-shadow: 0 0 10px #39FF14;
  font-size: 2rem;
}

/* corrigido o bug de digitação */
.role {
  display: inline-block;
  color: #00CFFF;
  text-shadow: 0 0 8px #00CFFF;
  font-size: 1.3rem;
  border-right: 2px solid #00CFFF;
  white-space: nowrap;
  overflow: hidden;
  min-height: 1.6rem;
  padding-right: 4px;
}

.cursor-blink {
  animation: blink 0.8s infinite;
}

.bio {
  margin-top: 20px;
  color: #ddd;
  line-height: 1.6;
}

.bio span {
  color: #39FF14;
}

/* Detalhes */
.details p {
  margin: 6px 0;
  color: #ccc;
  font-size: 0.95rem;
}

.details i {
  color: #00CFFF;
  margin-right: 8px;
}

/* Botão */
.btn-download {
  display: inline-block;
  margin-top: 20px;
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  color: #0d0d0d;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 10px #00CFFF, 0 0 15px #39FF14;
  transition: 0.3s;
}

.btn-download:hover {
  filter: brightness(1.2);
  transform: scale(1.05);
}

/* Habilidades */
.skills-section {
  text-align: center;
  margin-bottom: 60px;
}

.skills-section h2 {
  color: #00CFFF;
  text-shadow: 0 0 8px #00CFFF;
  margin-bottom: 20px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.skill {
  background: #111;
  border: 1px solid #00CFFF55;
  padding: 8px 14px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 207, 255, 0.3);
  color: #39FF14;
  transition: 0.3s;
}

.skill:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 15px #00CFFF, 0 0 25px #39FF14;
}

/* Experiência */
.xp-section {
  margin-top: 50px;
}

.xp-section h2 {
  text-align: center;
  color: #39FF14;
  text-shadow: 0 0 8px #39FF14;
  margin-bottom: 30px;
}

.xp-card {
  background: #111;
  border: 1px solid #00CFFF33;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(0, 207, 255, 0.1);
  transition: 0.3s;
}

.xp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 25px #00CFFF, 0 0 40px rgba(57, 255, 20, 0.4);
}

.xp-card h3 {
  color: #39FF14;
  font-size: 1.2rem;
}

.xp-card h4 {
  color: #00CFFF;
  margin: 6px 0;
}

.tempo {
  color: #999;
  font-size: 0.9rem;
}

.descricao {
  color: #ccc;
  margin-top: 10px;
}

/* Animações */
@keyframes blink {
  50% { border-color: transparent; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>
