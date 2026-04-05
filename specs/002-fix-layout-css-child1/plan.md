# Implementation Plan: Layout and Router Cleanup

**Branch**: `002-fix-layout-css-child1` | **Date**: 2026-04-05 | **Spec**: `../spec.md`
**Input**: Feature specification from `/specs/002-fix-layout-css-child1/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Fix home and register page layout and CSS problems by centralizing styling in `App.css`, simplifying page component structure, and preserving the existing app flow. Add a sample nested `child1` route under home to show future router extension patterns, with minimal new complexity.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19, Vite
**Primary Dependencies**: React, React DOM, Vite, @tanstack/react-router, TypeScript, Jotai
**Storage**: In-memory frontend state (React and Jotai atoms)
**Testing**: No test runner exists yet; add Vitest + React Testing Library for unit tests when implementing page changes
**Target Platform**: Web browser
**Project Type**: Frontend web application
**Performance Goals**: Maintain responsive page layout and avoid unnecessary render cost
**Constraints**: Preserve existing navigation flow, centralize styling in `App.css`, keep code simple and avoid new dependencies
**Scale/Scope**: Small frontend feature scoped to existing `src/` pages and route structure

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Centralize layout fixes in `App.css` rather than inline styles.
- Preserve the existing page flow and simple React component structure.
- Maintain existing navigation behavior while adding the nested home `child1` route.
- Follow the constitution's minimal dependency rule and avoid unnecessary package additions.
- Use Jotai state management in `src/hooks/` when shared state is required.

**Gate result**: PASS if implementation keeps App.css central styling, preserves route structure, and avoids new dependencies.

## Project Structure

### Documentation (this feature)
```text
specs/002-fix-layout-css-child1/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── README.md
├── spec.md
└── tasks.md
```

### Source Code (repository root)
```text
src/
├── assets/
├── components/
│   ├── Layout.tsx
│   └── route/
│       └── router.tsx
├── hooks/
│   └── userAtoms.ts
├── pages/
│   ├── about/
│   │   └── About.tsx
│   ├── home/
│   │   ├── Home.tsx
│   │   └── child/
│   │       └── child1.tsx
│   ├── login/
│   │   └── Login.tsx
│   └── register/
│       └── Register.tsx
├── services/
│   └── Manageuser.ts
├── App.tsx
├── App.css
└── main.tsx
```

**Structure Decision**: Single frontend project using the existing `src/` layout. This feature will extend the current app structure by using `src/hooks/` for Jotai atoms and `src/services/` for any shared user logic.

## Complexity Tracking

> No constitution violations detected; cleanup work is standard for a frontend UI fix.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
