"use client";

import { FormEvent, useState } from "react";
import {
  FiCheck,
  FiArrowRight,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const mapUrl = "https://maps.app.goo.gl/VkucUTwMF78L4ZXDA";
const mapEmbedUrl =
  "https://www.google.com/maps?q=House-774,+Road-11,+Avenue-02,+Mirpur+DOHS,+Dhaka-1216&z=15&output=embed";

const contactCards = [
  {
    title: "Office",
    value: "House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216",
    href: mapUrl,
    icon: FiMapPin,
  },
  {
    title: "Email",
    value: "riadmahmud@gmail.com",
    href: "mailto:riadmahmud@gmail.com",
    icon: FiMail,
  },
  {
    title: "Phone",
    value: "+8801922000025",
    href: "tel:+8801922000025",
    icon: FiPhone,
  },
];

const ContactComponent = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <main className="bg-[#F0F5FC]">
      <section
        className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-cover bg-center px-4 py-12 text-center sm:min-h-[360px] lg:min-h-[430px]"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="mx-auto block h-1.5 w-32 rounded-full bg-[#ff5f08]" />
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.16em] text-[#ff5f08] sm:text-2xl">
            Contact Us
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#001b4d] sm:text-5xl lg:text-6xl">
            Let&apos;s Start a{" "}
            <span className="text-[#ff5f08]">Conversation</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 sm:text-2xl">
            We&apos;re here to help your business grow.
          </p>
        </div>
      </section>

      <section className="bg-[#F0F5FC] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {contactCards.map(({ title, value, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target={title === "Office" ? "_blank" : undefined}
                rel={title === "Office" ? "noreferrer noopener" : undefined}
                className="group flex min-h-[132px] flex-col rounded-2xl border border-[#e1e8f2] bg-white p-4 text-[#152747] shadow-[0_8px_24px_rgba(24,46,80,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7900] hover:bg-gradient-to-br hover:from-[#ff7900] hover:to-[#f36b00] hover:text-white hover:shadow-[0_14px_32px_rgba(24,46,80,0.12)] sm:min-h-[140px] sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-orange-50 text-[#ff7900] transition-colors group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="text-lg" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-bold">{title}</h2>
                </div>
                <p className="mt-3 break-words text-sm leading-5 text-slate-600 transition-colors group-hover:text-white/95 sm:text-[15px]">
                  {value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white bg-white p-1.5 shadow-[0_12px_32px_rgba(24,46,80,0.08)] sm:min-h-[390px]">
              <iframe
                title="AAA Future Edge office location"
                src={mapEmbedUrl}
                className="h-[320px] w-full rounded-xl sm:h-[390px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#1769d2] shadow-md transition-colors hover:bg-[#f5f8ff]"
              >
                Open in Maps
                <FiExternalLink aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-[#e1e8f2] bg-white p-5 shadow-[0_12px_32px_rgba(24,46,80,0.08)] sm:p-7">
              {isSent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center px-4 text-center sm:min-h-[350px]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eafff2]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08c85a] text-2xl text-white">
                      <FiCheck />
                    </span>
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-[#001b4d]">
                    Message Sent Successfully
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
                    Thank you for contacting Alliance Sourcing BD. We have
                    received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[#0799b9] px-6 text-base font-bold text-white transition-colors hover:bg-[#ff7900]"
                  >
                    Send Another Message
                    <FiArrowRight aria-hidden="true" className="ml-3 size-5" />
                  </button>
                </div>
              ) : (
                <form className="flex h-full flex-col" onSubmit={handleSubmit}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff7900]">
                      Get in touch
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-[#102d61]">
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Tell us how we can help, and our team will get back to you.
                    </p>
                  </div>
                  <div className="mt-5 space-y-3">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="h-12 w-full rounded-xl border border-[#dce4ef] bg-[#f8fafd] px-4 text-sm text-[#152747] outline-none transition-colors placeholder:text-slate-500 hover:border-slate-300 focus:border-[#ff7900] focus:ring-2 focus:ring-[#ff7900]/15"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="h-12 w-full rounded-xl border border-[#dce4ef] bg-[#f8fafd] px-4 text-sm text-[#152747] outline-none transition-colors placeholder:text-slate-500 hover:border-slate-300 focus:border-[#ff7900] focus:ring-2 focus:ring-[#ff7900]/15"
                    />
                    <textarea
                      required
                      name="message"
                      placeholder="Message"
                      rows={3}
                      className="w-full resize-y rounded-xl border border-[#dce4ef] bg-[#f8fafd] px-4 py-3 text-sm text-[#152747] outline-none transition-colors placeholder:text-slate-500 hover:border-slate-300 focus:border-[#ff7900] focus:ring-2 focus:ring-[#ff7900]/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#ff7900] to-[#f36b00] px-6 text-base font-bold text-white shadow-[0_8px_18px_rgba(255,121,0,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,121,0,0.28)] focus:outline-none focus:ring-2 focus:ring-[#ff7900]/30"
                  >
                    Send Message
                    <FiArrowRight aria-hidden="true" className="ml-3 size-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactComponent;
