import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = (): ReturnType<typeof useMeQuery> => {
    const { data, loading, ...rest } = useMeQuery();
    const router: NextRouter = useRouter();
    useEffect(() => {
        if (["/login", "/signup"].includes(router.pathname)) {
            if (!loading && data?.me != null) {
                router.push("/");
            }
            return;
        }
        if (!loading && !data?.me) {
            router.replace("/login?next=" + router.pathname);
        }
    }, [loading, data, router]);
    return { data, loading, ...rest };
};
