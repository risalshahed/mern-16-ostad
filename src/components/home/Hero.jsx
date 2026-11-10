import Container from "../common/Container.jsx"

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-blue-600">
              Hello, I am
            </p>
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Zahid Ahmed
            </h1>

            <h2 className="mb-5 text-2xl text-gray-600">
              React Frontend Developer
            </h2>

            <p className="mb-8 text-gray-600">
              I build modern, responsive, user friendly web applications
            </p>

            <div className="flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
                Contact Me
              </button>

              <button className="rounded-lg border px-6 py-3">
                Download Resume
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex items-center">
            <img src="" alt="Hero Image" />
            {/* Description */}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero;