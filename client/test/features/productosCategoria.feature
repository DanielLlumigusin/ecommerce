Feature: Productos por categoria

Scenario: Filtrar productos por categoría
    When Selecciono la categoría "Electronics"
    Then Solo se deben mostrar productos de la categoría "Electronics"