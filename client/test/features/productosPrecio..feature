 Feature: Productos por Precio

  Scenario: Filtrar productos por precio
    When Selecciono el rango de precios "100 - 200"
    Then Solo se deben mostrar productos con precios entre 100 y 200