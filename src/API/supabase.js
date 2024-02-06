import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mdrktlbuvnvnbklnhsuk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcmt0bGJ1dm52bmJrbG5oc3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNTI5NTYsImV4cCI6MjAyMjgyODk1Nn0.RqpF8xfPqLhK7M1vRsxe-Pe71KljL3zZUIRaO2qHCoA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
