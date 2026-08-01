"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section className="bg-neutral-50 py-24 px-6 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <p className="uppercase text-xs font-bold tracking-[0.2em] text-[#b08543] mb-2">Contacts</p>
          <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-neutral-900 mb-6">Get in touch</h2>

          <p className="text-sm text-neutral-600 font-medium mb-3">
            <a href="tel:+911234567890" className="hover:text-[#8b5e1c] transition-colors">
              +91 (000) 000-00-000
            </a>
          </p>
          <p className="text-sm text-neutral-600 font-medium mb-3">
            <a href="mailto:setuarchitect@gmail.com" className="hover:text-[#8b5e1c] transition-colors">
              setuarchitect@gmail.com
            </a>
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed mt-6">
            Your Office Address Line 1,<br />
            Area / Landmark,<br />
            City, State, PIN Code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#8b5e1c] bg-white transition-colors"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#8b5e1c] bg-white transition-colors"
            />
          </div>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#8b5e1c] bg-white transition-colors"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#8b5e1c] bg-white resize-y transition-colors"
          />

          <div className="min-h-[20px] text-sm font-medium">
            {status === "success" && (
              <span className="text-green-600">Thank you! Your message has been sent.</span>
            )}
            {status === "error" && <span className="text-red-600">{errorMsg}</span>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-[#8b5e1c] text-white px-10 py-3.5 font-bold uppercase text-xs tracking-[0.2em] transition-colors hover:bg-[#6b4512] disabled:opacity-60 disabled:cursor-not-allowed rounded-full shadow-[0_4px_14px_rgba(139,94,28,0.3)]"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
