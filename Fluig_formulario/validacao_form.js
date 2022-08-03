function validateForm(form){
	
	var msg = "";
	
	/*requisitante */	
	
	if(form.getValue("nome") == ""){
		msg += "Campo Nome não foi preechido.";
	}
	if(form.getValue("email") == ""){
		msg += "Campo Email não foi preechido.";
	}
	if(form.getValue("telefone") == ""){
		msg += "Campo Telefone não foi preechido.";
	}
	if(form.getValue("documentoIdentidade") == ""){
		msg += "Campo Documento de Identidade não foi preechido.";
	}
	if(form.getValue("dataNascimento") == ""){
		msg += "Campo Data de Nascimento não foi preechido.";
	}
	
	/*Responsaveis*/
	
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	
	if(responsaveis.length == 0){
		msg += "Campo Responsáveis não foi informado.";
	}
	
	/*Ponto Comercial*/
	
	if(form.getValue("tipoPonto") == ""){
		msg += "Campo Tipo de Ponto não foi selecionado.";
	}
	if(form.getValue("segunda") != "on" && form.getValue("terca") != "on" && form.getValue("quarta") != "on" && 
		form.getValue("quinta") != "on"&& form.getValue("sexta") != "on"&& form.getValue("sabado") != "on" && 
		form.getValue("domingo") != "on") {
		msg += "Campo Dias de Funcionamento não foi informado."
		
	}
	if(form.getValue("cep") == ""){
		msg += "Campo Cep não foi preechido.";
	}
	if(form.getValue("logradouro") == ""){
		msg += "Campo Logradouro não foi preechido.";
	}
	if(form.getValue("bairro") == ""){
		msg += "Campo Bairro não foi preechido.";
	}
	if(form.getValue("cidade") == ""){
		msg += "Campo Cidade não foi preechido.";
	}
	if(form.getValue("estado") == ""){
		msg += "Campo Estado não foi preechido.";
	}
	
	/*Financeiro */
	if(form.getValue("valor") == ""){
		msg += "Campo Valor não foi preechido.";
	}
	
	
	if(msg != ""){
		throw msg;
	}
	
}