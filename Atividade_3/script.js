const consultarButton = document.getElementById('consultar');
const resultadoDiv = document.getElementById('dados');

const validarCEP = (cep) => /^[0-9]{8}$/.test(cep);

const consultarCEP = async () => {
  const cep = document.getElementById('cep').value.trim();

  if (!validarCEP(cep)) {
    resultadoDiv.innerHTML = "Por favor, insira um CEP válido com 8 dígitos.";
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      resultadoDiv.innerHTML = "CEP não encontrado.";
    } else {
      resultadoDiv.innerHTML = `
        <strong>Logradouro:</strong> ${data.logradouro}<br>
        <strong>Bairro:</strong> ${data.bairro}<br>
        <strong>Cidade:</strong> ${data.localidade}<br>
        <strong>Estado:</strong> ${data.uf}
      `;
    }
  } catch (error) {
    resultadoDiv.innerHTML = "Erro ao consultar a API. Tente novamente.";
  }
};

consultarButton.addEventListener('click', consultarCEP);
