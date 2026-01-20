"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Zap, Shield, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">TaskFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">Sign in</Button>
            </Link>
            <Link href="/register">
              <Button className="text-sm bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Introducing TaskFlow 2.0</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Organize your work,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
              amplify your focus
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The modern task management app that helps teams and individuals stay organized, 
            focused, and productive. Simple, beautiful, and powerful.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/register">
              <Button size="lg" className="text-base px-8 h-14 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all shadow-xl shadow-primary/30">
                Start for free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-base px-8 h-14 hover:bg-accent transition-all">
                View demo
              </Button>
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-b from-muted/50 to-transparent p-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-8 space-y-4">
                <TaskPreviewItem title="Design system review" status="completed" priority="high" delay={0.8} />
                <TaskPreviewItem title="User research interviews" status="in_progress" priority="medium" delay={0.9} />
                <TaskPreviewItem title="API documentation" status="todo" priority="low" delay={1.0} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TaskPreviewItem({ title, status, priority, delay }: { title: string; status: string; priority: string; delay: number }) {
  const statusClass = status === "completed" ? "bg-green-500 border-green-500" : 
                      status === "in_progress" ? "border-primary" : "border-muted-foreground";
  const priorityClass = priority === "high" ? "bg-red-100 text-red-700" :
                        priority === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
    >
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${statusClass}`}>
        {status === "completed" && <CheckCircle2 className="w-3 h-3 text-white" />}
      </div>
      <span className={`flex-1 font-medium ${status === "completed" ? "line-through text-muted-foreground" : ""}`}>
        {title}
      </span>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityClass}`}>
        {priority}
      </span>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Zap, title: "Lightning fast", description: "Instant task creation and updates. No loading spinners.", gradient: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Secure by default", description: "Your data is encrypted and protected.", gradient: "from-green-500 to-emerald-500" },
    { icon: BarChart3, title: "Insightful analytics", description: "Track your productivity trends.", gradient: "from-blue-500 to-cyan-500" },
    { icon: CheckCircle2, title: "Smart organization", description: "Automatically categorize and prioritize tasks.", gradient: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Everything you need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you manage tasks efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl h-full hover-lift cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { step: "01", title: "Create an account", description: "Sign up in seconds with just your email" },
    { step: "02", title: "Add your tasks", description: "Quickly add tasks with priorities and due dates" },
    { step: "03", title: "Stay organized", description: "Track progress and complete tasks efficiently" },
  ];

  return (
    <section id="how-it-works" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">How it works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Get started in minutes</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="relative glass-card p-8 rounded-2xl text-center hover-lift">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-primary p-12 md:p-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to boost your productivity?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of users who have transformed their workflow with TaskFlow.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-14 shadow-xl">
                Start free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">2024 TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
