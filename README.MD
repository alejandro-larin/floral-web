# 🌸 Floral Web

![Portada Floral](./assets/img/docs.png)

Una aplicación web estática con autenticación elegante, UI responsiva y una experiencia visual inspirada en la naturaleza.

## ✨ Descripción

**Floral** es un proyecto de frontend que ofrece:
- Interfaz moderna y minimalista
- Páginas de inicio de sesión y registro
- Validación de formularios con mensajes claros
- Gestión de sesión mediante token en cookies
- Notificaciones toast para errores y acciones exitosas

## 🚀 Características principales

- ✅ **Página principal** con experiencia de bienvenida
- ✅ **Autenticación** con `sign-in` y `sign-up`
- ✅ **Validación de datos** en formularios
- ✅ **Redirección segura** entre rutas privadas y de autenticación
- ✅ **Diseño responsivo** con CSS personalizado

## 🧩 Estructura del proyecto

```text
/floral-web
  ├── index.html
  ├── README.MD
  ├── assets/
  │   ├── css/
  │   │   ├── globals.css
  │   │   ├── index.css
  │   │   ├── sign.css
  │   │   └── toast.css
  │   ├── img/
  │   │   ├── background.webp
  │   │   ├── docs.png
  │   │   └── icon.webp
  │   └── js/
  │       ├── auth.js
  │       ├── index.js
  │       ├── signIn.js
  │       ├── signUp.js
  │       ├── components/
  │       │   └── toast.js
  │       └── lib/
  │           ├── const.js
  │           ├── error.js
  │           ├── redirect.js
  │           ├── tokenCookie.js
  │           └── userStorage.js
  └── auth/
      ├── sign-in/
      │   └── index.html
      └── sign-up/
          └── index.html
```

## 📁 Rutas importantes

- `/floral-web/` → Página de inicio
- `/floral-web/auth/sign-in/` → Iniciar sesión
- `/floral-web/auth/sign-up/` → Registrar nuevo usuario

## 🛠️ Tecnologías usadas

- HTML5
- CSS3
- JavaScript moderno (ES Modules)
- Cookies para manejo de sesión
- Validación en frontend

## ▶️ Cómo ejecutar

1. Abre el proyecto en tu navegador.
2. Abre `index.html` desde la carpeta raíz o usa un servidor estático.
3. Navega a `/auth/sign-in/` o `/auth/sign-up/` para probar la autenticación.


## 💡 Notas adicionales

- La lógica de autenticación y redireccionamiento se controla con `assets/js/auth.js` y `assets/js/lib/tokenCookie.js`.
- Los toasts aparecen en las páginas para notificar errores o acciones exitosas.
- El CSS está optimizado para una experiencia visual limpia y moderna.

## 📌 Contacto

Para mejoras o ideas, simplemente edita los archivos `HTML`, `CSS` y `JS` según necesites.

¡Disfruta creando con **Floral**! 🌿
