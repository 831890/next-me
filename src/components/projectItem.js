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
  const desc = data.properties['project-desc'].rich_text[0].plain_text;

  return (
    <>
      <div key={data.id} className="project-item">
        <div className="rounded-lg">
          {imgSrc && <img className="h-40 w-full object-cover object-center" src={imgSrc} alt="content" />}
          <div className="p-6 ">
            <strong className="tracking-widest text-amber-500 text-xs font-medium title-font">{subTitle}</strong>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
            <p className="leading-relaxed text-base">{desc}</p>
            <div className='mt-2 text-xl"'>
              <a className="text-amber-400 dark:text-amber-400 inline-flex items-center md:mb-2 lg:mb-0" href={link}>
                {link}
              </a>
            </div>
            <div className="mt-2 text-sm">
              프로젝트 기간: {startDate} ~ {endDate}
            </div>
            <div className="mt-2 text-sm">프로젝트 기여도: {contribution} %</div>
            <div className="flex items-start mt-4">
              {tags.map((tag) => (
                <span className=" text-xs px-2 py-1 mr-2 rounded-md bg-amber-500 w-30 text-neutral-50" key={tag.id}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
