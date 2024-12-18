import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_pass from "../locators/recovery_password_page.json"
import * as resuli_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });

          afterEach('Конец теста', function () {
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           });

    it('Верный пароль и верный логин', function () {
        
         cy.get('#mail').type('german@dolnikov.ru'); // Импут логин
         cy.get('#pass').type('iLoveqastudio1'); // Импут пароль
         cy.get('#loginButton').click(); // Кнопка "войти"
         cy.get('#messageHeader').should('be.visible'); // Пользователю виден текст
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст после попытки авторизации

     })

     it('Восстановление пароля', function () {
       
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Цвет кнопки "Забыли пароль?"
        cy.get('#forgotEmailButton').click(); // Найти кнопку "Забыли пароль?"
        cy.get('#mailForgot').type('gera.pirat@mail.ru'); // Импут для почты 
        cy.get('#restoreEmailButton').click(); // Кнопка "отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Тест для пользователя
  
    })
     it('Верный логин и неверный пароль', function () {
        
         cy.get('#mail').type('german@dolnikov.ru'); // Импут логин
         cy.get('#pass').type('pupupu'); // Импут пароль
         cy.get('#loginButton').click(); // Кнопка "войти"
         cy.get('#messageHeader').should('be.visible'); // Пользователю виден текст
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст после попытки авторизации

     })

     it('Неверный логин и верный пароль', function () {
        
        cy.get('#mail').type('german@dolnikov.ruru'); // Импут логин
        cy.get('#pass').type('iLoveqastudio1'); // Импут пароль
        cy.get('#loginButton').click(); // Кнопка "войти"
        cy.get('#messageHeader').should('be.visible'); // Пользователю виден текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст после попытки авторизации
  
    })
 
     it('Валидация на наличие @', function () {
        
         cy.get('#mail').type('germandolnikov.ru'); // Импут логин
         cy.get('#pass').type('iLoveqastudio1'); // Импут пароль
         cy.get('#loginButton').click(); // Кнопка "войти"
         cy.get('#messageHeader').should('be.visible'); // Пользователю виден текст
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст после попытки авторизации
      
     })

     it('Приведение к строчным буквам в логине и верный пароль', function () {
       
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Импут логин
        cy.get('#pass').type('iLoveqastudio1'); // Импут пароль
        cy.get('#loginButton').click(); // Кнопка "войти"
        cy.get('#messageHeader').should('be.visible'); // Пользователю виден текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст после попытки авторизации
 
    })
     
 })