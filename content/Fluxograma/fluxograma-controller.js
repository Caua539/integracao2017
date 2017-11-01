angular.module('index',[]).controller('FluxogramaController', function($scope) {

	// matérias agrupadas por períodos
	$scope.fluxogramas1 = [
		{
			titulo : 'Computação e Sociedade',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Computacao_e_Sociedade'
		},
		{
			titulo : 'Introdução a Programação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Introducao_a_Programacao'
		},
		{
			titulo : 'Cálculo 1A',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Calculo_1A'
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Fundamentos_de_Matematica_para_Computacao'
		},
	];

	$scope.fluxogramas2 = [
		{
			titulo : 'Arquitetura de Computadores',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Arquitetura_De_Computadores'
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 1',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Algoritmos_e_Estrutura_de_Dados_1'
		},
		{
			titulo : 'Probabilidade e Estatística A',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Probabilidade_e_Estatistica'
		},
		{
			titulo : 'Álgebra Linear',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Arquitetura_Linear'
		},
		{
			titulo : 'Lógica Matemática',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Logica_Matematica'
		},
	];

	$scope.fluxogramas3 = [
		{
			titulo : 'Programação Orientada a Objetos',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Programacao_Orientada_Objetos'
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 2',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Algoritmos_e_Estrutura_de_Dados_2'
		},
		{
			titulo : 'Linguagens e Paradigmas da Programação',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Linguagens_e_Paradigmas_da_Programacao'
		},
		{
			titulo : 'Engenharia de Software',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Engenharia_de_Software'
		},
	];

	$scope.fluxogramas4 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Analise_e_Projeto_de_Algoritmos'
		},
		{
			titulo : 'Interação Humano-Computador',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Interacao_Humano_Computador'
		},
		{
			titulo : 'Banco de Dados',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Banco_de_Dados'
		},
		{
			titulo : 'Projeto de software',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Projeto_De_Software'
		},
	];

	$scope.fluxogramas5 = [
		{
			titulo : 'Contrução de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Construcao_de_Software'
		},
		{
			titulo : 'Modelagem de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Modelagem_de_Software'
		},
		{
			titulo : 'Processos de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Processos_de_Software'
		},
		{
			titulo : 'Engenharia de Sistemas',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Engenharia_de_Sistemas'
		},
	];

	$scope.fluxogramas6 = [
		{
			titulo : 'Design de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Design_de_Software'
		},
		{
			titulo : 'Domínios de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Dominio_de_Software'
		},
		{
			titulo : 'Processos de Qualidade de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Processos_de_Qualidade_de_Software'
		},
		{
			titulo : 'Gerência de Projeto de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Gerencia_de_Projeto_de_Software'
		},
	];

	$scope.fluxogramas7 = [
		{
			titulo : 'Software Concorrente e Distribuído',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Software_Concorrente_e_Distribuido'
		},
		{
			titulo : 'Experiência do Usuário de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Experiencia_do_Usuario_de_Software'
		},
		{
			titulo : 'Arquitetura de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Arquitetura_de_Software'
		},
		{
			titulo : 'Requisitos de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Requisitos_de_Software'
		},
		{
			titulo : 'Governança e Gestão de Serviços de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Governanca_e_Gestao_dos_Servicos_de_Software'
		},
	];

	$scope.fluxogramas8 = [
		{
			titulo : 'Software para Computação Ubíqua',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Software_Para_Sistemas_Obiquos'
		},
		{
			titulo : 'Software para Persistência de Dados',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Software_Para_Persistencia_de_Dados'
		},
		{
			titulo : 'Padrões de Arquitetura de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Padroes_de_Arquitetura_de_Software'
		},
		{
			titulo : 'Testes de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Testes_de_Software'
		},
	];

	$scope.fluxogramas9 = [
		{
			titulo : 'Prática em Engenharia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			link: '../../disciplinas.html#!/Pratica_em_Engenharia_de_Software'
		},
	];

	// matérias optativas
	$scope.optativas1 = [
		{
			titulo : 'Sistemas Operacionais',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 1,
			link: '../../disciplinas.html#!/Sistemas_Operacionais'
		},
		{
			titulo : 'Pesquisa Operacional',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 1,
			link: '../../disciplinas.html#!/Pesquisa_Operacional'
		},
		{
			titulo : 'Linguagens Formais e Autônomas',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 1,
			link: '../../disciplinas.html#!/Linguagens_Formais_e_Automatos'
		},
	];

	$scope.optativas2 = [
		{
			titulo : 'Redes de Computadores',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 2,
			link: '../../disciplinas.html#!/Redes_de_Computadores'
		},
		{
			titulo : 'Introdução a Lingua Brasileira de Sinais',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 2,
			link: '../../disciplinas.html#!/Introducao_a_Lingua_Brasileira_de_Sinais'
		},
		{
			titulo : 'Compiladores',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 2,
			link: '../../disciplinas.html#!/Compiladores'
		},
	];

	$scope.optativas3 = [
		{
			titulo : 'Sistemas Distribuídos',
			possuiDependencia: true,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 3,
			link: '../../disciplinas.html#!/Sistemas_Distribuidos'
		},
		{
			titulo : 'Mercado e Economia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 3,
			link: '../../disciplinas.html#!/Mercado_e_Economia_de_Software'
		},
		{
			titulo : 'Metodologia e Experimentação em Engenharia de Software',
			possuiDependencia: false,
			dependenciaAcionada: false,
			opcaoSelecionada: false,
			array: 3,
			link: '../../disciplinas.html#!/Metodologia_e_Experimentacao_em_Engenharia_de_Software'
		},
	];


	// dependências entre matérias
	$scope.dependencias1 = [
		{
			titulo : 'Sistemas Distribuídos',
			array : 1,
			optativa: true
		},
		{
			titulo : 'Programação Orientada a Objetos',
			array : 1,
			optativa: false
		}
	];

	$scope.dependencias2 = [
		{
			titulo : 'Sistemas Operacionais',
			array : 2,
			optativa: true
		},
		{
			titulo : 'Arquitetura de Computadores',
			array : 2,
			optativa: false
		}
	];

	$scope.dependencias3 = [
		{
			titulo : 'Pesquisa Operacional',
			array : 3,
			optativa: true
		},
		{
			titulo : 'Álgebra Linear',
			array : 3,
			optativa: false
		}
	];

	$scope.dependencias4 = [
		{
			titulo : 'Compiladores',
			array : 4,
			optativa: true
		},
		{
			titulo : 'Linguagens Formais e Autômatos',
			array : 4,
			optativa: true
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 4,
			optativa: false
		}
	];

	$scope.dependencias5 = [
		{
			titulo : 'Compiladores',
			array : 5,
			optativa: true
		},
		{
			titulo : 'Algortimos e Estrutura de Dados 2',
			array : 5,
			optativa: false
		}
	];

	$scope.dependencias6 = [
		{
			titulo : 'Banco de Dados',
			array : 6,
			optativa: false
		},
		{
			titulo : 'Lógica Matemática',
			array : 6,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 6,
			optativa: false
		}
	];

	$scope.dependencias7 = [
		{
			titulo : 'Projeto de Software',
			array : 7,
			optativa: false
		},
		{
			titulo : 'Engenharia de Software',
			array : 7,
			optativa: false

		}
	];

	$scope.dependencias8 = [
		{
			titulo : 'Projeto de Software',
			array : 8,
			optativa: false
		},
		{
			titulo : 'Programação Orientada a Objetos',
			array : 8,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 8,
			optativa: false
		}
	];

	$scope.dependencias9 = [
		{
			titulo : 'Arquitetura de Computadores',
			array : 9,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 9,
			optativa: false
		}
	];

	$scope.dependencias10 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			array : 10,
			optativa: false
		},
		{
			titulo : 'Fundamentos de Matemática para Computação',
			array : 10,
			optativa: false
		}
	];

	$scope.dependencias11 = [
		{
			titulo : 'Linguagens e Paradigmas de Programação',
			array : 11,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 11,
			optativa: false
		}
	];

	$scope.dependencias12 = [
		{
			titulo : 'Análise e Projeto de Algoritmo',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 2',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 1',
			array : 12,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 12,
			optativa: false
		}
	];

	$scope.dependencias13 = [
		{
			titulo : 'Interação Humano-Computador',
			array : 13,
			optativa: false
		},
		{
			titulo : 'Algoritmo e Estrutura de Dados 1',
			array : 13,
			optativa: false
		},
		{
			titulo : 'Introdução a Programação',
			array : 13,
			optativa: false
		}
	];

	$scope.dependencias14 = [
		{
			titulo : 'Interação Humano-Computador',
			array : 14,
			optativa: false
		},
		{
			titulo : 'Probabilidade e Estatística A',
			array : 14,
			optativa: false
		},
		{
			titulo : 'Cálculo 1A',
			array : 14,
			optativa: false
		}
	];

	// agrupa todas as matérias de todos os períodos
	$scope.fluxogramaCompleto = $scope.fluxogramas1
				.concat($scope.fluxogramas2)
				.concat($scope.fluxogramas3)
				.concat($scope.fluxogramas4)
				.concat($scope.fluxogramas5)
				.concat($scope.fluxogramas6)
				.concat($scope.fluxogramas7)
				.concat($scope.fluxogramas8)
				.concat($scope.fluxogramas9)
				.concat($scope.optativas1)
				.concat($scope.optativas2)
				.concat($scope.optativas3)

	// agrupa todas as matérias optativas de todos os períodos
	$scope.optativasCompleto = $scope.optativas1
								.concat($scope.optativas2)
								.concat($scope.optativas3)

	// agrupa todas as dependências
	var dependenciasCompleta = $scope.dependencias1
				.concat($scope.dependencias2)
				.concat($scope.dependencias3)
				.concat($scope.dependencias4)
				.concat($scope.dependencias5)
				.concat($scope.dependencias6)
				.concat($scope.dependencias7)
				.concat($scope.dependencias8)
				.concat($scope.dependencias9)
				.concat($scope.dependencias10)
				.concat($scope.dependencias11)
				.concat($scope.dependencias12)	
				.concat($scope.dependencias13)
				.concat($scope.dependencias14

					)	

	//atributos utilizados para a busca de dependências
	$scope.arrayDependencias = [];
	$scope.optativaAcionada = false;
	$scope.optativaAcionada2 = false;
	$scope.optativaAcionada3 = false;
	$scope.optativaSelecionada = false;

	// Obtém dependências das disciplinas
	$scope.obterDependencias = function(fluxograma){

		$scope.configuracaoInicial();

		fluxograma.opcaoSelecionada = true;
		if(fluxograma.possuiDependencia){

			dependenciasCompleta.forEach(function(atual) {
				if(fluxograma.titulo == atual.titulo) {
					$scope.arrayDependencias = $scope.arrayDependencias
											.concat($scope.obterArrayDaDependencia(atual.array));	
				}
			})
			$scope.verificaDependencia(fluxograma);
			if(!$scope.optativaSelecionada && (!$scope.optativaAcionada || !$scope.optativaAcionada2 || !$scope.optativaAcionada3)){
				$scope.ativarCollapse();
			}
		}else if(!fluxograma.possuiDependencia && !$scope.optativaSelecionada){
			$scope.ativarCollapse();
		}
	}

	// obtém as dependências das disciplinas optativas e previne o painel de fechar
	$scope.obterDependenciasOptativas = function(fluxograma, event){

			$scope.optativaSelecionada = true; // colocar verdadeiro antes de chamar a função de buscar dependências
			$scope.desativaCollapse(event);
			$scope.obterDependencias(fluxograma);
			$scope.optativaSelecionada = false; // reinicia a variavel com valor falso
			fluxograma.opcaoSelecionada = true;
	}

	//busca o array de dependencia
	$scope.obterArrayDaDependencia = function(numeroArray) {
		if(numeroArray == 1){
			return $scope.dependencias1;
		}else if(numeroArray == 2){
			return $scope.dependencias2;
		}else if(numeroArray == 3){
			return $scope.dependencias3;
		}else if(numeroArray == 4){
			return $scope.dependencias4;
		}else if(numeroArray == 5){
			return $scope.dependencias5;
		}else if(numeroArray == 6){
			return $scope.dependencias6;
		}else if(numeroArray == 7){
			return $scope.dependencias7;
		}else if(numeroArray == 8){
			return $scope.dependencias8;
		}else if(numeroArray == 9){
			return $scope.dependencias9;
		}else if(numeroArray == 10){
			return $scope.dependencias10;
		}else if(numeroArray == 11){
			return $scope.dependencias11;
		}else if(numeroArray == 12){
			return $scope.dependencias12;
		}else if(numeroArray == 13){
			return $scope.dependencias13;
		}else if(numeroArray == 14){
			return $scope.dependencias14;
		}
	}

	// verifica se elemnto escolhido possui dependências e marca suas dependências
	$scope.verificaDependencia = function(value) {
		$scope.fluxogramaCompleto.forEach(function(atualFluxograma){
			$scope.arrayDependencias.forEach(function(atual){
				if(atualFluxograma.titulo == atual.titulo){
					atualFluxograma.dependenciaAcionada = true;
					if(atual.optativa){
						$scope.buscaOptativas(atual);
					}
				}
			});
		});
	}

	// volta a configuração inicial da classe na view
	$scope.configuracaoInicial = function(){
		$scope.fluxogramaCompleto.forEach(function(atual){
			atual.dependenciaAcionada = false;
			atual.opcaoSelecionada = false;
		})
		$scope.arrayDependencias = [];
		$scope.optativaAcionada = false;
		$scope.optativaAcionada2 = false;
		$scope.optativaAcionada3 = false;
	}

	// busca em qual array a optativa selecionada se encontra
	$scope.buscaOptativas = function(optativa){
		$scope.optativasCompleto.forEach(function(atual){
			if(optativa.titulo == atual.titulo){
				if(atual.array == 1){
					$scope.optativaAcionada = true;
				}else if(atual.array == 2){
					$scope.optativaAcionada2 = true;
				}else{
					$scope.optativaAcionada3 = true;
				}
			}
		})
	}

	// desativa o evento collapse ao selecionar uma das optativas
	$scope.desativaCollapse = function(e){
		e.stopPropagation();
	}

	//ativa o evento de collapse ao selecionar uma das não optativas
	$scope.ativarCollapse = function(){
		$('.collapse').collapse('hide');
	}

	$scope.blur = function(){
		console.log("acionado");
		if(!$scope.optativaSelecionada && ($scope.optativaAcionada || $scope.optativaAcionada2 || $scope.optativaAcionada3)){
			return;
		}else{
			$scope.fluxogramaCompleto.forEach(function(atual){
						atual.dependenciaAcionada = false;
						atual.opcaoSelecionada = false;
					})
					$scope.optativaAcionada = false;
					$scope.optativaAcionada2 = false;
					$scope.optativaAcionada3 = false;
		}
		
	}
});