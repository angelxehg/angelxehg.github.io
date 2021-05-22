---
title: Usando Firebase para autenticar en Django REST Framework
date: 2021-05-21
image: ../../images/djangofire.png
caption: Usando Firebase para autenticar en Django REST Framework
type: post
---

[Firebase](https://firebase.google.com/docs) nos ofrece una gran variedad de servicios y funcionalidades para implementar en nuestras aplicaciones, las cuales abarcan desde el desarrollo hasta la implementación y el crecimiento de nuestras aplicaciones.

Uno de los servicios más populares es [Firestore](https://firebase.google.com/docs/firestore), el cual nos ofrece una base de datos NoSQL rápida, confiable y absequible. Sin embargo, existen ocasiones en las que necesitaremos de utilizar una base de datos relacional, y esto puede ser por las caracteristicas de la aplicación, o para integrar un backend o una API legacy. Para este propósito Firebase nos permite generar un token [JWT](https://jwt.io/), con el cual podemos autenticar a nuestros usuarios en una API REST.

A continuación explicaré como utilicé Firebase Auth para autenticar en una API creada con Django REST Framework, y así alimentar de datos una PWA creada con React.

- [Demostración PWA](https://djangofire.netlify.app)
- [Código fuente PWA](https://github.com/angelxehg/djangofire-pwa)
- [Código fuente API](https://github.com/angelxehg/djangofire-api)

## Configurar Firebase en una PWA

El primer paso fue crear una Aplicación Web Progresiva con React:

- `npx create-react-app [NOMBRE_PROYECTO] --template cra-template-pwa-typescript`

Para dar un mejor diseño a la aplicación podemos utilizar una gran variedad de librerías de UI. En mi caso yo utilicé las librerías Bootstrap y React Bootstrap:

- `npm i bootstrap react-bootstrap@next`

Para importar los estilos de Bootstrap debemos modificar el archivo `index.tsx`, y añadir la siguiente linea:

- `import '../node_modules/bootstrap/dist/css/bootstrap.min.css';`

Posteriormente registré un nuevo proyecto en la [Consola de Firebase](https://console.firebase.google.com/):

- Crear una [Aplicación Web](https://firebase.google.com/docs/web/setup#register-app)

- Configurar Google como [método de acceso](https://firebase.google.com/docs/auth/web/google-signin#before_you_begin)

- Configurar [dominios autorizados](https://support.google.com/firebase/answer/6400741)

Tras obtener la configuración de la Aplicación Web, almacené estas variables en el archivo `.env.local`, para evitar publicar estos valores en el repositorio de Git. Consultar más sobre la carga de [variables de entorno en React](https://create-react-app.dev/docs/adding-custom-environment-variables/). Estas son las variables:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGE_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

Para cargar estas variables creé el archivo `firebaseConfig.ts` con el siguiente contenido:

```typescript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig;
```

Para configurar Firebase utilicé la librería [Reactfire](https://github.com/FirebaseExtended/reactfire), la cual instalé con el comando `npm install --save reactfire firebase`. Es necesario pasar la configuración al componente `FirebaseAppProvider`, en el archivo `index.tsx`:

```jsx
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
```

Para habilitar el Inicio de sesión con Google es necesario utilizar la función `signInWithPopup`, y pasar `GoogleAuthProvider` como argumento:

```tsx
import firebase from "firebase/app";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = async () => {
  return await firebase.auth().signInWithPopup(googleProvider);
}

const LoginPage = () => (
  <main className="mt-3">
    <Button onClick={loginWithGoogle}>
      Iniciar sesión con Google
    </Button>
  </main>
)
```

Puedes ver los pasos que seguí de manera más detallada en [GitHub](https://github.com/angelxehg/djangofire-pwa/commits/main).

## Conclusión

Esta API REST incluso podría acceder a Firestore, administrar usuarios, entre otras funcionalidades ofrecidas por [Firebase Admin](https://firebase.google.com/docs/admin/setup). Esta solución no esta restringida a un solo framework o lenguaje de programación, ya que esta librería esta disponible para Node.js, Java, Python, Go y C#. Así, las posibilidades se vuelven infinitas.
