Feature: Productos y Filtros

  Scenario: Verificar el título de la página
    Given Yo ingreso a la página de inicio
    When Puedo ver el título de la página
    Then El título de la página debe ser "Todos los Productos"

  Scenario: Verificar el título de un Producto específico
    When Puedo ver el producto con el ID "product-1234"
    Then El título del producto debe ser "Pruebas12"

  Scenario: Agregar producto al carrito
    When Agrego el producto con el ID "product-5678" al carrito
    Then El producto debe aparecer en el carrito

  Scenario: Verificar cantidad total de productos
    When Verifico la cantidad total de productos
    Then La cantidad total de productos debe ser "50"

  Scenario: Verificar la funcionalidad de "Cargar más" productos
    When Hago clic en "Cargar más"
    Then Se deben cargar y mostrar más productos

  Scenario: Verificar que un producto tiene imagen
    When Puedo ver el producto con el ID "product-3456"
    Then El producto debe tener una imagen

  Scenario: Verificar que un producto tiene descripción
    When Puedo ver el producto con el ID "product-7890"
    Then El producto debe tener una descripción de al menos 60 caracteres

  Scenario: Resetear filtros
    Given Yo aplico filtros de categoría y precio
    When Hago clic en el botón de "Resetear"
    Then Todos los filtros deben ser removidos y mostrar todos los productos

