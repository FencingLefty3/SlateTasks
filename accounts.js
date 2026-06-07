console.log("accounts.js loaded");
import { signOut } from "./supabase.js";

export function logOut() {
    const btn = document.getElementById("logOutBtn");

        console.log("logout btn loaded:", btn);

        btn.addEventListener("click", async (e) => {

        try {
            const { error } = await signOut();

            if (error) {
                alert(error.message);
                return;
            }

            alert("Account logged out successfully.");
            window.setView("login");


        } catch (err) {
        console.error("Unexpected error:", err);
        alert("Something went wrong.");
        }; 
        }) 
}
document.addEventListener("DOMContentLoaded", logOut);

