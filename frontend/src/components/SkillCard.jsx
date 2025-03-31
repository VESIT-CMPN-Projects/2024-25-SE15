import { Link } from 'react-router-dom';

const SkillCard = ({ skill }) => {
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 h-full">
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-text-primary">{skill.title}</h3>
        <p className="text-sm text-text-secondary line-clamp-3 mb-4">{skill.description}</p>
        
        {skill.level && (
          <div className="flex items-center gap-2 mb-4">
            <span className="badge badge-secondary">{skill.level}</span>
            {skill.duration && (
              <span className="text-xs text-text-muted">• {skill.duration}</span>
            )}
          </div>
        )}
        
        <div className="mt-auto pt-2">
          <span className="inline-block px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
