# Calculadora de Cuentas Compartidas con Propina

Este proyecto es una aplicación web sencilla que permite dividir el total de una cuenta entre varias personas, incluyendo la opción de añadir un porcentaje de propina. También permite calcular cuentas individuales para cada persona en caso de que los montos de cada uno sean diferentes.

## Funcionalidades

1. **Cálculo General:**

   - Permite ingresar el balance total de la cuenta, el número de personas y el porcentaje de propina.
   - Calcula el monto que debe pagar cada persona, dividiendo equitativamente el total de la cuenta y la propina.

2. **Cálculo de Cuentas Separadas:**
   - Permite crear una cantidad personalizada de inputs para ingresar los montos individuales de cada persona.
   - Calcula la propina proporcional de cada cuenta y muestra el total a pagar para cada persona.

## Estructura del Proyecto

El proyecto está compuesto por dos secciones principales:

1. **Cálculo Equitativo:**  
   Esta funcionalidad permite calcular la división equitativa de una cuenta entre varias personas, incluyendo un porcentaje de propina.

2. **Cálculo de Cuentas Separadas:**  
   Aquí se pueden agregar varias cuentas para personas individuales y se calcula la propina proporcional para cada una, mostrando el total a pagar.

### Archivos Principales

- `index.html`: Contiene el HTML de la interfaz, con los formularios y botones necesarios para ingresar los datos.
- `script.js`: Contiene la lógica del cálculo para ambas funcionalidades (cálculo general y cuentas separadas).
- `style.css`: Contiene los estilos para mejorar la presentación de la aplicación.

## Uso

### 1. Cálculo Equitativo

- Ingresar el balance total de la cuenta.
- Ingresar el número de personas que compartirán la cuenta.
- Ingresar el porcentaje de propina.
- Al hacer clic en el botón "Calcular", se mostrará el monto que debe pagar cada persona.

### 2. Cálculo de Cuentas Separadas

- Ingresar la cantidad de personas que tienen cuentas separadas.
- Para cada persona, ingresar su balance individual en los campos generados.
- Ingresar el porcentaje de propina.
- Al hacer clic en "Calcular", se mostrará el total a pagar por cada persona, incluyendo la propina.

## Ejemplo de Uso

### Cálculo Equitativo

1. Balance total: 100 USD
2. Número de personas: 4
3. Porcentaje de propina: 15%

Resultado: Cada persona debe pagar $28.75.

### Cálculo de Cuentas Separadas

1. Ingresar 3 personas con montos individuales: 50 USD, 30 USD, 20 USD.
2. Porcentaje de propina: 10%

Resultado:

- Persona 1: $55.00
- Persona 2: $33.00
- Persona 3: $22.00

## Tecnologías Utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para la presentación y el diseño visual.
- **JavaScript**: Para la lógica y las interacciones dinámicas con el usuario.

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio o descargar los archivos.
2. Abrir el archivo `index.html` en cualquier navegador web.
3. Interactuar con la interfaz para hacer cálculos de cuentas compartidas o separadas.
