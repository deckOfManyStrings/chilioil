import { FlameIcon } from 'lucide-react';

export default function HeatLevel({ level }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FlameIcon
          key={index}
          className={`h-4 w-4 ${
            index < level 
              ? 'text-red-500' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}