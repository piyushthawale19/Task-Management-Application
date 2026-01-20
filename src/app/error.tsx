"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-orange-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-destructive to-orange-500 flex items-center justify-center shadow-2xl shadow-destructive/30"
          >
            <AlertTriangle className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
            We hit an unexpected snag. This error has been logged and we&apos;ll look into it.
          </p>
        </motion.div>

        {error.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-block glass-card p-4 rounded-xl text-left max-w-md">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Bug className="w-4 h-4" />
                <span>Error details</span>
              </div>
              <p className="text-sm font-mono text-destructive break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  ID: {error.digest}
                </p>
              )}
            </div>
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          If this keeps happening, please contact support.
        </motion.p>
      </div>
    </div>
  );
}
