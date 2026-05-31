import { useState } from 'react'
import { projects } from '../data/projects'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Data & ML', value: 'data' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category.includes(active))

  return (
    <section id="projects" className="px-10 py-8 border-b border-[#d4bfa8]">
      <h2
        className="text-xl font-semibold text-[#2c1a0e] mb-4 pb-2 border-b border-[#d4bfa8]"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Projects
      </h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`text-[12px] px-4 py-1.5 rounded-full border transition-colors ${
              active === f.value
                ? 'bg-[#7a5535] text-[#fffaf5] border-[#7a5535]'
                : 'bg-transparent text-[#5a3a20] border-[#d4bfa8] hover:border-[#7a5535]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map(project => (
          <div
            key={project.id}
            className="bg-[#fff9f5] border border-[#d4bfa8] rounded-xl p-4 hover:border-[#7a5535] transition-colors flex flex-col gap-2"
          >
            <h3
              className="text-[15px] font-semibold text-[#2c1a0e]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {project.title}
            </h3>
            <p className="text-[12px] text-[#7a5535] leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#eddcc8] text-[#5a3a20] text-[10px] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#7a5535] hover:text-[#5a3a20] flex items-center gap-1"
              >
                GitHub →
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#7a5535] hover:text-[#5a3a20] flex items-center gap-1"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}