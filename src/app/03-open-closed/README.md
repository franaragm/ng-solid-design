<h2 align="center">
  Phase 3: The Open-Closed Principle
</h2>

After adding modularity to our monolithic app with the single-responsibility principle in mind, we can consider the open-closed principle of SOLID design to ensure our components are **open** to expendability but **closed** to modification.

A simple example of this would be for us to utilize the `ng-content` selector in a wrapper component called `SectionContentComponent`.

This allows us to reuse the semantic `<section>` markup for each section of content we want to add to our group of main components. We can extend the `SectionContentComponent` and reuse the `app-section-content` component selector in our `<main>` parent element within our `OpenCloseComponent` app container as many times as we'd like without altering the `SectionContentComponent` in any way.

Go to [Phase 4](../04-liskov-substitution/) to view our app after applying the Liskov substitution design principle.

Go [back](../02-single-responsibility).

Go [home](https://github.com/pjnalls/ng-solid-design/).
