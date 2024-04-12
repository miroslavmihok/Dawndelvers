import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["backend/emails/WelcomeEmail.jsx"],
  format: ["cjs"],
});
