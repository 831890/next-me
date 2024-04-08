import { TOKEN, DATABASE_ID } from '../../../config/index.js';

export default function Projects() {
  return <div>API연동하기</div>;
}

// 각 요청 때마다 호출
export async function getData({ projects }) {
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

  //   const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

  //   const projects = await res.json();

  //   const projectNames = projects.results.map((aProject) => aProject.properties.Name.title[0].plain_text);

  //   console.log(`projectNames : ${projectNames}`);

  //   return {
  //     props: { projects },
  //   };
  // }

  (async () => {
    const response = await TOKEN.databases.query({
      database_id: DATABASE_ID,
      filter: {
        or: [
          {
            property: 'In stock',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Cost of next trip',
            number: {
              greater_than_or_equal_to: 2,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Last ordered',
          direction: 'ascending',
        },
      ],
    });
    console.log(response);
  })();
}
