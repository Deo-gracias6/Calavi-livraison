import { Truck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-8 w-auto' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center bg-primary-500 text-white p-1.5 rounded-md mr-2">
        <Truck size={20} strokeWidth={2.5} />
      </div>
      <div className="font-bold text-lg leading-none text-primary-700">
        CALAVI <span className="text-secondary-500">COURSES</span>
      </div>
    </div>
  );
};

export default Logo;