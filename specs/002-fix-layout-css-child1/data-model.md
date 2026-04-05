# Data Model: Layout and Router Cleanup

## Key Entities

### User
Represents the registered user entries displayed on the home page.

- `id` (string): Unique identifier for the user.
- `firstName` (string): User's first name.
- `lastName` (string): User's last name.
- `email` (string): User's email address.
- `phone` (string): User's phone number.

### Page Layout
Represents the visual arrangement of components, spacing, and responsive styles across home and register pages.

- `header` area: navigation and page title.
- `content` area: main page content, such as user list, form, or cards.
- `action` area: buttons and links for page actions.

### Route Tree
Represents the nested routing structure used by TanStack React Router.

- `rootRoute`: top-level app layout.
- `homeRoute`: home page route at `/`.
- `child1Route`: nested route under home at `/child/child1`.
- `registerRoute`: register page route at `/register`.

## State Management

- Use Jotai atoms in `src/hooks/` for any shared state, such as user list or popup visibility.
- Keep local component state in page components only when it is not shared across routes.

## Validation Rules

- Registration and edit inputs must not be empty.
- Layout components must be responsive and avoid overflow.
- Route configuration must preserve the home route and support nested child routes.
