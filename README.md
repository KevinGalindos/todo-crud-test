Hola, este proyecto fue realizado por Kevin Galindo - Frontend Developer

Para visualizar el proyecto debemos tener en cuenta los siguientes pasos:

- Debemos clonar el repositorio, para esto abrimos la terminal de windows o Mac, verificamos la ubicación del directorio, que sepamos donde estamos ubicados, puede ser escritorio, documentos o donde prefiera, seguidamente en la terminal vamos a escribir el siguiente comando:
- `git clone https://github.com/KevinGalindos/todo-crud-test`
- Cuando finalice de clonar ingresamos a la carpeta que contiene el proyecto y escribimos:
- `npm install`
- Esperamos a que instale todos los modulos y dependencias del proyecto
- A continuación con el comando `npm run dev` para abrir el proyecto.
- Revisamos el puerto en el que se abrio, y damos control + click, esto abrira el proyecto en el navegador.
- Recordemos que la api crud crud es publica y tiene limitadas el numero de peticiones.
- El usuario del login esta en la documentación facilitada para el challenge.


  NOTA!! La api de crud crud tiene restricciones de CORS por los Origins, entonces para solucionar esto temporalmente se debe instalar una extensión de chrome, que gestiona esos permisos de CORS
  - El nombre de la extensión que utilicé es: MOESIF Origin & CORS Changer, recordemos que se debe encender en la parte superior del navegador donde aparecen las extensiones.
 


-------------------------------------------------------------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
