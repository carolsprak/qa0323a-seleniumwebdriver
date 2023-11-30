const {Given, Then, When, Before, After} = require('@cucumber/cucumber');

const assert = require('assert')
const webdriver = require('selenium-webdriver');

//VARIAVEIS
const string = "anne12@mail.com"; 
const string2 = "123456";

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

 Given('que o usuario esteja na tela de login', {timeout: 30 * 1000}, async () => {      
    await driver.get('http://locahost:5013/login');
    await driver.manage().window().setRect({ width: 700, height: 400 }); 
  });

  When('o usuario não preencher os campos e-mail e senha', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("")   
  });

  Then('clicar no botão entrar e exibir a mensagem de erro de campo obrigatório', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.name("commit")).click()
  });

  When('o usuario informar {string} e {string} inválidos', {timeout: 30 * 1000}, async (string, string2) => {  
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys(string)
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys(string2)   
  });

  Then('clicar no botão entrar e exibir a mensagem de erro', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.name("commit")).click() 
   
  });

  When('o usuario informar e-mail e senha válidos',  {timeout: 30 * 1000}, async () => {  

    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("anne12@mail.com")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("123456")
  });

  Then('clicar no botão entrar e exibir a mensagem de sucesso', {timeout: 30 * 1000}, async () => {  
    driver.findElement(By.name("commit")).click()
    driver.findElement(By.css(".toast-message")).click()
    driver.close()
  });

