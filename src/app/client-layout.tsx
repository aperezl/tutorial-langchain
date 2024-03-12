"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./globals.css";

import LoginPage from "@/components/login";
import LoadingPage from "@/components/login/loading";
import { PropsWithChildren } from "react";

export const ClientLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <LoadingPage />;
    if (error) return <div>{error.message}</div>;
    if (user)
        return (
            <>
                <div><a href="/api/auth/logout">Logout</a></div>
                {children}
            </>
        );

    return <LoginPage />;
};
