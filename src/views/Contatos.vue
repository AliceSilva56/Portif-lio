<template>
  <div class="container py-5 contatos-page">
    <h1 class="mb-4 text-center titulo">📬 Entre em Contato</h1>
    <p class="text-center subtitulo">
      Tem alguma dúvida, ideia ou proposta? Me chama por aqui:
    </p>

    <!-- Links principais -->
    <div class="row justify-content-center mb-5">
      <div class="col-md-8 d-flex flex-wrap justify-content-center gap-4">
        <a href="mailto:seuemail@gmail.com" class="contact-link">
          <i class="fas fa-envelope"></i> Email
        </a>
        <a href="https://github.com/seuusuario" target="_blank" class="contact-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" class="contact-link">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://wa.me/5599999999999" target="_blank" class="contact-link">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>

    <!-- Formulário de contato -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form class="contact-form shadow-sm p-4 rounded">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Digite seu email">
          </div>
          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea class="form-control" id="mensagem" rows="4" placeholder="Digite sua mensagem"></textarea>
          </div>
          <button type="submit" class="btn-enviar">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.titulo {
  color: #00CFFF;
  text-shadow: 0 0 8px #00CFFF;
}

.subtitulo {
  margin-bottom: 30px;
  font-size: 1.1rem;
  color: #ccc;
}

/* Links de contato */
.contact-link {
  background: #111;
  color: #00CFFF;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(0, 207, 255, 0.4);
}

.contact-link:hover {
  color: #fff;
  background: #00CFFF;
  box-shadow: 0 0 15px #00CFFF, 0 0 25px rgba(57,255,20,0.4);
}

.contact-link i {
  margin-right: 8px;
}

/* Formulário */
.contact-form {
  background: #ffffff;
  border: 1px solid #222;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 207, 255, 0.3);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px #00CFFF, 0 0 35px rgba(57,255,20,0.4);
}

.contact-form .form-control {
  background: #ffffff;
  border: 1px solid #00CFFF44;
  color: #fff;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #39FF14;
  box-shadow: 0 0 8px #00CFFF;
  background: #111;
  color: #fff;
  outline: none;
}

/* Botão enviar */
.btn-enviar {
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #0d0d0d;
  transition: 0.3s;
  box-shadow: 0 0 8px #00CFFF, 0 0 12px #39FF14;
}

.btn-enviar:hover {
  filter: brightness(1.2);
  box-shadow: 0 0 18px #00CFFF, 0 0 28px #39FF14;
}
</style>
