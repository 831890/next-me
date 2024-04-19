import Title from '../../components/title.js';
import SkillItem from '../../components/skillItem.js';
const skillsData = [
  {
    id: 1,
    name: 'HTML5',
    icon: 'html5.svg',
    background: '#E34F26',
    color: '#fff',
    description: '웹표준과 웹접근성을 준수하며, 시맨틱 마크업과 크로스브라우징을 통해 모든 사용자와 환경에서 최적의 웹 경험을 제공할 수 있습니다.',
  },
  {
    id: 2,
    name: 'CSS3',
    icon: 'css3.svg',
    background: '#1572B6',
    color: '#fff',
    description: 'CSS3의 다양한 디자인 기능을 활용하여 창의적이고 반응형이며 사용자 친화적인 웹 인터페이스를 구현할 수 있습니다.',
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: 'javascript.svg',
    background: '#F7DF1E',
    color: '#000',
    description: 'JavaScript와 그 생태계 내의 다양한 라이브러리 및 프레임워크를 활용하여 동적이고 상호작용이 풍부한 웹 애플리케이션을 만들 수 있습니다.',
  },
  {
    id: 4,
    name: 'React',
    icon: 'react.svg',
    background: '#61DAFB',
    color: '#000',
    description: 'React를 사용하여 데이터가 변화할 때마다 적절하게 반응하여 사용자에게 실시간으로 최신 정보를 제공하는 인터페이스를 구축할 수 있습니다.',
  },
  {
    id: 5,
    name: 'Vue.js',
    icon: 'vuedotjs.svg',
    background: '#4FC08D',
    color: '#fff',
    description: 'Vue.js의 직관적인 프로그래밍 모델과 성능 최적화 기능을 활용하여 빠르고 효율적인 웹 애플리케이션을 개발할 수 있습니다.',
  },
  {
    id: 6,
    name: 'JSON Web Tokens',
    icon: 'jsonwebtokens.svg',
    background: '#000',
    color: '#fff',
    description: 'JSON Web Tokens를 이용하여 안전하고 효율적인 방식으로 사용자 인증 및 데이터 교환을 관리할 수 있습니다.',
  },
  {
    id: 7,
    name: 'styled-components',
    icon: 'styledcomponents.svg',
    background: '#DB7093',
    color: '#fff',
    description: 'styled-components를 사용하여 React 애플리케이션 내에서 스타일을 캡슐화하고, 유지보수가 용이한 컴포넌트 기반의 UI를 구축할 수 있습니다.',
  },
  {
    id: 8,
    name: 'Tailwind CSS',
    icon: 'tailwindcss.svg',
    background: '#06B6D4',
    color: '#fff',
    description: 'Tailwind CSS의 유틸리티 중심 클래스를 활용하여 빠르게 맞춤형 디자인을 구현하고, 반응형 디자인을 쉽게 적용할 수 있습니다.',
  },
  {
    id: 9,
    name: 'Bootstrap',
    icon: 'bootstrap.svg',
    background: '#7952B3',
    color: '#fff',
    description: 'Bootstrap의 재사용 가능한 컴포넌트와 그리드 시스템을 활용하여 일관된 디자인의 반응형 웹사이트를 신속하게 개발할 수 있습니다.',
  },
  {
    id: 10,
    name: 'Figma',
    icon: 'figma.svg',
    background: '#F24E1E',
    color: '#fff',
    description: 'Figma를 사용하여 팀원들과 협업하며, 사용자 경험을 중심으로 한 디자인 프로토타입을 신속하게 제작하고 공유할 수 있습니다.',
  },
  {
    id: 11,
    name: 'Adobe Photoshop',
    icon: 'adobephotoshop.svg',
    background: '#31A8FF',
    color: '#fff',
    description: 'Adobe Photoshop의 강력한 이미지 편집 기능을 활용하여 고품질의 그래픽 자료를 제작하고, 웹 및 앱 디자인에 적용할 수 있습니다.',
  },
  {
    id: 12,
    name: 'Git',
    icon: 'git.svg',
    background: '#F05032',
    color: '#000',
    description: 'Git을 통한 효율적인 버전 관리와 협업을 통해 대규모 프로젝트에서도 코드의 일관성을 유지하고, 개발 과정을 원활하게 관리할 수 있습니다.',
  },
];

export default function Skills() {
  return (
    <>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* 타이틀 */}
          <Title tit={'SKILLS'} desc={"Something I've ever tried or used!"} />
          <div className="flex flex-wrap -m-4">
            {skillsData.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
          {/* <button className="flex mx-auto mt-16 textWhite bg-amber-500 border-0 py-2 px-8 focus:outline-none hover:bg-amber-600 rounded text-lg">Button</button> */}
        </div>
      </section>
    </>
  );
}
