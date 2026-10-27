import StatCard from "./StatCard.jsx"
import TaskItem from "./TaskItem.jsx"

const tasks = [
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'Website Redesign',
    priority: 'High',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Fix Authentication',
    description: 'Backend API',
    priority: 'Medium',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Build Landing Page',
    description: 'UI Design',
    priority: 'Low',
    completed: true
  }
]

const Dashboard = () => {
  return (
    <main className="flex-1 gap-4 md:p-6">
      <p className="text-sm font-medium text-blue-600">
        Welcome Back
      </p>
      <h1 className="my-2 text-2xl font-bold text-gray-900 md:text-3xl">
        Good Morning, Learners
      </h1>
      <p className="text-sm text-gray-500 md:text-base">
        Here's what's happening today
      </p>
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title='Total Tasks'
          value='24'
        />
        <StatCard
          title='Pending Tasks'
          value='14'
        />
        <StatCard
          title='Completed Tasks'
          value='10'
        />
      </section>
      {/* Tasks Section */}
      <section className="mt-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            My Tasks
          </h2>
          <button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition">
            + Add Task
          </button>
        </div>
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          {
            tasks.map(task =>
              <TaskItem
                key={task.id}
                task={task}
              />
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Dashboard;