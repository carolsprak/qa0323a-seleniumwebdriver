# Projeto de Selenium Webdriver para Ultima School

```bash
# Instalar o chrome para rodar os testes
$ npm install chromedriver geckodriver
$ chromedriver -version
```
```bash
# Iniciar o projeto Selenium Webdriver
$ npm init
$ npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber
$ npm install selenium-webdriver assert
$ npm install chromedriver geckodriver
```
 ```bash
# Criar a pasta features > incluir arquivo BDD
# Criar features/step-definitions > incluir arquivo JS
# Criar .gitignore
# No arquivo package.json > incluir script test
$ "node_modules/.bin/cucumber-js -f @cucumber/pretty-formatter features/* --format html:cucumber-report.html"
$ npm test
```
 ```bash
# Copiar do terminal o código BDD gerado
# Incluir no topo do arquivo JS 
$ const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
```
 ```bash
# Configuração inicial do arquivo JS 

const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');
//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();
```
 ```bash
# Para evitar o timeOut 
Given('I visit publicazo homepage', {timeout: 15 * 1000}, async () => {  })
```
 ```bash
# Para rodar no terminal apenas, colocar em comentário a linha abaixo no arquivo JS
.setChromeOptions(options)
```

 ```bash
# Caso o chrome seja atualizado, é preciso atualizar também o arquivo package.json e alterar a versão do chrome_driver.
$ npx webdriver-manager update
```
 
 ```bash
# Atualizar o webdriver do MAC
$ sudo webdriver-manager update --versions.chrome 109.0.5414.74
```






