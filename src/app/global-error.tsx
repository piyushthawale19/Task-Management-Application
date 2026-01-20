"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-orange-500/5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-destructive to-orange-500 flex items-center justify-center shadow-2xl shadow-destructive/30">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Something went wrong!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                We encountered an unexpected error. Don&apos;t worry, our team has been notified.
              </p>
            </motion.div>

            {error.digest && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground"
              >
                <Bug className="w-4 h-4" />
                <span>Error ID: {error.digest}</span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={reset}
                className="text-base px-6 h-12 bg-gradient-to-r from-destructive to-orange-500 hover:opacity-90 transition-all shadow-lg shadow-destructive/30"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try again
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-base px-6 h-12">
                  <Home className="w-5 h-5 mr-2" />
                  Go home
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
