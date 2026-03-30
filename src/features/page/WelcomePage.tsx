
import { useClerk } from '@clerk/react'

function WelcomePage() {
    const { redirectToSignIn } = useClerk()

    const handleGetStarted = () => {
        redirectToSignIn()
    }

    return (
        <>
            <style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes floatingAnimation {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                @keyframes pulseGlow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
                    }
                }
                
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out;
                }
                
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out;
                }
                
                .animate-floating {
                    animation: floatingAnimation 3s ease-in-out infinite;
                }
                
                .gradient-shift {
                    background-size: 200% 200%;
                    animation: gradientShift 8s ease infinite;
                }
                
                .pulse-glow {
                    animation: pulseGlow 2s ease-in-out infinite;
                }
            `}</style>

        <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">

            {/* Animated Background Elements */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="fixed top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="fixed bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8">
                <section className="text-center max-w-5xl mx-auto">

                    {/* Icon/Logo Animation */}
                    <div className="animate-fade-in-down mb-8 mt-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 shadow-lg pulse-glow hover:scale-110 transition-transform duration-300">
                            <div className="text-4xl">🚀</div>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="animate-fade-in-down text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight" style={{ animationDelay: '0.1s' }}>
                        Welcome to AI Powered SmartHire
                    </h1>

                    {/* Subtitle */}
                    <p className="animate-fade-in-up text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">AI-driven job matching platform</span> that connects talent with opportunity in seconds
                    </p>

                    {/* Features Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12 mb-12">
                        <div className="animate-slide-in-left p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.3s' }}>
                            <div className="text-3xl mb-3">⚡</div>
                            <h3 className="text-white font-bold mb-2">Lightning Fast</h3>
                            <p className="text-gray-300 text-sm">Get matched instantly with perfect opportunities</p>
                        </div>

                        <div className="animate-fade-in-down p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
                            <div className="text-3xl mb-3">🤖</div>
                            <h3 className="text-white font-bold mb-2">AI Powered</h3>
                            <p className="text-gray-300 text-sm">Machine learning algorithms ensure perfect fits</p>
                        </div>

                        <div className="animate-slide-in-right p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.5s' }}>
                            <div className="text-3xl mb-3">🎯</div>
                            <h3 className="text-white font-bold mb-2">Precision Match</h3>
                            <p className="text-gray-300 text-sm">Find roles that truly match your skills</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <button onClick={handleGetStarted} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            Get Started

                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 pt-12 border-t border-white/20">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                            <div className="group">
                                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">50K+</p>
                                <p className="text-gray-300 mt-2 group-hover:text-white transition-colors">Jobs Matched</p>
                            </div>
                            <div className="group">
                                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">95%</p>
                                <p className="text-gray-300 mt-2 group-hover:text-white transition-colors">Success Rate</p>
                            </div>
                            <div className="group">
                                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">24/7</p>
                                <p className="text-gray-300 mt-2 group-hover:text-white transition-colors">AI Matching</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}

export default WelcomePage