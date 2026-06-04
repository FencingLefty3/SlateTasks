import { signUp } from "./supabase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

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
      const { data, error } = await signUp({
        email,
        password,
        name
      });

      console.log("Supabase response:", data, error);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Account created successfully.");

      // redirect to login
      window.location.href = "./login.html";

    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  });
});