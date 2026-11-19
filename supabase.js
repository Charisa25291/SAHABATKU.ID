import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://sjfctxortdrsydvjmsjm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cvwHZ0XVotmmofbi-s-ogQ_ZiJslWHA';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
