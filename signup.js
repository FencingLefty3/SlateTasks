import { signUp, signIn } from "./supabase.js";

export function initSignupForm() {
  const form = document.getElementById("signupForm");

  if (!form) {
    console.error("Signup form not found in DOM");
    return;
  }

  console.log("Signup form loaded:", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stops page reload

    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // --- validation layer ---
    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    console.log("Attempting signup:", { name, email });

    try {
      const { data: signupData, error: signupError } = await signUp({
        email,
        password,
        name
      });

      console.log("Supabase signup response:", signupData, signupError);

      if (signupError) {
        alert(signupError.message);
        return;
      }

      alert("Account created successfully.");

      // Auto sign in after signup
      const { data: signinData, error: signinError } = await signIn({
        email,
        password
      });

      console.log("Supabase signin response:", signinData, signinError);

      if (signinError) {
        alert(signinError.message);
        return;
      }

      alert("Logged in successfully.");

      // Redirect to home
      window.setView("home");

    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  });
}

// Initialize on DOMContentLoaded for initial page load
document.addEventListener("DOMContentLoaded", initSignupForm);