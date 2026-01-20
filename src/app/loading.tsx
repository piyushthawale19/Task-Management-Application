import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center">
        <div className="relative">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-xl shadow-primary/30">
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-purple-600 blur-xl opacity-30 animate-pulse" />
        </div>
        <p className="mt-6 text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}
