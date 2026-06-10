# Angular CDK ComponentPortal Directives Demo

This demo shows how Angular CDK `ComponentPortal` can apply directives to dynamically created components.

The app includes a simple checkout screen with a reusable payment help component. The same component is rendered inline with `CdkPortalOutlet` and as a floating help panel with `DomPortalOutlet`. In both cases, a shared directive is applied through the `ComponentPortal` to add host-level behavior like ARIA attributes and focus handling.

## What This Demo Shows

- Rendering a dynamic component with `ComponentPortal`
- Using `CdkPortalOutlet` for an inline portal destination in an Angular template
- Using `DomPortalOutlet` to attach a portal to a manually created DOM element
- Applying a directive to a portal-created component host
- Passing directive inputs with `inputBinding()`
- Keeping dynamic components reusable by moving context-specific host behavior into a directive

## Running the App

```bash
npm install
npm start