"use client";

import { createClient } from "@/_lib/supabase";

export function useSignOut() {
  const supabase = createClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
  };

  return handleSignOut;
}
