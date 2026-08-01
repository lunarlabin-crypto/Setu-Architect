import { cn } from '@/lib/cn';

export function SetuLogo({ className, textColorClass = 'text-current' }) {
  return (
    <svg 
      viewBox="0 0 100 86" 
      className={cn("h-full w-auto", className)} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g 
        fontFamily="var(--font-montserrat), sans-serif" 
        fontWeight="900" 
        fontSize="56px" 
        className={cn("fill-current transition-colors", textColorClass)}
      >
        <text x="0" y="42" letterSpacing="-2">S</text>
        <text x="38" y="42" letterSpacing="-2">E</text>
        
        <rect x="0" y="48" width="10" height="10" fill="#900000" />
        
        <text x="14" y="84" letterSpacing="-2">T</text>
        <text x="49" y="84" letterSpacing="-2">U</text>
      </g>
      
      <rect 
        x="82" 
        y="0" 
        width="18" 
        height="86" 
        className={cn("transition-colors", textColorClass === 'text-white' ? 'fill-white' : 'fill-black')} 
      />
      
      <text 
        transform="translate(95, 82) rotate(-90)"
        fontFamily="var(--font-montserrat), sans-serif" 
        fontWeight="500" 
        fontSize="10px" 
        letterSpacing="4px"
        className={cn("transition-colors", textColorClass === 'text-white' ? 'fill-black' : 'fill-white')}
      >
        architects
      </text>
    </svg>
  );
}
