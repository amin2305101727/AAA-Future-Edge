const ScopeOfWorks = () => {
  return (
    <div>
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden bg-cover bg-center px-5 py-14 sm:min-h-[600px] sm:px-8 lg:min-h-[min(750px,calc(100svh-78px))] lg:px-0"
        style={{ backgroundImage: "url('/images/Scope-of-Works.png')" }}
      >
        <div className="mx-auto w-full max-w-[1400px] lg:pl-10">
          <div className="max-w-[720px]">
            <div className="mb-5 flex items-center gap-4 text-xs font-bold tracking-[0.22em] text-slate-500 sm:text-sm">
              <span className="h-0.5 w-14 bg-[#087eb6]" />
              <span>OUR EXPERTISE</span>
            </div>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,5rem)] leading-[1.02] font-bold tracking-tight text-[#17263f]">
              Scope of <span className="text-[#087eb6]">Works</span>
            </h1>
            <p className="mt-5 max-w-[680px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Delivering comprehensive solutions tailored to your business
              needs, covering strategy, technology, and operational excellence.
            </p>
            <a
              href="#scope-of-work-details"
              className="mt-7 inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#0788ec] to-[#076bc5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087eb6] sm:text-base"
            >
              Explore Our Services
              <span aria-hidden="true" className="text-2xl leading-none">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

        <div id="scope-of-work-details" className='px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-20 mb-20 '>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                <div className='order-2 flex flex-col gap-4 lg:order-1'>
                  <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                    
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                    Organization Architecture
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our scope of work involves a comprehensive evaluation and restructuring of your organization to enhance competitiveness in the market. This includes reviewing the current organizational structure, job descriptions, workflows, and processes to identify areas for improvement. We will develop a strategic HR plan aligned with business objectives, ensuring the implementation of effective HR processes. Additionally, we will design an optimized organizational structure with a clear reporting matrix to maximize operational efficiency, along with developing detailed role profiles to define responsibilities and foster clarity within the organization.
                    </p>
                  </article>
                  <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Structured Recruitment & Selection Process

                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our Structured Recruitment & Selection Process ensures you hire the right talent through effective screening, interviewing, and orientation. We review your existing HR policies, identify gaps, and develop comprehensive solutions, including competency frameworks, assessment processes, and induction programs, tailored to your business needs.
                    </p>
                  </article>

                  <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Cross- functional Leadership Development
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Cross-functional leadership development and the transformation of HR into a strategic business partner empower organizations to optimize their workforce. Establishing job grades according to functional value clarifies roles, while implementing structured tools for Executive Committee and departmental meetings supports consistent planning and communication. Reducing ad hoc work enables teams to focus on high-impact tasks, and converting yearly objectives into monthly action plans keeps progress on track. Standardizing employee knowledge at all levels and developing SOPs (Standard Operating Procedures) for shop-level roles ensures a cohesive, efficient, and aligned work environment.

                        </p>
                  </article>
                </div>
                <div className='order-1 flex items-center justify-center lg:order-2'>
                <div className="group w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_18px_48px_rgba(16,43,78,0.2)] ring-1 ring-[#087eb6]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(8,126,182,0.28)]">
                  <img src="https://i.postimg.cc/q7rLcmKk/14939957-10211221870406434-3358446236991369017-o.jpg" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-safe:animate-[scopeFloat_6s_ease-in-out_infinite]" alt="Team collaborating during an organizational workshop" />
                </div>
            </div>
        </div>

            {/* 2nd grid hidden md part  */}

            <div className='grid grid-cols-1 gap-10 mt-4 lg:grid-cols-2 lg:mt-10'>
            <div className='flex items-center justify-center'>
            <div className="group w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_18px_48px_rgba(16,43,78,0.2)] ring-1 ring-[#087eb6]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(8,126,182,0.28)]">
              <img src="https://i.postimg.cc/KcPjWxRr/1239118-10202051323668497-424507293-o-1.jpg" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-safe:animate-[scopeFloat_6s_ease-in-out_infinite]" alt="Team taking part in an outdoor leadership development program" />
            </div>

            </div>

            <div className="flex flex-col gap-4">
            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Future Leadership Development Program (FLDP)
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our FLDP service equips organizations with emerging talent for sustained growth. We support clients in developing a comprehensive FLDP plan, creating career paths, designing compensation packages, and executing the program with follow-up to ensure long-term success.
                     </p>
            </article>

            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Management Trainee Officer (MTO)
                  </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    MTOs work under managers to gain essential skills for future leadership roles. Key areas include career planning, supervision, coaching, and mentoring.
                    </p>
            </article>
            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  HR Strategy & Process
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our HR Strategy offers a roadmap for addressing key organizational challenges through people-focused solutions, emphasizing recruitment, talent management, and succession planning. Key steps include gap analysis, roadmap creation, and execution.
                    </p>
            </article>
            </div>

            
            </div>



                {/* 3rd part  */}



                <div className='grid grid-cols-1 gap-10 mt-4 lg:grid-cols-2 lg:mt-10'>
           

            <div className="flex flex-col gap-4">
            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Value Proposition
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our value proposition defines why customers should choose us, highlighting unique benefits and our commitment to excellence. This includes identifying core company values, integrating them into performance management, and training employees on these principles.
                    </p>
            </article>

            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Talent Acquisition
                  </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our talent acquisition services encompass strategies for sourcing, recruiting, and retaining top talent, including developing, implementing, and evaluating hiring programs.
                    </p>
            </article>
            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Performance Management Process (PMP)
                    </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    Our PMP service builds effective performance systems and trains managers in goal setting and team communication. We review and refine the current performance and remuneration policies, align them with best practices, and design a tailored implementation plan. We also offer training to ensure seamless execution and alignment of company vision and mission with team-level KPIs.
                    </p>
            </article>
            <article className='group rounded-2xl border border-slate-200 border-l-4 border-l-[#f58a1f] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087eb6] hover:bg-[#087eb6] hover:shadow-xl sm:p-6'>
                  <h2 className='mb-2 font-[Inter] text-xl font-bold text-[#f58a1f] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                  Training & Development
                  </h2>
                    <p className='mb-2 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
                    We provide end-to-end training solutions, including needs analysis, induction module creation, and soft and hard skill frameworks, tailored to support employee growth and organizational success.
                    </p>
            </article>
            </div>

                {/* grid */}

                <div className='flex items-center justify-center'>
            <div className="group w-full overflow-hidden rounded-3xl border-4 border-white shadow-[0_18px_48px_rgba(16,43,78,0.2)] ring-1 ring-[#087eb6]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(8,126,182,0.28)]">
              <img src="https://i.postimg.cc/XYb9GQt4/15167444-10211374723827674-1557682048248050580-o.jpg" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-safe:animate-[scopeFloat_6s_ease-in-out_infinite]" alt="Employees participating in a workplace training session" />
            </div>

            </div>
            
            </div>
       
    </div>
    </div>
  )
}

export default ScopeOfWorks