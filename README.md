# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Pushed Based Architecture todo list

This small app is to test what I learned about pushed based architecture. We want to test a few things to really confirm that it is better than the pull based architecture.
Primarily we want to do the following things:

1. Have several views, notably siblings or completely unrelated ones that will all share the todo state. We will use a service to make changes the todo state. All views should be notified of the changes as well the backend and be in sync without adding much complexity to the code.
2. Avoid making http pull just because we navigate different routes, also avoid calling http if no data has been updated
