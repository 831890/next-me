import { TOKEN, DATABASE_ID } from '../../../config/index';

export default function Projects({ projects }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        {projects && (
          <>
            <h1 className="text-4xl font-bold sm:text-6xl">
              총 프로젝트 : <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h1>
            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
              {projects.results.map((aProject) => (
                <div key={aProject.id} className="project-item">
                  <h2>{aProject.title}</h2>
                  <p>{aProject.description}</p>
                  {/* 추가적인 데이터 표시 */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export async function loader() {
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
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();
  console.log('projects', projects);
  return { projects };
}

// app/page.js

// export default function Page({ projects }) {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
//         {projects && (
//           <>
//             <h1 className="text-4xl font-bold sm:text-6xl">
//               총 프로젝트 : <span className="pl-4 text-blue-500">{projects.results.length}</span>
//             </h1>
//             <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
//               {projects.results.map((aProject) => (
//                 <div key={aProject.id} className="project-item">
//                   <h2>{aProject.title}</h2>
//                   <p>{aProject.description}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export async function loader() {
//   const notion = TOKEN;
//   const databaseId = DATABASE_ID;

//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Notion-Version': '2022-06-28',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${TOKEN}`,
//       },
//     },
//     sorts: [
//       // 정렬 옵션 설정
//       {
//         property: '이름',
//         direction: 'ascending',
//       },
//     ],
//   });

//   return { projects: response };
// }
