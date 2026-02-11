"use client";

import { useActionState } from "react";
import { sendMessage } from "./action";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, {
    success: false,
    message: "",
  });

  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 max-w-180 transform -translate-y-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-sm uppercase text-white/50 lg:text-white"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Your name"
          className="bg-transparent border border-white/50 focus:border-white/30 outline-none px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-sm uppercase text-white/50 lg:text-white"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="bg-transparent border border-white/50 focus:border-white/30 outline-none px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-sm uppercase text-white/50 lg:text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Your message..."
          className="bg-transparent border border-white/50 focus:border-white/30 outline-none px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={pending}
          className="w-fit rounded-sm font-mono text-xs uppercase px-6 py-3 border border-[#9eff00] text-[#9eff00] hover:bg-[#9eff00] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
        {state.message ? (
          <p
            className={`font-mono text-xs ${state.success ? "text-[#9eff00]" : "text-red-400"}`}
          >
            {state.message}
          </p>
        ) : (
          <p className="font-mono text-[10px] text-white/50">
            By submitting this form, you agree to be contacted via email.
          </p>
        )}
      </div>
    </form>
  );
}
