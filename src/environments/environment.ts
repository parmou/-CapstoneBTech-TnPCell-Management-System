// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCqF99Hh63ld4p7rYB180fjXazzSChugLM",
    authDomain: "tnpcell-management-system.firebaseapp.com",
    databaseURL: "https://tnpcell-management-system.firebaseio.com",
    projectId: "tnpcell-management-system",
    storageBucket: "gs://tnpcell-management-system.appspot.com/",
    messagingSenderId: "207379659986"
  }
};
