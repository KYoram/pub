import { createRouter, RouterProvider } from "@tanstack/react-router";
import * as ReactDOM from 'react-dom/client';
import { rootRoute } from './__root.route';
import { StrictMode } from "react";

import './app.scss';

const node = document.getElementById('root');

if (!node){
  throw new Error('Root not found, bailing');
}

const root = ReactDOM.createRoot(node);

const routeTree = rootRoute;

const router = createRouter({ 
    routeTree 
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
};

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);