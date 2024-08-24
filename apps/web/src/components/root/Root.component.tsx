import { Outlet } from "@tanstack/react-router";
import { FC } from "react";

import './root.module.scss';

export const RootComponent: FC = () => {
    return (
        <>
            <aside>
                aside
            </aside>
            <main>
                <Outlet />
            </main>
        </>
    );
};