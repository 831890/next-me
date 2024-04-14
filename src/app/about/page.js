import Title from '../../components/title.js';

export default function AboutMe() {
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* 타이틀 */}
        <Title tit={'Work Experience'} desc={"The companies that I've worked for and the period of time!"} />
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
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  프론트엔드 개발팀 팀장 <span>2023.03 - 2023.10</span>
                </h2>

                <div className="leading-relaxed">
                  <ul>
                    <li>- 팀장 직책 맡기 전 파트장 업무 수행</li>
                    <li>- 협업 부서(기획팀/디자인팀/백엔드개발팀)의 커뮤니케이션 진행</li>
                    <li>- 팀원 및 일정 관리 등 매니징 업무</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  야나두 B2B 사이트 제작 <span>2023.04 - 2023.07</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- Vue.js Framework 이용하여 사이트 개발</li>
                    <li>- 회원가입 및 로그인 관련(ID/PW찾기) 로직 개발</li>
                    <li>- axios 인터셉터 이슈 처리</li>
                    <li>- 어드민 및 클라이언트 화면 API연동</li>
                  </ul>
                </div>

                <a href="https://b2b.yanadoo.co.kr/YANUDO/sign-in" className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-1">
                  https://b2b.yanadoo.co.kr/YANUDO/sign-in
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  야나두 3.0오픈 및 운영/유지보수 <span>2021.12 ~</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- React Framework 사용하여 리뉴얼 진행</li>
                    <li>- UI 마크업과 axios를 사용하여 데이터 바인딩으로 각종 상담 및 게시판 개발</li>
                    <li>- Light house 웹 사이트 성능 개선 (진행중)</li>
                    <li>- 사용기술 : React (CRA) / styled-component / sass</li>
                  </ul>
                </div>
                <a href="https://www.yanadoo.co.kr/" className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-1">
                  https://www.yanadoo.co.kr/
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  야나두 어드민 개선 <span>2021.05 ~</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- Bootstrap One UI 템플릿으로 UI 작업 후 공유</li>
                    <li>- 사용기술 : Bootstrap / jQuery</li>
                  </ul>
                </div>
                <a href="https://www.yanadoo.co.kr/" className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-1">
                  https://www.yanadoo.co.kr/
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작 <span>2020.09 ~</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- 메인 상품 및 toss행운퀴즈 이벤트 페이지 작업 진행</li>
                    <li>- 사용기술 : Javascript / jQuery / Ajax</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* md:flex-grow */}
          </div>

          {/* 회사 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">HIPHOPER(바바패션)</h2>
              <span className="mt-1 text-gray-500 text-sm">2020.01 ~ 2020.08</span>
              <strong>서비스 종료</strong>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  힙합퍼 사이트 리뉴얼 및 운영 / 유지보수 <span>2020.04 ~ 2020.09</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- Vue.js Framework 사용하여 리뉴얼 진행 UI 담당</li>
                    <li>- 본인 기여도 50%</li>
                    <li>- 사용기술 : Vue.js / sass</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작 <span>2020.01 - 2020.09</span>
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>- 월간 프로모션 및 이벤트 등 UI담당</li>
                    <li>- 본인 기여도 100%</li>
                    <li>- 사용기술 : Javascript / jQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
