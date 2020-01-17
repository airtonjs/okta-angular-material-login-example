> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/airtonjs/okta-angular-material-login-example.git
cd okta-angular-material-login-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.
 
```bash
npm i
npm start
```

### Create a New OIDC App in Okta

To create a new OIDC app on Okta:

1. Log in to your developer account, navigate to **Applications**, and click on **Add Application**.
3. Select **Single-Page App** and click **Next**. 
4. Give the application a name, change all instances of `localhost:8080` to `localhost:4200` and click **Done**.

#### Configuration

Create file `src/.env.client.ts` and input this content:
```ts
let ConfigOKTA = {
  clientId: '{clientId}',
  issuer: 'https://{yourOktaDomain}/oauth2/default'
});

export {ConfigOKTA}
```
Set your domain `yourOktaDomain`  and copy the `clientId` 

**NOTE:** The value of `{yourOktaDomain}` should be something like `dev-123456.oktapreview`. Make sure you don't include `-admin` in the value!

## Links

This example uses the following open source libraries from Okta:

* [Okta JWT Verifier for Node.js](https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier)
* [Okta Angular SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).






# MaterialTicTacToe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


