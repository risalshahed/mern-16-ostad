import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences.js";
import Container from "../common/Container.jsx";
import ExperienceCard from "../experiences/ExperienceCard.jsx";

const FeaturedExperiences = () => {
  const featuredExperiences = experiences
    .filter(experience => experience.featured)
    .slice(0, 3)

  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Featured Experiences
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
          {
            featuredExperiences.map(experience =>
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            )
          }
        </div>

        <div className="mt-10 text-center">
          <Link
            to='/experiences'
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            View All Experiences
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedExperiences;