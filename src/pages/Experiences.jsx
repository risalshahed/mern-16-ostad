import { useState } from "react";
import Container from "../components/common/Container.jsx";
import ExperienceCard from "../components/experiences/ExperienceCard.jsx";
import { experiences } from "../data/experiences.js";
import SearchInput from "../components/common/SearchInput.jsx";

const Experiences = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [sortOrder, setSortOrder] = useState('asc')


  const experienceTypes = [
    'All',
    'Full Time',
    'Part Time',
    'Freelance',
    'Internship'
  ]

  // Search box -> FRONTEND

  // Search Step 1
  const searchedExperiences = experiences.filter(experience => {
    const searchValue = searchTerm.toLowerCase()

    return (
      experience.company
        .toLowerCase()
        .includes(searchValue) ||
      experience.position
        .toLowerCase()
        .includes(searchValue)
    )
  })
  // END of Search Step 1
  
  // Filter Step 1
  const filteredExperiences = (
    selectedType === 'All'
    ? searchedExperiences
    : searchedExperiences.filter(experience => experience.employmentType === selectedType)
  )
  // END of Filter Step 1
  
  // Sort Step 1
  const sortedExperiences = [...filteredExperiences].sort((a, b) =>
    sortOrder === 'asc'
    ? a.company.localeCompare(b.company)
    : b.company.localeCompare(a.company)
  )
  // END of Sort Step 1

  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-10 text-4xl font-bold">
          My Experiences
        </h1>

        {/* Search Step 2 -> Search Input Field */}
        <div className="mb-6">
          <SearchInput
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Search Experience'
          />
        </div>
        {/* END of Search Step 2 -> Search Input Field */}

        <div className="flex justify-center gap-x-6">
          {/*  Filter Step 2 -> Filter Button */}
          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="rounded-lg border px-4p py-2 cursor-pointer"
          >
            {
              experienceTypes.map(type =>
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              )
            }
          </select>
          {/*  END of Filter Step 2 */}

          {/* Sort Step 2 */}
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="rounded-lg border px-4 py-2 ml- cursor-pointer"
          >
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
          {/* END of Sort Step 2 */}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {
            // experiences.map(experience =>
            // Search Step 3 (Start and End in same line) 
            // searchedExperiences.map(experience =>
            // Filter Step 3 (Start and End in same line) 
            // filteredExperiences.map(experience =>
            // Sort Step 3 (Start and End in same line) 
            sortedExperiences.map(experience =>
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            )
          }
        </div>
      </Container>
    </section>
  )
}

export default Experiences;