import { useState } from "react";
import { skills } from "../../data/skills.js";
import Container from "../common/Container.jsx"

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database'
  ];

  const filteredSkills = (
    selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === selectedCategory.toLowerCase())
  )

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            My Skills
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {
            categories.map((category, index) =>
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'rounded bg-blue-600 px-4 py-2 text-white'
                    : 'rounded border px-4 py-2'
                }
              >
                {category}
              </button>
            )
          }
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {
            filteredSkills.map(skill =>
              <div key={skill.id}>
                <div className="mb-2 flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded bg-gray-200">
                  <div
                    className="h-full bg-blue-600"
                    style={{
                      width: `${skill.level}%`
                    }}
                  >
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </Container>

    </section>
  )
}

export default Skills;