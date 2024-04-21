import Title from '../../components/title.js';
import SkillItem from '../../components/skillItem.js';
import skillsData from '../../data/skillsData.json';

export default function Skills() {
  return (
    <>
      <section className="body-font">
        <div className="container py-24 px-4 mx-auto">
          {/* 타이틀 */}
          <Title tit={'SKILLS'} desc={"Something I've ever tried or used!"} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            {skillsData.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
