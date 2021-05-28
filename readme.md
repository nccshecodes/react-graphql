# Advanced React & GraphQL

This project is taken from the [Advanced React & GraphQL](https://AdvancedReact.com) course by [Wes Bos](https://WesBos.com/), which I can highly recommend.

## Project config

### Architecture

Component and page files are kept separate.

#### Components

- Group all related files in a single directory
- Use `PascalCase` for file names eg. `CustomComponent.js`
- Use an `index.js` to export the component from the root of the directory

```
src
└ components
  └ Button
    |- Button.js => main component code
    |- Button.spec.js => testing-library test
    |- ButtonStyles. => css styles as styled-component
    |- README.md => API documentation
    └─ index.js => named export
```

#### Pages

Page files are used to create routing, where the file name is used as the url. For this reason, use `kebab-case` for file names [url structure](https://moz.com/learn/seo/url)

- `about.js` becomes `mydomain.com/about`
- `contact-us.js` becomes `mydomain.com/contact-us`

### Front End

- next.js
- styled-components

#### [NProgress](https://github.com/rstacruz/nprogress)

This adds a visual effect to show the user that something is 'happening' when a link is clicked. The intention being that this is useful feedback for the user if the connection is slow for whatever reason. It works by hooking into Router events. Take a look at `_app.js` to see implementation.

### Back End

- MongoDB
- KeystoneJS (CMS)
- Typescript

#### MongoDB Atlas

Hosted service witha free tier providing useful reporting and analytics as well as the database itself.

- create organisation
- create database (project)
- create cluster
- connect via MongoDB Compass using the pre-formatted connection string provided from `Connect your application`
