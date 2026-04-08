"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xqegjlbk");

  if (state.succeeded) {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-sage-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-semibold text-sage-800 text-lg mb-2">
          Bedankt voor je bericht!
        </h3>
        <p className="text-sage-700 text-sm">
          Ik neem zo snel mogelijk contact met je op, meestal binnen 2
          werkdagen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-sage-700 mb-1"
        >
          Naam
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
        />
        <ValidationError prefix="Naam" field="name" errors={state.errors} />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-sage-700 mb-1"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
        />
        <ValidationError prefix="E-mail" field="email" errors={state.errors} />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-sage-700 mb-1"
        >
          Telefoon{" "}
          <span className="text-sage-400 font-normal">(optioneel)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-sage-700 mb-1"
        >
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400 resize-none"
        />
        <ValidationError
          prefix="Bericht"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Versturen..." : "Verstuur bericht"}
      </button>
      <p className="text-xs text-sage-400">
        Ik antwoord meestal binnen 2 werkdagen.
      </p>
    </form>
  );
}
