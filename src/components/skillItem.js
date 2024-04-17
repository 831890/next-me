// SkillItem.js

const SkillItem = ({ skill }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: `${skill.background}`, color: `${skill.color}` }}>
          <img src={`/images/${skill.icon}`} alt={skill.name} className={`w-6 h-6 ${skill.color === '#fff' ? 'svg-fff' : skill.color === '#000' ? 'svg-000' : ''}`} />
        </div>
        <h3 className="text-lg text-gray-900 font-medium title-font mb-2">{skill.name}</h3>
        <p className="leading-relaxed text-base">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillItem;
