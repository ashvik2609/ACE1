import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const schema = z.object({
  email: z.string().trim().email().max(255),
});

export const subscribeEmail = createServerFn({ method: "POST" })
  .inputValidator((input) => schema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("subscribers")
      .insert({ email: data.email.toLowerCase() });

    if (error) {
      // unique violation => already subscribed
      if (error.code === "23505") {
        return { ok: true, alreadySubscribed: true };
      }
      console.error("subscribe error", error);
      return { ok: false as const, error: "Could not subscribe. Try again later." };
    }
    return { ok: true, alreadySubscribed: false };
  });
