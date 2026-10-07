# Trabajo Práctico Integrador N° II - Frontend

Aplicación web desarrollada en **React** con **Vite** y **Tailwind CSS** que funciona como el frontend del sistema de gestión de blog, consumiendo la API REST del Trabajo Práctico Integrador N° I.

## Tecnologías utilizadas

- **React** (Componentes funcionales, useState, useEffect)
- **Vite** (Entorno de desarrollo y HMR)
- **Tailwind CSS** (Estilos utilitarios)
- **React Router** (Navegación SPA y protección de rutas)
- **Custom Hooks**: `useFetch`, `useForm`

## Repositorio del Backend

Esta aplicación requiere que el backend esté ejecutándose en `http://localhost:3000`.

- **Repositorio Backend**: [Trabajo Práctico Integrador N° I](https://github.com/TU-USUARIO/trabajo-practico-integrador-1)

## Funcionalidades extras que agregué para practicar y probar

Página de Perfil (ProfilePage) con filtrado: Almacenar el username en localStorage durante el login y filtrar los artículos para mostrar únicamente los que creó el usuario autenticado en /profile.

Edición y eliminación de artículos (EditArticlePage y borrado): El flujo completo para modificar publicaciones (/articles/edit/:id) y la opción de eliminarlas con confirmación (window.confirm).

Vista de Detalle completa (ArticleDetailPage): La ruta /articles/:id para ingresar a leer una publicación individual con su contenido extendido.

Manejo adaptable de fechas de Sequelize: La lógica para interpretar y formatear tanto createdAt como created_at de forma dinámica en las tarjetas y detalles.
