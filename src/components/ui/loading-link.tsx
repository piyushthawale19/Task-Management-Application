"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    showLoader?: boolean;
    className?: string;
}

export function LoadingLink({ href, children, showLoader = true, className, ...props }: LoadingLinkProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.onClick) {
            props.onClick(e);
        }

        if (!e.defaultPrevented) {
            e.preventDefault();
            setIsLoading(true);

            startTransition(() => {
                router.push(href);
            });
        }
    };

    const loading = isLoading || isPending;

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={cn(
                className,
                loading && "pointer-events-none opacity-75"
            )}
            {...props}
        >
            <span className="inline-flex items-center gap-2">
                {loading && showLoader && <Loader2 className="w-4 h-4 animate-spin" />}
                {children}
            </span>
        </Link>
    );
}
