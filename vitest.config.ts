import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["text", "lcov"],
      thresholds: {
        lines: 80,
        statements: 80,
        functions: 80,
        branches: 70,
      },
    },
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
