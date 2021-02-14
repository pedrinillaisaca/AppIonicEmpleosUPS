// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_URL = 'http://localhost:8080/parqueadero/rest/';
const API_PETER_URL = 'http://localhost:8080/api-0.0.1-SNAPSHOT/users';


export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyDMdrFXIqYIwrI1ZKnOFjbLlzwR7fWw1ZI",
    authDomain: "empleosupspedro.firebaseapp.com",
    projectId: "empleosupspedro",
    storageBucket: "empleosupspedro.appspot.com",
    messagingSenderId: "847809345440",
    appId: "1:847809345440:web:6992bcf96a1fa2fecbd6c5"
  },
  URL_GET_VEHICULOS: `${API_URL}vehiculo/coleccion`,
  URL_SAVE_VEHICULO: `${API_URL}vehiculo`,
  URL_API_REST:`${API_PETER_URL}`,
  URL_API_REST_del:`${API_PETER_URL}/`,
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
