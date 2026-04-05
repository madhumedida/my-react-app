# Quickstart: Layout and Router Cleanup

## Purpose
This feature improves the app's page layout and CSS, simplifies React page components, and adds a sample nested `child1` route for future router extensions.

## Key Files

- `src/App.css` — central styling file for layout fixes.
- `src/pages/home/Home.tsx` — home page layout and user list display.
- `src/pages/register/Register.tsx` — registration page layout and form.
- `src/components/route/router.tsx` — TanStack router configuration with the nested `child1` route.
- `src/pages/home/child/child1.tsx` — sample child page for future extension.
- `src/hooks/` — place Jotai atoms here if shared state is required.
- `src/services/Manageuser.ts` — existing service layer for user data operations.

## Implementation Steps

1. Review `src/App.css` and remove or replace any page-specific inline styles with centralized classes.
2. Clean up `src/pages/home/Home.tsx` and `src/pages/register/Register.tsx`, separating layout markup from state and interaction code.
3. Verify the home and register pages render correctly on both desktop and narrow widths.
4. Add or update the nested route in `src/components/route/router.tsx` for `/child/child1`.
5. Use Jotai for shared state if needed and place atoms in `src/hooks/`.
6. Run the app and verify the sample child page renders at `/child/child1`.

## Notes

- No external backend contract is required for this cleanup feature.
- Focus on readability and maintainability while preserving existing navigation behavior.
