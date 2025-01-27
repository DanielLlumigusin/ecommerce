Feature: Agregar producto al Carrito

  Scenario: Agregar un producto al carrito
    Given el usuario está en la página del carrito de compras
    When el usuario agrega un producto llamado "Producto A" con precio "$10.00"
    Then el carrito debería mostrar el producto "Producto A"
    And el total debería ser "$10.00"