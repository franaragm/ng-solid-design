<h2 align="center">
  Phase 6: The Dependency Inversion Principle
</h2>

Lastly, we create a loose coupling between high-level components and low-level interfaces by creating an additional level of abstraction with `InjectionToken`s and specifying `@ContentChild`-ren in our base `SectionContentComponent`.

This allows us to invert the dependency of our components away from our interfaces to allow those components to be more independent. 

Go to [Phase 7](../07-final-app/) to view the final phase of the app.

Go [back](../05-interface-segregation/).

Go [home](https://github.com/pjnalls/ng-solid-design/).
