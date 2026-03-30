import { useState, useEffect } from 'react'

interface UserProfile {
    firstName: string
    lastName: string
    email: string
    phone?: string
    github?: string
    linkedin?: string
    yearsOfExperience?: string
    education?: string
    resume?: string
    resumeSize?: number
    resumeType?: string
}

interface Job {
    id: number
    title: string
    company: string
    location: string
    matchPercentage: number
    description: string
    skills: string[]
    salary: string
    jobType?: string
    experience?: string
}

function ProcessingPage() {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [processing, setProcessing] = useState(true)
    const [matchedJobs, setMatchedJobs] = useState<Job[]>([])

    useEffect(() => {
        const profile = localStorage.getItem('userProfile')
        if (profile) {
            setUserProfile(JSON.parse(profile))
        }

        // Simulate processing
        setTimeout(() => {
            setProcessing(false)
            // Mock AI matched jobs
            setMatchedJobs([
                {
                    id: 1,
                    title: 'Senior Full Stack Developer',
                    company: 'TechVision Inc.',
                    location: 'San Francisco, CA • Remote',
                    matchPercentage: 95,
                    description: 'Build scalable applications with modern tech stack. Lead a team of 5+ engineers working on cloud infrastructure.',
                    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
                    salary: '$150K - $200K',
                    jobType: 'Full-time',
                    experience: '5+ years'
                },
                {
                    id: 2,
                    title: 'AI/ML Engineer',
                    company: 'DataAI Labs',
                    location: 'New York, NY • Hybrid',
                    matchPercentage: 92,
                    description: 'Develop cutting-edge AI solutions and machine learning models for enterprise clients. Work with cutting-edge frameworks.',
                    skills: ['Python', 'TensorFlow', 'ML', 'PyTorch', 'Deep Learning'],
                    salary: '$180K - $250K',
                    jobType: 'Full-time',
                    experience: '3+ years'
                },
                {
                    id: 3,
                    title: 'Product Manager (AI)',
                    company: 'InnovateTech',
                    location: 'Austin, TX • On-site',
                    matchPercentage: 88,
                    description: 'Drive product strategy for AI-driven solutions. Collaborate with engineering and design teams to bring innovative products to market.',
                    skills: ['Product Strategy', 'AI/ML', 'Analytics', 'Leadership'],
                    salary: '$160K - $220K',
                    jobType: 'Full-time',
                    experience: '4+ years'
                },
                {
                    id: 4,
                    title: 'Frontend Developer',
                    company: 'CloudSoft Solutions',
                    location: 'Seattle, WA • Remote',
                    matchPercentage: 90,
                    description: 'Create beautiful and responsive user interfaces for our web applications. Work with modern React and Next.js technologies.',
                    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'REST API'],
                    salary: '$130K - $180K',
                    jobType: 'Full-time',
                    experience: '2+ years'
                },
                {
                    id: 5,
                    title: 'Backend Engineer',
                    company: 'DataStream Corp',
                    location: 'Boston, MA • Hybrid',
                    matchPercentage: 87,
                    description: 'Design and implement robust backend services handling millions of requests. Optimize database performance and system architecture.',
                    skills: ['Node.js', 'Java', 'Microservices', 'Docker', 'Kubernetes'],
                    salary: '$140K - $200K',
                    jobType: 'Full-time',
                    experience: '3+ years'
                },
                {
                    id: 6,
                    title: 'Full Stack Developer',
                    company: 'StartupHub',
                    location: 'San Jose, CA • Remote',
                    matchPercentage: 85,
                    description: 'Build end-to-end features for our SaaS platform. Work in a fast-paced startup environment with cutting-edge technologies.',
                    skills: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Git'],
                    salary: '$120K - $170K',
                    jobType: 'Full-time',
                    experience: '2+ years'
                }
            ])
        }, 3000)
    }, [])

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

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
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

                .animate-spin {
                    animation: spin 2s linear infinite;
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

                .match-bar {
                    background: linear-gradient(to right, #3b82f6, #a855f7, #ec4899);
                    border-radius: 9999px;
                    height: 8px;
                    margin-top: 0.5rem;
                }
            `}</style>

            <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
                
                {/* Animated Background Elements */}
                <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="fixed top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="fixed bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Content Container */}
                <div className="relative z-10 px-4 sm:px-8 py-12">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Processing View */}
                        {processing ? (
                            <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in-down">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                                        <div className="text-5xl animate-spin">🤖</div>
                                    </div>
                                    
                                    <h1 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        AI Processing Your Profile
                                    </h1>
                                    
                                    <p className="text-xl text-gray-300 mb-8">Analyzing your skills and experience...</p>
                                    
                                    <div className="flex justify-center gap-2 mb-8">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>

                                    <div className="text-lg text-gray-400">Finding your perfect job matches...</div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* User Profile Summary */}
                                <div className="mb-12 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 animate-fade-in-down">
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                                        👤 Welcome back, {userProfile?.firstName}!
                                    </h2>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                        <div className="p-4 rounded-lg bg-white/5 border border-blue-400/20">
                                            <p className="text-gray-400 text-sm">Email</p>
                                            <p className="text-white font-semibold text-sm break-all">{userProfile?.email}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-white/5 border border-purple-400/20">
                                            <p className="text-gray-400 text-sm">Phone</p>
                                            <p className="text-white font-semibold text-sm">{userProfile?.phone || 'Not provided'}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-white/5 border border-pink-400/20">
                                            <p className="text-gray-400 text-sm">Resume</p>
                                            <p className="text-white font-semibold text-xs truncate">{userProfile?.resume || 'Not uploaded'}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-white/5 border border-green-400/20">
                                            <p className="text-gray-400 text-sm">Experience</p>
                                            <p className="text-white font-semibold text-sm">{userProfile?.yearsOfExperience || 'Not specified'}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                                            <p className="text-gray-400 text-sm">GitHub</p>
                                            <a 
                                                href={userProfile?.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-400 font-semibold text-xs hover:underline truncate block"
                                            >
                                                {userProfile?.github ? userProfile.github.split('/').pop() : 'Not provided'}
                                            </a>
                                        </div>
                                        <div className="p-4 rounded-lg bg-white/5 border border-indigo-400/20">
                                            <p className="text-gray-400 text-sm">LinkedIn</p>
                                            <a 
                                                href={userProfile?.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-400 font-semibold text-xs hover:underline truncate block"
                                            >
                                                {userProfile?.linkedin ? userProfile.linkedin.split('/').pop() : 'Not provided'}
                                            </a>
                                        </div>
                                    </div>

                                    {userProfile?.education && (
                                        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20">
                                            <p className="text-gray-400 text-sm mb-2">🎓 Education</p>
                                            <p className="text-white text-sm">{userProfile.education}</p>
                                        </div>
                                    )}
                                </div>

                                {/* AI Matched Jobs */}
                                <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <h2 className="text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                                        🎯 AI-Matched Jobs for You
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        {matchedJobs.map((job, index) => (
                                            <div 
                                                key={job.id}
                                                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/15 hover:scale-105 group"
                                                style={{ 
                                                    animation: `slideIn${index % 2 === 0 ? 'Left' : 'Right'} 0.8s ease-out`,
                                                    animationDelay: `${0.3 + index * 0.1}s`,
                                                    animationFillMode: 'both'
                                                }}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
                                                        <p className="text-purple-300 font-semibold mb-1">{job.company}</p>
                                                        <div className="flex flex-wrap gap-2 mb-2">
                                                            <p className="text-sm text-gray-400">📍 {job.location}</p>
                                                            {job.jobType && <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded">{job.jobType}</span>}
                                                            {job.experience && <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded">{job.experience}</span>}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="text-right">
                                                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                                            {job.matchPercentage}%
                                                        </div>
                                                        <p className="text-sm text-gray-400">Match Score</p>
                                                    </div>
                                                </div>

                                                {/* Match Bar */}
                                                <div className="match-bar" style={{ width: `${job.matchPercentage}%` }}></div>

                                                <p className="text-gray-300 mt-4 mb-4">{job.description}</p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {job.skills.map((skill, i) => (
                                                        <span key={i} className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold border border-blue-400/30">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-lg font-bold text-emerald-400">{job.salary}</p>
                                                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50">
                                                        Apply Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div className="text-center py-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                    <p className="text-gray-400 mb-4">Didn't find what you're looking for?</p>
                                    <button className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                                        View All Opportunities
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProcessingPage
