import Link from 'next/link';
import Animation from '@/components/animation';

export default function Main() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요!
          <br className="hidden lg:inline-block" />
          중앙이 포트폴리오입니다:)
        </h1>
        <p className="mb-8 leading-relaxed">
          활기찬 분위기로 주변을 밝게 만들고 UI 개발을 좋아하는 김주아입니다. <br />
          좋아하는 일을 하면서 좋은 품질의 서비스를 만들고 싶습니다. <br />그 일은 혼자가 아닌 함께 만들어가는 것이라 생각합니다.
          <br /> 적극적인 커뮤니케이션을 주고받는 협업에 능하며 본인을 비롯한 주변의 성장을 추구합니다. <br />
          <br />
          어제보다 나은 오늘, 오늘보다 발전할 내일을 위해 노력하겠습니다.
          <br />
          <br /> 감사합니다!
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
