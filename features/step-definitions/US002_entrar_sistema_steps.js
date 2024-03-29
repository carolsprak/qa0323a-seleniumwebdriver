const {Given, Then, When, Before, After} = require('@cucumber/cucumber');

const assert = require('assert')
const webdriver = require('selenium-webdriver');


//VARIAVEIS
 
let vars = {}

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const { Builder, By, until } = require('selenium-webdriver');

var options   = new chrome.Options().headless();
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();



 Given('que o usuario esteja na tela de login', {timeout: 30 * 1000}, async () => {      
    await driver.get('http://publicazo.insprak.com/sign_in');
    
    await driver.manage().window().setRect({ width: 700, height: 400 });  
    await driver.get('http://publicazo.insprak.com/sign_in');
  });

  When('o usuario não preencher os campos e-mail e senha', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("")   
  });

  Then('clicar no botão entrar e exibir a mensagem de erro de campo obrigatório', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.name("commit")).click()
    await driver.findElement(By.css(".toast-message")).click()   
  });

  When('o usuario informar email e senha inválidos', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("anne@mail.com")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("12345")
  });

  Then('clicar no botão entrar e exibir a mensagem de erro', {timeout: 30 * 1000}, async () => {  
    await driver.findElement(By.name("commit")).click() 
    await driver.findElement(By.css(".toast-message")).click() 
    await driver.findElement(By.xpath("(//div[contains(.,'Email ou senha inválidos.')])[3]")).click()   
    assert(await driver.findElement(By.css(".toast-message")).getText() == "Email ou senha inválidos.")
  });

 

