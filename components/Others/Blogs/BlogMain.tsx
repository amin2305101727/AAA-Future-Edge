"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaArrowRight, FaCalendarDays, FaXmark } from "react-icons/fa6";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Essential Features Your Website Should Have",
    description:
      "In today’s digital landscape, having a website is essential for businesses to thrive online. However, simply having a website is not enough.",
    content:
      "A successful business website should make it easy for visitors to understand what you offer and take the next step. Clear navigation, responsive layouts, fast-loading pages, accessible content, and a secure connection all help create a dependable experience. Useful service information and straightforward contact options also help turn visitors into customers. Review your site regularly so its content, links, and functionality keep pace with your business.",
    image:
      "https://www.goinnovior.com/wp-content/uploads/2024/06/Essential_Features_Website-scaled.webp",
  },
  {
    id: 2,
    title: "Importance of EDR In Our IT Sector For Being Organize",
    description:
      "Endpoint Detection & Response (EDR) is also known as Endpoint Threat Detection and Response. It is an integrated cybersecurity technology.",
    content:
      "Endpoint Detection and Response (EDR) helps security teams monitor activity across computers, servers, and other endpoints. By collecting and analyzing endpoint events, an EDR platform can help identify suspicious behavior, investigate incidents, and support a faster response. EDR works best as part of a broader security program that includes patching, access controls, backups, staff awareness, and a clear incident-response process.",
    image: "https://www.goinnovior.com/wp-content/uploads/2024/04/edr-01.png",
  },
  {
    id: 3,
    title: "7 Social Engineering Attack Types to deceive human mind",
    description:
      "Social engineering refers to psychological manipulation that can compel people to act or disclose private information.",
    content:
      "Social engineering attacks exploit trust and urgency rather than relying only on technical weaknesses. Common forms include phishing emails, targeted spear phishing, impersonation, pretexting, baiting, tailgating, and fraudulent phone calls. Be cautious with unexpected requests, verify identities through a separate trusted channel, avoid opening suspicious links or attachments, and report unusual messages promptly. Regular awareness training helps teams recognize these warning signs before sensitive information or access is exposed.",
    image:
      "https://www.goinnovior.com/wp-content/uploads/2024/04/Social-Engineering-01.png",
  },
];

const author = {
  name: "Kahafil Ora",
  role: "Managing Director",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QHOiPFYMOEJ35-jzXkjACWCBg-6G3FQSmw&s",
};

const BlogMain = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!activePost) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePost(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activePost]);

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ backgroundImage: "url('/images/letest-blog-bg.png')" }}
    >
      <div className="relative mx-auto max-w-[1400px]">
        <header className="mx-auto max-w-4xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-5 block h-1 w-12 bg-[#ff7900]"
          />
          <h2 className="text-3xl font-extrabold tracking-tight text-[#102b4e] sm:text-4xl lg:text-[44px]">
            Latest <span className="text-[#f47716]">Blog &amp; Articles</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
            Insights, ideas and updates to help you build a stronger,
            people-focused organization.
          </p>
        </header>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex h-full flex-col rounded-2xl border border-white/80 bg-white/95 p-1.5 shadow-[0_12px_36px_rgba(111,75,38,0.12)]"
            >
              <div className="relative">
                <img
                  className="h-56 w-full rounded-xl object-cover sm:h-64"
                  src={post.image}
                  alt={post.title}
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:text-sm">
                  <FaCalendarDays className="text-[#f47716]" aria-hidden="true" />
                  Aug 12, 2026
                </span>
              </div>

              <div className="flex flex-1 flex-col px-3 pb-4 pt-3 sm:px-4">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    className="size-10 rounded-full object-cover"
                    src={author.avatar}
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-bold text-[#102b4e]">
                      {author.name}
                    </p>
                    <p className="text-sm text-slate-500">{author.role}</p>
                  </div>
                </div>

                <h3 className="text-lg leading-7 font-bold text-[#102b4e] sm:text-xl">
                  {post.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="my-3 block h-0.5 w-12 bg-[#f47716]"
                />
                <p className="text-sm leading-[1.6] text-slate-600 sm:text-[15px]">
                  {post.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  aria-haspopup="dialog"
                  className="mt-4 inline-flex w-fit items-center gap-3 font-bold text-[#f47716] underline decoration-2 underline-offset-4 transition-colors hover:text-[#c95200] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f47716]"
                >
                  Read more
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activePost
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/65 p-4 sm:p-6"
              onClick={() => setActivePost(null)}
            >
              <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="blog-dialog-title"
                className="relative my-auto max-h-[min(90dvh,760px)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-9"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  aria-label="Close article"
                  className="sticky top-0 z-10 -mr-1 -mt-1 ml-auto flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-orange-100 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  <FaXmark aria-hidden="true" />
                </button>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f47716]">
                  Blog article
                </p>
                <h2
                  id="blog-dialog-title"
                  className="mt-2 text-2xl leading-tight font-extrabold text-[#102b4e] sm:text-3xl"
                >
                  {activePost.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {activePost.content}
                </p>
              </section>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
};

export default BlogMain;
