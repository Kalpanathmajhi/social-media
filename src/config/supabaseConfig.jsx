import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cluataeoowkcucdvlwgl.supabase.co";
const supabaseKey = import.meta.env.VITE_SECRET_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
