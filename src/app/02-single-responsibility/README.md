<h2 align="center">
  Phase 2: The Single-Responsibility Principle
</h2>

Here, we have taken the `MonolithComponent` the previous step and have separated the responsibilities of components, a service, and reusable styles into their own atomic units:

Components:
- `SingleResponsibility` (Parent Component)
- `HeaderComponent`
- `MainComponent`
- `FooterComponent`

Service: `TaskService`

Styles:
- `_config.scss` (styles to configure app themes)
- `_utilities.scss` (styles for common classes)

When considering the single responsibility of our units of code, we want them to serve only one particular function and to do it well.
What is considered "one particular function" depends on how modular you'd like to be and striking a delicate balance between flexibility and maintainability.

For example, the `FooterComponent` could be further modularized by generating and developing one child component `FormComponent`, but I decided not to add this component since for the sake of simplicity; however, if I did decide to extend the `FooterComponent` later (like adding a `ReminderComponent` along with the `FormComponent`), then I could generate two children components and separate the `FooterComponent` code between them to further to keep in line with my version of the single-responsibility principle.

Go to [Phase 3](../03-open-closed) to view our app after applying the open-closed design principle.

Go [back](../01-the-monolith).

Go [home](https://github.com/pjnalls/ng-solid-design/).
