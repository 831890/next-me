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
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  프론트엔드 개발팀 팀장 <span>2023.03 - 2023.10</span>
                </h3>

                <div className="leading-relaxed">
                  <ul>
                    <li>- 팀장 직책 맡기 전 파트장 업무 수행</li>
                    <li>- 협업 부서(기획팀/디자인팀/백엔드개발팀)의 커뮤니케이션 진행</li>
                    <li>- 팀원 및 일정 관리 등 매니징 업무</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  야나두 B2B 사이트 제작 <span>2023.04 - 2023.07</span>
                </h3>
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
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  야나두 3.0오픈 및 운영/유지보수 <span>2021.12 ~</span>
                </h3>
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
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  야나두 어드민 개선 <span>2021.05 ~</span>
                </h3>
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
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작 <span>2020.09 ~</span>
                </h3>
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
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  힙합퍼 사이트 리뉴얼 및 운영 / 유지보수 <span>2020.04 ~ 2020.09</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- Vue.js Framework 사용하여 리뉴얼 진행 UI 담당</li>
                    <li>- 본인 기여도 50%</li>
                    <li>- 사용기술 : Vue.js / sass</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작 <span>2020.01 - 2020.09</span>
                </h3>
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

          {/* 회사 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">(주)ST Unitas</h2>
              <span className="mt-1 text-gray-500 text-sm">2015.06 ~ 2019.12</span>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  블로그 체험단 사이트 구축 (유니타스로티플) <span>2016.03 ~ 2016.12</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>
                      <strong>서비스 종료</strong>
                    </li>
                    <li>- 본인 기여도 100%</li>
                    <li>- 사용기술 : javascript / jQuery</li>
                  </ul>
                  {/* <a href="https://m.blog.naver.com/PostList.naver?blogId=rotifl__" className="text-amber-500 dark:text-amber-500 inline-flex items-center mt-1">
                    https://m.blog.naver.com/PostList.naver?blogId=rotifl__
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  수험/취업 관련부서 사이트 구축 및 유지보수
                  <span>2015.06 ~ 2019.12</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>
                      <a href="https://gong.conects.com">- 공단기 https://gong.conects.com</a>
                    </li>
                    <li>
                      <a href="https://gyung.conects.com">- 경단기 https://gyung.conects.com</a>
                    </li>
                    <li>
                      <a href="https://gyung.conects.com">- 경찰승진단기 https://gyung.conects.com</a>
                    </li>
                    <li>
                      <a href="https://summatus.conects.com">- 숨마투스 https://summatus.conects.com</a>
                    </li>
                    <li>
                      <a href="https://sobang.conects.com">- 소방단기 https://sobang.conects.com</a>
                    </li>
                    <li>
                      <a href="https://gong.conects.com/tax">- 세무/관세사단기 https://gong.conects.com/tax</a>
                    </li>
                    <li>
                      <a href="https://gong.conects.com/social">- 사회복지사단기 https://gong.conects.com/social</a>
                    </li>
                    <li>
                      <a href="https://ja.conects.com">- 자격증단기 https://ja.conects.com</a>
                    </li>
                    <li>
                      <a href="https://gongin.conects.com">- 공인단기 https://gongin.conects.com</a>
                    </li>
                    <li>
                      <a href="https://public.conects.com">- 공기업단기 https://public.conects.com</a>
                    </li>
                    <li>
                      <a href="https://www.schole.ac">- 스콜레 https://www.schole.ac</a>
                    </li>
                    <li>
                      <a href="https://peet.conects.com">- PEET 단기 https://peet.conects.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작
                  <span>2015.06 ~ 2019.12</span>
                </h3>
                <div className="leading-relaxed">
                  <span>관련 프로모션 URL외 다수</span>
                  <ul>
                    <li>
                      <a href="https://gong.conects.com/gong/lecture/free/main_renewal#2384">- https://gong.conects.com/gong/lecture/free/main_renewal#2384</a>
                    </li>
                    <li>
                      <a href="https://gong.conects.com/gong/promotion/event/friends/pickpick">- https://gong.conects.com/gong/promotion/event/friends/pickpick</a>
                    </li>
                    <li>
                      <a href="https://gyung.conects.com/promotion/event/2019/gyung_care_24_2nd">- https://gyung.conects.com/promotion/event/2019/gyung_care_24_2nd</a>
                    </li>
                    <li>
                      <a href="https://bupgum.conects.com/landing/gold_key/autumn_event_201910">- https://bupgum.conects.com/landing/gold_key/autumn_event_201910</a>
                    </li>
                    <li>
                      <a href="https://gong.conects.com/gong/promotion/event/diary/teaser">- https://gong.conects.com/gong/promotion/event/diary/teaser</a>
                    </li>
                    <li>
                      <a href="https://gong.conects.com/gong/promotion/event/2019/thankyou">- https://gong.conects.com/gong/promotion/event/2019/thankyou</a>
                    </li>
                    <li>
                      <a href="https://gyung.conects.com/promotion/event/gold_key/v1">- https://gyung.conects.com/promotion/event/gold_key/v1</a>
                    </li>
                    <li>
                      <a href="https://elec.conects.com/landing/2019/cheerup">- https://elec.conects.com/landing/2019/cheerup</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 회사 4 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">(주)해커스</h2>
              <span className="mt-1 text-gray-500 text-sm">2014.04 ~ 2015.06</span>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  사이트 리뉴얼 및 운영 <span>2014.04 ~ 2015.06</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- 해커스 어학원</li>
                    <li>- 해커스편입 (구,종로편입) 사이트</li>
                    <li>- 해커스인강 (구,챔프스터디) 사이트</li>
                    <li>- 해커스 기초영어 사이트</li>
                    <li>- 본인기여도 60%</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  각종 프로모션 페이지 제작 <span>2014.04 ~ 2015.06</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- 월간 프로모션 및 이벤트 등 UI담당</li>
                    <li>- 본인 기여도 80%</li>
                    <li>- 사용기술 : Javascript / jQuery</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  B2B 사이트 구축 <span>2014.12 ~ 2015.06</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- 해커스인강 이화여대 어학연구소 신규제작</li>
                    <li>- 해커스인강 경북대학교 어학연구소 신규제작</li>
                    <li>- 본인 기여도 100%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 회사 5 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            {/* 회사 타이틀 */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-semibold title-font text-gray-700">MG신용정보(주)</h2>
              <span className="mt-1 text-gray-500 text-sm">2012.10 ~ 2014.04</span>
            </div>
            {/* 경력 */}
            <div className="md:flex-grow">
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  사이트 리뉴얼 및 운영/유지보수 <span>2012.10 ~ 2014.04</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- MG신용정보 (구,한신평) 홈페이지 리뉴얼</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 title-font mb-2">
                  채권관리 솔루션 UI 리뉴얼 및 운영/유지보수 <span>2012.10 ~ 2014.04</span>
                </h3>
                <div className="leading-relaxed">
                  <ul>
                    <li>- RM Plus / RM Cloud UI 수정 및 유지보수</li>
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
