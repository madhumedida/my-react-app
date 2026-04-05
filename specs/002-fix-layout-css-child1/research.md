# Research: Layout and Router Cleanup

## Decision

- Centralize page layout and styling fixes in `App.css` rather than using inline styles in page components.
- Simplify the home and register page components by separating layout, state, and interaction logic.
- Add a sample `child1` nested route under the home route in `src/components/route/router.tsx` to demonstrate route extension patterns.
- Use Jotai for shared UI state if page state must be reused across components, with atoms placed in `src/hooks/`.

## Rationale

- `App.css` centralization keeps the visual design consistent and makes it easier to maintain when fixing multiple pages.
- Avoiding inline styles supports the user's request for clean, understandable React code.
- A nested route sample gives future developers a concrete router pattern without changing the existing navigation approach.
- Jotai is the constitution-approved state mechanism for shared frontend state, but the implementation should remain lightweight.

## Alternatives considered

- Keeping layout styles inline or in page-level objects: rejected because it reduces maintainability and violates the clarified preference for centralized `App.css` styling.
- Introducing CSS modules or Tailwind for this feature: rejected because the specification explicitly favors `App.css` and minimal dependency changes.
- Using only local `useState` for all page state: acceptable for very small state, but Jotai should be used when state is shared across page components or when the router sample route requires reuse.
