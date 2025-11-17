"use client";

import { createClient } from "@/_lib/supabase";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const supabase = createClient();
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      router.push("/");
    }
  };

  return handleSignOut;
}
