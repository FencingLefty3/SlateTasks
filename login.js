import { signIn } from "./supabase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  console.log("Login form loaded:", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stops page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // --- validation layer ---
    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }


    console.log("Attempting login:", { email });

    try {
      const { data, error } = await signIn({
        email,
        password  
      });

      console.log("Supabase response:", data, error);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Logged in successfully.");

      // redirect to home
      window.location.href = "./home.html";

    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  });
});