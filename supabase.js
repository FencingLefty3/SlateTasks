import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './keys.env';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

export async function signUp({ email, password, name }) {
    console.log("SIGN UP SCRIPT LOADED");
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        name
    });
    return { data, error };
}

export async function signIn({ email, password }) {
    console.log("SIGN IN SCRIPT LOADED");
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    return { data, error };
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
}

export async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return { user };
}

export async function redirectBasedOnAuth() {
    const { user } = await getUser();
    if (user) {
        window.setView("home");
    } else {
        window.setView("login");
    }
}

export async function createTask({ user, title, description, priority, dueDate }) {
    const { data, error } = 
    await supabase
        .from('tasks')
        .insert({
            user_id: user.id,
            title: title,
            description: description,
            priority: priority,
            due_date: dueDate,
        });

    return { data, error };
}

export async function getTasks() {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });
    return { data, error };
}

export async function updateTask({ taskId, ...updates }) {
    const { data, error } = await supabase
        .from('tasks')
        .update(updates)
        .eq('id', taskId);
    return { data, error };
}

export async function deleteTask({ taskId }) {
    const { data, error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId);
    return { data, error };
}

export async function updateUserSettings({ user, theme }) {
    const { data, error } = await supabase
        .from('user_settings')
        .upsert({
            user_id: user.id,
            theme: theme
        });
    return { data, error };
}

export async function getUserSettings({ user }) {
    const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .single();
    return { data, error };
}


export async function subscribeToTasks(callback) {
    return supabase
        .channel('tasks')
        .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'tasks' },
            callback
        )
        .subscribe();
}
console.log(SUPABASE_URL);