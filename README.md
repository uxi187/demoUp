# demoUp

# Running

Use commands:

```sh
$ npx cypress open
```

This will open Cypress Test runner. Double click on test will run the test

```sh
$ npx cypress run --spec 'cypress/integration/Tests/google.spec.js' --browser chrome
```

This will run test in Chrome from CLI. If you want to run test in Electron browser then remove --browser argument 