export default function Title(props) {
  const { tit, desc } = props;
  return (
    <>
      {/* 타이틀 */}
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{tit}</h2>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{desc}</p>
      </div>
    </>
  );
}
