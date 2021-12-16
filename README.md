# How to set up Cypress

Follow this [tutorial](https://www.youtube.com/watch?v=avb-VDa3ZG4).

- install: 
```
    npm install cypress
```

- run: 
```
    npx cypress open
```

## Optionally done before running

- Configure cypress.json e.g.:
```
{
    "baseUrl": "http://localhost:3000",
    "ignoreTestFiles": ["**/2-advanced-examples/*", "**/1-getting-started/*"],
    "viewportWidth": 1920,
    "viewportHeight": 1080
}
```

- Add tests to cypress/integration with the extension "*.spec.js*"

- Add `/// <reference types="cypress" />` to those files to help with autocompletion