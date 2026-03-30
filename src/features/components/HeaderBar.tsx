import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function HeaderBar() {
  return (
    <>
      <style>{`
        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
        }
        
        .animate-slide-down-fade {
          animation: slideDownFade 0.6s ease-out;
        }
        
        .header-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .header-backdrop {
          backdrop-filter: blur(10px);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(88, 28, 135, 0.4) 100%);
          border-bottom: 1px solid rgba(147, 112, 219, 0.2);
        }
      `}</style>
      
      <header className="header-backdrop header-shadow sticky top-0 z-50 text-white py-4 px-6 flex justify-between items-center shadow-xl animate-slide-down-fade">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">🚀</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent header-glow">
            SmartHire
          </h1>
        </div>
        
        {/* Auth Buttons Section */}
        <div className="flex items-center space-x-3">
          <Show when="signed-out">
            <button className="px-6 py-2 rounded-lg font-semibold text-slate-900 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              <SignInButton />
            </button>
            <button className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border border-purple-400/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
              <SignUpButton />
            </button>
          </Show>
          <Show when="signed-in">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <UserButton />
            </div>
          </Show>
        </div>
      </header>
    </>
  )
}

export default HeaderBar