### Typescript en Redux

- [redux typescript tutorial](https://redux-toolkit.js.org/tutorials/typescript)

# React + TypeScript + Vite

- Install [react-redux @reduxjs/toolkit](https://blog.logrocket.com/using-typescript-redux-toolkit/) is important to say that `As of React Redux v7.2.3, the react-redux package has a dependency on @types/react-redux, so the type definitions will be automatically installed with the library. Otherwise, you'll need to manually install them yourself (typically npm install @types/react-redux ).`

- Fue necesario borrar los módulos y actualizar react en package.json a "react": "^18.3.1",
  y también reiniciar vscode.

```
npm i react-redux @reduxjs/toolkit

```

## Conecta nuestra app con redux

- npm install react-redux

### Configuración de Store

- crear store.ts

```ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- Debes crear el archivo app/hooks, [revisa](https://redux-toolkit.js.org/tutorials/typescript)

### Definir Slice

Cada "slice" se encarga de un aspecto específico del estado de la aplicación y tiene su propio conjunto de acciones y reductor

En Redux Toolkit, se utiliza la función **createSlice** para crear un "slice". Esta función toma un objeto que contiene el estado inicial, las acciones y el reductor, y devuelve un objeto que contiene el reductor, las acciones y el nombre del "slice".
