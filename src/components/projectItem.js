// projectItem.js
// import Image from 'next/legacy/image';

export default function ProjectItem(props) {
  const { data } = props;

  const title = data.properties['project-title'].title[0].plain_text;
  const subTitle = data.properties['project-sub-title'].rich_text[0].plain_text;

  const link = data.properties['project-link'].url;
  const startDate = data.properties['project-period'].date.start;
  const endDate = data.properties['project-period'].date.end;
  const contribution = data.properties['project-contribution'].number * 100;
  // const tags = data.properties['project-tag'].multi_select.map((tag) => tag.name).join(', ');
  const tags = data.properties['project-tag'].multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <>
      {/* <div key={data.id} className="project-item">
        {imgSrc && <Image className="rounded-t-xl" src={imgSrc} alt="cover image" width="100%" height="50%" layout="responsive" objectFit="cover" quality={100} />}
        <div className="p-4 flex flex-col">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className='mt-4 text-xl"'>
            프로젝트 링크: <a href={link}>{link}</a>
          </p>
          <p>
            프로젝트 기간: {startDate} - {endDate}
          </p>
          <p>프로젝트 기여도: {contribution} %</p>
          <div className="flex items-start mt-2">
            {tags.map((tag) => (
              <span className="px-2 py-1 mr-2 rounded-md bg-amber-200 dark:bg-amber-700 w-30" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div> */}

      <div key={data.id} className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg">
          {imgSrc && <img className="h-40 rounded w-full object-cover object-center mb-6" src={imgSrc} alt="content" />}
          <h4 className="tracking-widest text-amber-500 text-xs font-medium title-font">{subTitle}</h4>
          <h2 className="text-lg text-gray-900 font-medium title-font mt-2 mb-4">{title}</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <div className='mt-2 text-xl"'>
            <a className="text-amber-400 inline-flex items-center md:mb-2 lg:mb-0" href={link}>
              {link}
            </a>
          </div>
          <div className="mt-2">
            프로젝트 기간: {startDate} ~ {endDate}
          </div>
          <div className="mt-2">프로젝트 기여도: {contribution} %</div>
          <div className="flex items-start mt-4">
            {tags.map((tag) => (
              <span className="px-2 py-1 mr-2 rounded-md bg-amber-500 w-30" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
