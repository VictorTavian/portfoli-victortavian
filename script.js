document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  
  const numeroWhats = "5511950283927"; 

  const texto = `Olá, meu nome é ${nome}.%0A%0A${mensagem}`;
  const url = `https://wa.me/${5511950283927}?text=${texto}`;

  window.open(url, "_blank");
});
