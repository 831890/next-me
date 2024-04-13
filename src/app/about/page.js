export default function AboutMe() {
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* 타이틀 */}
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Work Experience</h2>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">The companies that I've worked for and the period of time!</p>
        </div>

        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* 회사 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">(주)야나두</h2>
              <span className="mt-1 text-gray-500 text-sm">2020.09 ~ 2023.10</span>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">(주)야나두</h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">(주)야나두</h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">(주)야나두</h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 회사 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">HIPHOPER(바바패션)</h2>
              <span className="mt-1 text-gray-500 text-sm">2020.01 ~ 2020.08</span>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">HIPHOPER(바바패션)</h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
