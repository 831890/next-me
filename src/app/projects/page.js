import { TOKEN, DATABASE_ID } from '../../../config/index.js';
import ProjectItem from '../../components/projectItem.js';
async function getData() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'project-title',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projectsResponse = await res.json();
  console.log(
    'projects',
    projectsResponse.results.map((project) => project.properties['project-title'].title[0].plain_text)
  );

  return projectsResponse.results;
}

export default async function Projects() {
  const results = await getData();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        {results && (
          <>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
              <h1 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트 : <span className="pl-4 text-blue-500">{results.length}</span>
              </h1>
              <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {results.map((project) => (
                  <>
                    <ProjectItem key={project.id} data={project} />
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
