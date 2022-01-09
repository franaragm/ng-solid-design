<h2 align="center">
  Phase 5: The Interface Segregation Principle
</h2>

After creating, inheriting, and extending our base `class SectionBase`, we want to ensure we add separation between our interfaces to allow for flexible consumption of each one.

In the example code provided, the modularity of our interfaces allows our components in the `components/` directory to implement one or both of our `Tasks` and `Deletable` interfaces.

Go to [Phase 5](../06-dependency-inversion/) to view our app after applying the interface segregation design principle.

Go [back](../04-liskov-substitution).

Go [home](https://github.com/pjnalls/ng-solid-design/).