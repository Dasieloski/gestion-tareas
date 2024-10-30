# Gestión de Tareas

## Descripción

Aplicación simple de gestión de tareas desarrollada con React, Vite.js, TypeScript y Material UI.

## Características

- Ver una lista de tareas.
- Agregar una nueva tarea.
- Marcar una tarea como completada.
- Eliminar una tarea.
- Persistencia de datos usando `localStorage`.

## Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/dasieloski/gestion-tareas.git
   ```

2. **Navegar al Directorio del Proyecto**

   ```bash
   cd gestion-tareas
   ```

3. **Instalar las Dependencias**

   ```bash
   npm install
   ```

   O si usas yarn:

   ```bash
   yarn
   ```

4. **Ejecutar la Aplicación en Modo de Desarrollo**

   ```bash
   npm run dev
   ```

   O con yarn:

   ```bash
   yarn dev
   ```

5. **Abrir en el Navegador**

   Abre [http://localhost:5173](http://localhost:5173) para ver la aplicación.

## Construcción para Producción

1. **Para construir la aplicación para producción:**

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados listos para ser desplegados.

## Despliegue

Después de construir la aplicación, puedes desplegarla en cualquier servicio de alojamiento estático como **Vercel**, **Netlify** o **GitHub Pages**. A continuación, se muestra un ejemplo básico para desplegar en GitHub Pages:

1. **Instalar `gh-pages`**

   ```bash
   npm install --save-dev gh-pages
   ```

   O con yarn:

   ```bash
   yarn add --dev gh-pages
   ```

2. **Agregar Scripts en `package.json`**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Desplegar la Aplicación**

   ```bash
   npm run deploy
   ```

   O con yarn:

   ```bash
   yarn deploy
   ```

## Decisiones Técnicas

- **Vite.js**: Elegido por su rápido tiempo de arranque y optimizaciones de construcción eficientes, lo que mejora la experiencia de desarrollo.
- **React con TypeScript**: Permite el uso de tipado estático, lo que ayuda a prevenir errores y mejora la mantenibilidad del código.
- **Material UI (MUI)**: Proporciona una amplia gama de componentes de interfaz de usuario personalizables, lo que acelera el desarrollo y asegura una apariencia consistente.
- **`localStorage`**: Utilizado para la persistencia de datos en el cliente, permitiendo que las tareas se mantengan entre recargas de página.

## Mejoras Futuras

- **Autenticación de Usuarios**: Implementar un sistema de autenticación para que múltiples usuarios puedan gestionar sus propias tareas de forma segura.
- **Integración con Backend Real**: Conectar la aplicación con una API backend para una gestión persistente y segura de las tareas.
- **Paginación Avanzada**: Mejorar la paginación para manejar un mayor número de tareas de manera más eficiente.
- **Tests Automatizados**: Añadir pruebas unitarias y de integración para asegurar la calidad y funcionalidad del código.
- **Funcionalidades Adicionales**:
  - **Filtros y Búsquedas**: Permitir a los usuarios filtrar tareas por estado (completadas, pendientes) o buscar tareas específicas.
  - **Prioridades y Categorías**: Añadir campos para establecer prioridades o categorías a las tareas.
  - **Interfaz Responsiva**: Optimizar la aplicación para una mejor experiencia en dispositivos móviles.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. **Fork** el repositorio.
2. **Clona** tu fork localmente:

   ```bash
   git clone https://github.com/dasieloski/gestion-tareas.git
   ```

3. **Crea una rama** para tu feature o fix:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

4. **Realiza tus cambios** y **commitea**:

   ```bash
   git commit -m "Descripción de tus cambios"
   ```

5. **Envía** tus cambios a tu fork:

   ```bash
   git push origin nombre-de-tu-rama
   ```

6. **Abre un Pull Request** en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Correo Electrónico**: [dasieldev@gmail.com](mailto:dasieldev@gmail.com)
- **GitHub**: [dasieloski](https://github.com/dasieloski)

---

¡Gracias por revisar mi proyecto de Gestión de Tareas! Espero que cumpla con las expectativas de la entrevista y demuestre mis habilidades en desarrollo frontend con React, Vite.js, TypeScript y Material UI.
