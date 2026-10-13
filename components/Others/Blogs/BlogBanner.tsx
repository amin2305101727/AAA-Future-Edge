const BlogsBanner = () => {
  return (
    <section
      className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#06203d] bg-cover bg-[position:65%_center] px-6 py-16 sm:min-h-[450px] sm:px-10 lg:min-h-[min(560px,calc(100svh-78px))] lg:px-16 xl:px-20"
      style={{
        backgroundImage: "url('/images/blog-bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1450px]">
        <div className="max-w-[760px]">
          <span
            aria-hidden="true"
            className="mb-5 block h-1.5 w-16 rounded-full bg-[#ff7900] sm:mb-6 sm:w-20"
          />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#b45309] sm:mb-4 sm:text-base">
            Blogs
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,4.2vw,4.5rem)] leading-[1.02] font-bold tracking-tight text-[#06203d]">
            <span className="block">Insights, Ideas &amp;</span>
            <span className="block text-[#b45309]">
              Expert Perspectives
            </span>
          </h1>
          <p className="mt-5 max-w-[700px] text-base leading-7 text-[#17324f] sm:mt-6 sm:text-lg sm:leading-8">
            Stay updated with the latest trends, tips and insights from our
            experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsBanner;