console.log("AUTH SCRIPT LOADED");

import { supabase } from "./supabase.js";

console.log("checking session...");

const { data, error } = await supabase.auth.getSession();

console.log("session result:", data, error);

import { redirectBasedOnAuth } from './supabase.js';
    redirectBasedOnAuth();

