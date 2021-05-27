# Advanced React & GraphQL

This project is taken from the [Advanced React & GraphQL](https://AdvancedReact.com) course by [Wes Bos](https://WesBos.com/), which I can highly recommend.

## Project config

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
