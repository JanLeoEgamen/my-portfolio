export default function CVButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href="/cv.pdf"
                download="JanLeoEgamen_CV.pdf"
                className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 hover:scale-105 transition-all duration-300 text-sm font-medium animate-pulse hover:animate-none"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                </svg>
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">CV</span>
            </a>
        </div>
    );
}