# Tasks: Layout and Router Cleanup

**Input**: Design documents from `/specs/002-fix-layout-css-child1/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the existing frontend structure and styling foundation before page changes.

- [ ] T001 [P] Create `App.css` layout classes for responsive page containers, cards, tables, and forms in `src/App.css`
- [ ] T002 [P] Add `src/hooks/userAtoms.ts` as a placeholder for shared Jotai state used by home and register pages
- [ ] T003 [P] Review and document the current router structure in `src/components/route/router.tsx` to support nested routes cleanly

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implement the shared page layout and clean code foundations that all story work depends on.

- [ ] T004 [P] Remove inline layout styling from `src/pages/home/Home.tsx` and replace it with `App.css` class names
- [ ] T005 [P] Remove inline form layout styling from `src/pages/register/Register.tsx` and replace it with `App.css` class names
- [ ] T006 [P] Refactor `src/pages/home/child/child1.tsx` to a clean sample page with minimal content and clear structure
- [ ] T007 [P] Simplify `src/services/Manageuser.ts` keeping service logic central and easy to read for shared user operations

---

## Phase 3: User Story 1 - Fix page layout and styles (Priority: P1)

**Goal**: Make home and register pages visually consistent, aligned, and responsive using centralized CSS.

**Independent Test**: Open the home and register pages and confirm the pages render with proper spacing, aligned elements, and no broken layout on desktop and narrow views.

- [ ] T008 [US1] Fix home page layout and user list styling in `src/pages/home/Home.tsx` using centralized `App.css` classes
- [ ] T009 [US1] Fix registration page form layout and spacing in `src/pages/register/Register.tsx` using centralized `App.css` classes
- [ ] T010 [US1] Update `src/App.css` to include responsive container, card, table, and form styles used by home and register pages
- [ ] T011 [US1] Improve register page validation display in `src/pages/register/Register.tsx` so blank fields do not break layout

---

## Phase 4: User Story 2 - Simplify React code and page structure (Priority: P2)

**Goal**: Clean up page component code so the React flow is easy to read and maintain.

**Independent Test**: Inspect the updated home and register source files and verify they use simple, component-driven structure with readable JSX and separated state logic.

- [ ] T012 [US2] Simplify `src/pages/home/Home.tsx` by separating state, actions, and render markup into clear sections
- [ ] T013 [US2] Simplify `src/pages/register/Register.tsx` by isolating form state and removing unnecessary inline presentation logic
- [ ] T014 [US2] Refactor `src/components/route/router.tsx` to keep nested routes simple and easy to extend
- [ ] T015 [US2] Update `src/hooks/userAtoms.ts` to expose any shared page state needed for home/register interactions

---

## Phase 5: User Story 3 - Add a sample child1 page route for future extension (Priority: P3)

**Goal**: Provide a clean nested route example under home without changing the existing navigation flow.

**Independent Test**: Navigate to `/child/child1` and verify the sample page renders successfully.

- [ ] T016 [US3] Add the sample nested route `/child/child1` under the home route in `src/components/route/router.tsx`
- [ ] T017 [US3] Ensure `src/pages/home/child/child1.tsx` renders a minimal, easy-to-read sample page
- [ ] T018 [US3] Verify route navigation to `/child/child1` works and does not break the existing home or register routes

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup, validation, and test creation to ensure the feature is complete.

- [ ] T019 [P] Run the app and fix any remaining responsive layout issues in `src/App.css`
- [ ] T020 [P] Add unit tests for `src/pages/home/Home.tsx` and `src/pages/register/Register.tsx`
- [ ] T021 [P] Clean up comments and formatting in `src/pages/home/Home.tsx`, `src/pages/register/Register.tsx`, and `src/components/route/router.tsx`
- [ ] T022 [P] Review `specs/002-fix-layout-css-child1/quickstart.md` and confirm implementation matches the documented validation steps

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all story work
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all story phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Can proceed independently of User Story 1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independently testable once routing structure is in place

### Parallel Execution Examples

- `T001`, `T002`, and `T003` can run in parallel because they update shared foundations in separate files
- `T004`, `T005`, and `T006` can run in parallel as they clean different page components and sample page structure
- `T008`, `T009`, and `T010` can run in parallel once the foundational layout classes exist
- `T016`, `T017`, and `T018` can run in parallel for the child route example

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate home and register layout and styling
5. Continue with User Story 2 and User Story 3 in the same iteration if ready
