// projectItem.js
import Image from 'next/legacy/image';

export default function ProjectItem(props) {
  const { data } = props;

  const title = data.properties['project-title'].title[0].plain_text;
  const link = data.properties['project-link'].url;
  const startDate = data.properties['project-period'].date.start;
  const endDate = data.properties['project-period'].date.end;
  const contribution = data.properties['project-contribution'].number * 100;
  // const tags = data.properties['project-tag'].multi_select.map((tag) => tag.name).join(', ');
  const tags = data.properties['project-tag'].multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div key={data.id} className="project-item">
      <Image className="rounded-t-xl" src={imgSrc} alt="cover image" width="100%" height="50%" layout="responsive" objectFit="cover" quality={100} />
      <div className="p-4 flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className='mt-4 text-xl"'>
          프로젝트 링크: <a href={link}>{link}</a>
        </p>
        <p>
          프로젝트 기간: {startDate} - {endDate}
        </p>
        <p>프로젝트 기여도: {contribution} %</p>
        {/* <p className="flex items-start mt-2">
          {tags}
          <span className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"></span>
        </p> */}

        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <span className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
