import React from 'react'
import { Mail, Check } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { FadeIn } from '../Shared/FadeIn'
import asilahAvatar from '../../assets/images/asilah.png'
import sumaitaAvatar from '../../assets/images/sumaita.jpg'

const team = [
  {
    name: 'Sumaita Alam',
    role: 'Product Lead',
    avatar: sumaitaAvatar,
    verified: true,
    email: 'alam@graduate.utm.my',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/sumaita-alam-6524b3348?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Asilah Mohd Razak',
    role: 'Developer',
    avatar: asilahAvatar,
    verified: true,
    email: 'asilahmr16@gmail.com',
    github: 'https://github.com/asilahmr',
    linkedin: 'https://www.linkedin.com/in/asilahmr/',
  },
  {
    name: 'Tan Shuhan',
    role: 'Developer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    verified: true,
    email: 'shuhan@ktdi.utm.my',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Nam Sook Jing',
    role: 'Developer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    verified: true,
    email: 'sookjing@ktdi.utm.my',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
]

export default function Team() {
  return (
    <section className="py-24 bg-[#f8fffe]" id="team">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-600 mb-4">The Team</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#07170d] tracking-tight">
            Built by students, for students.
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            We are a group of passionate KTDI residents who believe campus life can be more connected and convenient.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1}>
              <div
                className="group flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(22,163,74,0.12)"
                  e.currentTarget.style.borderColor = "rgba(22,163,74,0.2)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)"
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"
                }}
              >
                <div className="relative mb-5">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                  />
                  {m.verified && (
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                      <Check size={10} className="text-white" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-tight">{m.name}</h3>
                <p className="text-xs text-green-600 font-semibold mt-1 mb-4">{m.role}</p>
                <div className="flex gap-3">
                  <a href={`mailto:${m.email || '#'}`} className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors group/icon">
                    <Mail size={14} className="text-gray-500 group-hover/icon:text-green-600" />
                  </a>
                  <a href={m.github || '#'} className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors group/icon">
                    <Github size={14} className="text-gray-500 group-hover/icon:text-green-600" />
                  </a>
                  <a href={m.linkedin || '#'} className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors group/icon">
                    <Linkedin size={14} className="text-gray-500 group-hover/icon:text-green-600" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
