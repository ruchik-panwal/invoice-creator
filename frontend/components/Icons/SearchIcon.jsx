export default function SearchIcon({ className ,strokeWidth = 1.5}) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 97 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M48.5 2.75C73.7747 2.75 94.25 23.0167 94.25 48C94.25 72.9833 73.7747 93.25 48.5 93.25C23.2253 93.25 2.75 72.9833 2.75 48C2.75 23.0167 23.2253 2.75 48.5 2.75Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} // Now uses the prop!
      />
      <line 
        x1="80.5303" 
        y1="79.6652" 
        x2="94.5303" 
        y2="93.6652" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} // Now uses the prop!
      />
    </svg>
  );
}