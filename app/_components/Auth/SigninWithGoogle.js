"use client";

import { createClient } from "@/_lib/supabase";

const SigninWithGoogle = () => {
  const supabase = createClient();

  // google sign in
  const handleGoogleAuth = async () => {
    const { err } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (err) {
      setError(err.message);
    }
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        {/* ico */}
        <img
          src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
          alt="google ico"
          className="w-5"
        />
        {/* text */}
        <h1 className="text-white capitalize">sign in with google</h1>
      </div>
    </button>
  );
};

export default SigninWithGoogle;
