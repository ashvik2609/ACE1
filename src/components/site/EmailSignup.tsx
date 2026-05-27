import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { subscribeEmail } from "@/lib/subscribers.functions";

export function EmailSignup() {
  const subscribe = useServerFn(subscribeEmail);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await subscribe({ data: { email } });
      if (res.ok) {
        toast.success(res.alreadySubscribed ? "You're already on the list." : "Subscribed. Watch your inbox.");
        setEmail("");
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Please enter a valid email address.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-12 px-6 bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
