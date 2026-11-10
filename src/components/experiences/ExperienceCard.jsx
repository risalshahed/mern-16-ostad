const ExperienceCard = ({ experience }) => {
  const { employmentType, position, company, description, technologies } = experience;

  return (
    <article className="rounded-xl border p-6 mt-12">
      <p className="mb-2 text-sm text-blue-600">
        {employmentType}
      </p>
      <h3 className="text-xl font-bold">
        {position}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {company}
      </p>
      <p className="mt-4 text-sm text-gray-600">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {
          technologies.map(technology =>
            <span
              key={crypto.randomUUID()}
              className="rounded bg-gray-100 px-3 py-1 text-sm"
            >
              {technology}
            </span>
          )
        }
      </div>

    </article>
  )
}

export default ExperienceCard;