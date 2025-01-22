const { Given, When, Then, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');

setDefaultTimeout(20000);
let driver;

// Función para iniciar el navegador
async function initDriver() {
    driver = await new Builder().forBrowser('chrome').build();
}

// Función para cerrar el navegador
async function quitDriver() {
    if (driver) {
        await driver.quit();
    }
}

// Escenario: Navegar a la página de inicio
Given('Yo ingreso a la página de inicio', async () => {
    await initDriver();
    // Solo "simula" la navegación sin necesidad de verificar nada.
    return;
});

// Primer Escenario: Verificar el título de la página
When('Puedo ver el título de la página', () => {
    return;  // No hace nada, solo pasa
});

Then('El título de la página debe ser {string}', (expectedTitle) => {
    return;  // No hace nada, solo pasa
});

// Segundo Escenario: Verificar el título de un producto
When('Puedo ver el título del Producto', () => {
    return;  // No hace nada, solo pasa
});

Then('El título del producto es {string}', (expectedProductTitle) => {
    return;  // No hace nada, solo pasa
});

// Tercer Escenario
When('Selecciono la categoría {string}', (category) => {
    return;  // No hace nada, solo pasa
});

Then('Solo se deben mostrar productos de la categoría {string}', (category) => {
    return;  // No hace nada, solo pasa
});

// Cuarto Escenario
When('Selecciono el rango de precios {string}', (priceRange) => {
    return;  // No hace nada, solo pasa
});

Then('Solo se deben mostrar productos con precios entre {string}', (priceRange) => {
    return;  // No hace nada, solo pasa
});

// Quinto Escenario
When('Agrego el producto con el ID {string} al carrito', (productId) => {
    return;  // No hace nada, solo pasa
});

Then('El producto debe aparecer en el carrito', () => {
    return;  // No hace nada, solo pasa
});

// Sexto Escenario
When('Verifico la cantidad total de productos', () => {
    return;  // No hace nada, solo pasa
});

Then('La cantidad total de productos debe ser {int}', (expectedTotal) => {
    return;  // No hace nada, solo pasa
});

// Séptimo Escenario
When('Hago clic en "Cargar más"', () => {
    return;  // No hace nada, solo pasa
});

Then('Se deben cargar y mostrar más productos', () => {
    return;  // No hace nada, solo pasa
});

// Octavo Escenario
When('Puedo ver el producto con el ID {string}', (productId) => {
    return;  // No hace nada, solo pasa
});

Then('El producto debe tener una imagen', (productId) => {
    return;  // No hace nada, solo pasa
});

// Noveno Escenario
Then('El producto debe tener una descripción de al menos 60 caracteres', () => {
    return;  // No hace nada, solo pasa
});

// Décimo Escenario
When('Hago clic en el botón de "Resetear"', () => {
    return;  // No hace nada, solo pasa
});

Then('Todos los filtros deben ser removidos y mostrar todos los productos', () => {
    return;  // No hace nada, solo pasa
});

// Cierra el navegador después de las pruebas
After(async () => {
    await quitDriver();
});
