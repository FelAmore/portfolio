const experiences = [
  {
    id: 1,
    role: "Training Manager",
    company: "Robogals, Jakarta",
    period: "2024 – 2025",
    description:
      "Co-delivered a GitHub 101 workshop on version control for ~20 volunteers and a Data Scraping workshop for ~30 high school students teaching foundational data collection and analysis concepts.",
  },
  {
    id: 2,
    role: "Technical Support Intern",
    company: "J&T Express, Jakarta",
    period: "2024",
    description:
      "Supported client onboarding by resolving technical issues and clarifying system usage, contributing to a smooth onboarding experience.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-10 py-8 border-b border-[#d4bfa8]">
      <h2
        className="text-xl font-semibold text-[#2c1a0e] mb-6 pb-2 border-b border-[#d4bfa8]"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Experience
      </h2>
      <div className="flex flex-col gap-0">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex gap-4 py-4 border-b border-[#d4bfa8] last:border-b-0">
            <div className="w-2.5 h-2.5 min-w-2.5 rounded-full bg-[#7a5535] mt-1.5" />
            <div>
              <h3 className="text-[14px] font-medium text-[#2c1a0e]">{exp.role}</h3>
              <p className="text-[12px] text-[#7a5535] mb-1">{exp.company} · {exp.period}</p>
              <p className="text-[13px] text-[#7a5535] leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}