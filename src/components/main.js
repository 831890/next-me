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
          헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는
          경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.
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
