import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 text-foreground">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              🛒
            </div>
            <span>POS Pro</span>
          </div>
          <h1 className="mt-4 text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Card */}
        <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 border">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg border focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <span className="text-muted-foreground">📧</span>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-transparent w-full outline-none text-sm placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg border focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <span className="text-muted-foreground">🔒</span>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent w-full outline-none text-sm placeholder:text-muted-foreground/50"
              />
              <span className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">👁</span>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-muted-foreground/30 text-primary focus:ring-primary" />
              Remember me
            </label>
            <button className="text-primary hover:underline font-medium">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-5 text-muted-foreground text-sm">
            <div className="flex-1 h-px bg-border" />
            Or continue with
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Demo Account */}
          <div className="bg-muted rounded-lg p-4 text-center text-sm">
            <p className="font-medium">Demo Account:</p>
            <p className="text-muted-foreground">Email: demo@pospro.com</p>
            <p className="text-muted-foreground">Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
