import Title from '../../components/title.js';
import SkillItem from '../../components/skillItem.js';
import skillsData from '../../data/skillsData.json';

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
        </div>
      </section>
    </>
  );
}
