import { Check } from 'lucide-react';

const ThemeCard = ({ theme, selected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(theme)}
      className={`card cursor-pointer transition-all duration-300 ${
        selected ? 'ring-4 ring-primary-500' : 'hover:scale-105'
      }`}
    >
      <div className="relative">
        {selected && (
          <div className="absolute top-2 right-2 bg-primary-500 text-white rounded-full p-1">
            <Check className="h-5 w-5" />
          </div>
        )}
        
        <div 
          className="h-32 rounded-lg mb-4"
          style={{ 
            background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})` 
          }}
        />
        
        <h3 className="text-xl font-bold mb-2">{theme.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{theme.description}</p>
        
        <div className="flex gap-2">
          {theme.colors?.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
