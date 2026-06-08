console.log("accounts.js loaded");
import { getUser, signOut, supabase } from "./supabase.js";

export async function loadUser() {
    const emailTitle = document.getElementById("email")
    const nameTitle = document.getElementById("name")
    const iconTitle = document.getElementById("icon")

    const { user } = await getUser();

    console.log("user:", user)

    const userId = user.id

    const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', userId)
        .single();

    console.log(profileData)

    if (profileError) {
        console.error("Database Error:", profileError.message);
    }

    const userName = profileData?.username || "Guest"; 
    console.log("Username is:", userName);

    const userEmail = user.email

    console.log("user name+email:", userName, userEmail);

    const initials = userName
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

    iconTitle.textContent = initials
    nameTitle.textContent = userName
    emailTitle.textContent = userEmail
}

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

