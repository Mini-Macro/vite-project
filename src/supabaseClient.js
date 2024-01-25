import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://hpeggdiprganwmitufuu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZWdnZGlwcmdhbndtaXR1ZnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4Nzc0ODgsImV4cCI6MjAyMDQ1MzQ4OH0.Fsv5zSlldJCdq9PARdRYkzHqnU0r933oIDo6ng1N6JQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)