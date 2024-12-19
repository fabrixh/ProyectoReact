
# Proyecto React Final

## Descripción
Este es un proyecto con React y Material-UI para el curso de React dentro de la certificación de Pilar Tecno 5ta Edición 2024, que muestra cómo manejar datos dinámicos con una API y un sistema de fake login. El objetivo es ofrecer una interfaz simple y funcional para cargar y mostrar datos con autenticación básica.

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tunombrederepositorio.git
   cd proyectoreact
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```plaintext
   REACT_APP_API_URL=<https://jsonplaceholder.typicode.com>
   REACT_APP_API_TOKEN=<No necesario en datos publicos>

   ```

4. **Arrancar el servidor de desarrollo:**
   ```bash
   npm start
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## Comandos útiles

- **Inicio del servidor:**
   ```bash
   npm start
   ```
   Este comando iniciará la aplicación en el entorno de desarrollo.

- **Construir la aplicación para producción:**
   ```bash
   npm run build
   ```
   Este comando construye la aplicación optimizada para producción.

- **Ejecutar pruebas:**
   ```bash
   npm test
   ```
   Ejecuta las pruebas configuradas en el proyecto.

---

## Estructura del Proyecto

```
proyectoreact/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── DataComponent.js
│   │   └── Login.js
│   └── utils/
│       └── fetchData.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Funcionalidades

1. **Carga de Datos:**
   - Botón para cargar datos desde una API.
   - Visualización básica de datos cargados.

2. **Sistema de Fake Login:**
   - Pantalla de inicio de sesión.
   - Credenciales predeterminadas para acceder a la aplicación:
     - **Usuario:** `admin`
     - **Contraseña:** `123456`

3. **Estilización:**
   - Uso de Material-UI para una interfaz limpia y responsive.



