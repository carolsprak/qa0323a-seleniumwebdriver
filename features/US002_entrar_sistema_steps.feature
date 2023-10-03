Feature: Entrar no sistema
	Como Anunciante ou Cliente
	Quero entrar no Publicazo
	Para utilizarem o sistema e controlar os serviços

Scenario: Pré-condição - Usuário estar na tela de login
    Given que o usuario esteja na tela de login
   
Scenario: Não autorizar a entrada no sistema sem preencher os dados
    
    When o usuario não preencher os campos e-mail e senha 
    Then clicar no botão entrar e exibir a mensagem de erro de campo obrigatório

Scenario: Não autorizar a entrada no sistema com dados inválidos
    When o usuario informar e-mail e senha inválidos
    Then clicar no botão entrar e exibir a mensagem de erro 

Scenario: Usuário entrar no sistema com sucesso
    When o usuario informar e-mail e senha válidos
    Then clicar no botão entrar e exibir a mensagem de sucesso



