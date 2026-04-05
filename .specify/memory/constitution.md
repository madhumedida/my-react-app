<!--
Sync Impact Report
Version change: 0.1.3 → 0.1.4
Updated constraint: changed styling guidance to App.css
Added principles:
- Clean Code
- Simple UX
- Responsive Design
- Minimal Dependencies
- Test-Driven Delivery
Added sections:
- Design Constraints
- Development Workflow
Templates reviewed:
- .specify/templates/plan-template.md ✅ aligned
- .specify/templates/spec-template.md ✅ aligned
- .specify/templates/tasks-template.md ✅ aligned
Follow-up TODOs:
- None
-->

# my-react-app Constitution

## Core Principles

### Clean Code
All frontend changes MUST preserve the existing app design and follow readable, maintainable React and TypeScript patterns. Components and hooks MUST remain small, descriptive, and easy to reason about. Code clarity is the first priority for every page and CRUD flow.

### Simple UX
Every page MUST present only the controls needed for the current task and avoid visual or interaction complexity. The UI flow MUST stay intuitive and aligned with the current design. New behavior MUST support clear, predictable CRUD operations without adding unnecessary options.

### Responsive Design
The application MUST work cleanly across mobile, tablet, and desktop viewports. Layouts, spacing, and page structure MUST adapt fluidly so CRUD pages remain usable at every breakpoint. No page SHOULD require separate device-specific implementations.

### Minimal Dependencies
New runtime dependencies MUST be avoided unless they are essential for maintainability, responsive behavior, or testability. Existing packages and built-in React/Tailwind capabilities MUST be reused wherever possible. External libraries are only allowed when the benefit clearly outweighs added complexity.

### Test-Driven Delivery
Unit tests MUST be created for every page before finalizing implementation. Each page-level test MUST validate the page's data flow, CRUD behavior, and preservation of the existing design. Regression prevention is mandatory and test coverage MUST accompany page changes.

## Design Constraints
Preserve the existing page structure and interaction flow while implementing CRUD features. Use the current `src/pages/` routing and existing component hierarchy rather than introducing a new UI architecture. Add or update pages only when they respect the existing design language and page transitions.

- Implement CRUD operations using the existing frontend flow and navigation patterns.
- Use `App.css` for styling, TanStack React Router for navigation, and Jotai for client-side state management.
- Organize Jotai state management files within the `src/hooks/` folder to keep state logic separated and discoverable.
- Implement API calls through a dedicated `src/services/` folder so network logic is centralized and reusable.
- Add unit tests for each page to verify functionality and design consistency.
- Do not introduce visual complexity, new page paradigms, or nonessential dependencies.
- Prefer reusable components and existing styling conventions.

## Development Workflow
The implementation workflow MUST be incremental and test-driven. Work should proceed one page or CRUD operation at a time, with a test written first for each page.

- Write failing unit tests for a page before implementing its CRUD behavior.
- Validate every page against clean code, simple UX, responsive design, and minimal dependency principles.
- Implement state management with Jotai and preserve TanStack routing for page flows.
- Document any dependency additions and justify them against maintainability and design preservation.
- Review PRs for both functional correctness and conformity to the existing user experience.

## Governance
This constitution is the authoritative guide for frontend decisions in `my-react-app`. All proposed changes MUST be evaluated against these principles before merging.

- Amendments require documented rationale and team review.
- Every PR MUST include a constitution compliance checklist referencing the four core principles and test-driven delivery.
- Patch version bumps are used for wording and clarity refinements.
- Minor version bumps are used when adding principles, sections, or material workflow guidance.
- Major version bumps are used only for governance redefinitions or principle removals.

**Version**: 0.1.4 | **Ratified**: 2026-04-05 | **Last Amended**: 2026-04-05
