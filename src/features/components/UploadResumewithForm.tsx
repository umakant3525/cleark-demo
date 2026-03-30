
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormDataState {
    firstName: string
    lastName: string
    email: string
    phone: string
    github: string
    linkedin: string
    yearsOfExperience: string
    education: string
    resume: File | null
}

function UploadResumewithForm() {
    const [formData, setFormData] = useState<FormDataState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        yearsOfExperience: '',
        education: '',
        resume: null
    })

    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        const { name, value } = target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        console.group('🔄 Form Field Change')
        console.log(`Field: ${name}`)
        console.log(`Value: ${value}`)
        console.log('Updated Form State:', {
            ...formData,
            [name]: value
        })
        console.groupEnd()
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0]
        if (file) {
            setFormData(prev => ({
                ...prev,
                resume: file
            }))

            console.group('📄 Resume File Upload')
            console.log(`File Name: ${file.name}`)
            console.log(`File Size: ${(file.size / 1024).toFixed(2)} KB`)
            console.log(`File Type: ${file.type}`)
            console.log('File Details:', file)
            console.groupEnd()
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        console.group('📤 FORM SUBMISSION')
        console.log('Submission timestamp:', new Date().toISOString())
        console.log('Form Data:', formData)

        const isFormValid = formData.firstName && formData.lastName && formData.email && formData.resume

        if (isFormValid && formData.resume) {
            setSubmitted(true)

            const dataToStore = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                github: formData.github,
                linkedin: formData.linkedin,
                yearsOfExperience: formData.yearsOfExperience,
                education: formData.education,
                resume: formData.resume.name,
                resumeSize: formData.resume.size,
                resumeType: formData.resume.type,
                submittedAt: new Date().toISOString()
            }

            console.log('%c✅ VALIDATION PASSED', 'color: green; font-weight: bold; font-size: 14px;')
            console.log('Data to be saved:', dataToStore)

            try {
                localStorage.setItem('userProfile', JSON.stringify(dataToStore))
                console.log('%c💾 Successfully saved to localStorage', 'color: blue; font-weight: bold;')
                console.log('Retrieved from localStorage:', JSON.parse(localStorage.getItem('userProfile') || '{}'))
            } catch (error) {
                console.error('%c❌ Failed to save to localStorage', 'color: red; font-weight: bold;', error)
            }

            console.log('%c⏳ Redirecting in 1.5 seconds...', 'color: orange; font-weight: bold;')
            setTimeout(() => {
                window.location.href = '/processing'
            }, 1500)
        } else {
            const missingFields = {
                firstName: !formData.firstName,
                lastName: !formData.lastName,
                email: !formData.email,
                resume: !formData.resume
            }

            console.warn('%c❌ VALIDATION FAILED', 'color: red; font-weight: bold; font-size: 14px;')
            console.warn('Missing required fields:', missingFields)
            console.warn('Current form state:', formData)

            alert('Please fill all required fields')
        }

        console.groupEnd()
    }

    return (
        <>
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes successPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                .form-input {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(147, 112, 219, 0.3);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                    color: white;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }

                .form-input:focus {
                    outline: none;
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(147, 112, 219, 0.8);
                    box-shadow: 0 0 20px rgba(147, 112, 219, 0.3);
                }

                .form-input::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Enhanced Select Dropdown Styling */
                select.form-input {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a78bfa' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 1rem center;
                    background-color: rgba(255, 255, 255, 0.05);
                    padding-right: 2.5rem;
                    cursor: pointer;
                }

                select.form-input option {
                    background: linear-gradient(135deg, #1e1b4b 0%, #2d1b69 100%);
                    color: black;
                    padding: 0.75rem 1rem;
                    border: none;
                    outline: none;
                }

                select.form-input option:checked {
                    background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
                    color: black;
                    font-weight: 600;
                }

                select.form-input option:hover {
                    background: linear-gradient(135deg, #4f46e5 0%, #a855f7 100%);
                }

                .success-animation {
                    animation: successPulse 0.6s ease-out;
                }

                .slide-in-up {
                    animation: slideInUp 0.8s ease-out;
                }
            `}</style>

            <section className="mb-16 animate-fade-in-down">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Complete Your Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Complete Profile Form - Single Section */}
                    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/15 slide-in-up" style={{ animationDelay: '0.1s' }}>

                        {/* Personal Information */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                👤 Personal Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name *"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name *"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input sm:col-span-2"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input sm:col-span-2"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <input
                                    type="url"
                                    name="github"
                                    placeholder="GitHub Profile"
                                    value={formData.github}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                <input
                                    type="url"
                                    name="linkedin"
                                    placeholder="LinkedIn Profile"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                {/* Years of Experience Dropdown */}
                                <div>
                                    <label className="block text-sm font-semibold text-purple-300 mb-2">💼 Years of Experience *</label>
                                    <select
                                        name="yearsOfExperience"
                                        value={formData.yearsOfExperience}
                                        onChange={handleChange}
                                        className="form-input w-full"
                                        required
                                    >
                                        <option value="">Select your experience level</option>
                                        <option value="0-2">0-2 years</option>
                                        <option value="2-5">2-5 years</option>
                                        <option value="5-10">5-10 years</option>
                                        <option value="10-15">10-15 years</option>
                                        <option value="15-20">15-20 years</option>
                                        <option value="20+">20+ years</option>
                                    </select>
                                </div>

                                <div>
                                    <textarea
                                        name="education"
                                        placeholder="🎓 Education you have obtained"
                                        value={formData.education}
                                        onChange={handleChange}
                                        className="form-input w-full min-h-[100px] resize-none"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-dashed border-purple-400/50 text-center hover:border-purple-400 transition-all duration-300 hover:bg-white/20 cursor-pointer group mt-6">
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    id="resume-upload"
                                    onChange={handleFileChange}
                                    required
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer block">
                                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {formData.resume ? '✅' : '📄'}
                                    </div>
                                    <div className="text-white/80 mb-3 text-sm font-semibold">
                                        {formData.resume ? `Selected: ${formData.resume?.name}` : 'Drag and drop your resume here or click to browse'}
                                    </div>
                                    <button
                                        type="button"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-sm"
                                    >
                                        Choose File
                                    </button>
                                    <p className="text-xs text-gray-400 mt-3">Supported formats: PDF, DOC, DOCX</p>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={submitted}
                            className={`w-full py-4 px-8 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 ${submitted
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 cursor-not-allowed success-animation'
                                    : 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/50'
                                }`}
                        >
                            {submitted ? '✅ Profile Submitted!' : 'Submit & Get Job Matches'}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default UploadResumewithForm