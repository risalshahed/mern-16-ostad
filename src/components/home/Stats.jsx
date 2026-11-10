import { educations } from "../../data/educations.js"
import { experiences } from "../../data/experiences.js"
import { projects } from "../../data/projects.js"
import { skills } from "../../data/skills.js"
import Container from "../common/Container.jsx"

const Stats = () => {
  const stats = [
    {
      id: crypto.randomUUID(),
      label: 'Experiences',
      value: experiences.length
    },
    {
      id: crypto.randomUUID(),
      label: 'Educations',
      value: educations.length
    },
    {
      id: crypto.randomUUID(),
      label: 'Projects',
      value: projects.length
    },
    {
      id: crypto.randomUUID(),
      label: 'Skills',
      value: skills.length
    },
  ]

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {
            stats.map(stat =>
              <div
                key={stat.id}
                className="rounded-xl border p-6 text-center"
              >
                <h3 className="text-3xl font-bold">
                  {stat.value}+
                </h3>

                <p className="mt-2 text-gray-600">
                  {stat.label}
                </p>
              </div>
            )
          }
        </div>
      </Container>

    </section>
  )
}

export default Stats