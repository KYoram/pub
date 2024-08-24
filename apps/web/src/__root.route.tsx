import { createRootRoute } from "@tanstack/react-router";
import { NotFoundComponent, RootComponent } from "./components";

export const rootRoute = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundComponent
});