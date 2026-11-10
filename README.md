# Dynamic Portfolio

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/risalshahed/mern-16-ostad.git
```

### Go to the Project Directory

```bash
cd mern-15-ostad
```

### Switch to the Branch

```bash
git switch module-25-dynamic-portfolio
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

### Final Professional Structure

```text
src/
│
├── components/
│   │
│   ├── common/
│   │   ├── Container.jsx
│   │   └── SearchInput.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── FeaturedExperiences.jsx
│   │   ├── FeaturedEducations.jsx
│   │   ├── FeaturedProjects.jsx
│   │   └── Skills.jsx
│   │
│   ├── experiences/
│   │   └── ExperienceCard.jsx
│   │
│   ├── educations/
│   │   └── EducationCard.jsx
│   │
│   └── projects/
│       └── ProjectCard.jsx
│
├── context/
│   ├── PortfolioContext.jsx
│   └── ThemeContext.jsx
│
├── data/
│   ├── experiences.js
│   ├── educations.js
│   ├── projects.js
│   └── skills.js
│
├── hooks/
│   └── usePortfolioFilters.js
│
├── pages/
│   ├── Home.jsx
│   ├── Experiences.jsx
│   ├── ExperienceDetails.jsx
│   ├── Educations.jsx
│   ├── EducationDetails.jsx
│   ├── Projects.jsx
│   └── ProjectDetails.jsx
│
├── utils/
│   ├── searchItems.js
│   ├── filterItems.js
│   └── sortItems.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Project Development Steps

## Step 1–4: Create Portfolio Data

Create the following data files inside `src/data/`:

* `experiences.js`
* `educations.js`
* `projects.js`
* `skills.js`

---

## Step 5: Setup BrowserRouter

Import and wrap the application with `BrowserRouter`.

**File:**

```text
src/main.jsx
```

---

## Step 6: Create Pages

Create the following pages inside:

```text
src/pages/
```

* `Home.jsx`
* `Experiences.jsx`
* `Educations.jsx`
* `Projects.jsx`

---

## Step 7: Setup Application Routes

Configure all application routes using React Router.

**File:**

```text
src/App.jsx
```

---

## Step 8: Create Header

Create the main navigation header.

**File:**

```text
src/components/layout/Header.jsx
```

---

## Step 9: Create Footer

Create the application footer.

**File:**

```text
src/components/layout/Footer.jsx
```

---

## Step 10: Add Header and Footer to App

Update the main application layout.

**File:**

```text
src/App.jsx
```

---

## Step 11: Create a Reusable Container Component

Create a reusable container component to maintain consistent page width and spacing.

**File:**

```text
src/components/common/Container.jsx
```

---

## Step 12: Create Hero Section

Create the portfolio hero section.

**File:**

```text
src/components/home/Hero.jsx
```

---

## Step 13: Create Dynamic Stats Section

Display dynamic portfolio statistics.

Examples:

* Total Experiences
* Total Educations
* Total Projects
* Total Skills

**File:**

```text
src/components/home/Stats.jsx
```

---

## Step 14: Create Experience Card

Create a reusable card component for displaying individual experiences.

**File:**

```text
src/components/experiences/ExperienceCard.jsx
```

---

## Step 15: Create Featured Experiences Section

Display the top three featured experiences on the home page.

Add a button:

```text
View All Experiences
```

**File:**

```text
src/components/home/FeaturedExperiences.jsx
```

---

## Step 16: Create Education Card

Create a reusable card component for displaying individual education information.

**File:**

```text
src/components/educations/EducationCard.jsx
```

---

## Step 17: Create Featured Educations Section

Display the top three featured educations on the home page.

Add a button:

```text
View All Educations
```

**File:**

```text
src/components/home/FeaturedEducations.jsx
```

---

## Step 18: Create Project Card

Create a reusable card component for displaying individual projects.

**File:**

```text
src/components/projects/ProjectCard.jsx
```

---

## Step 19: Create Featured Projects Section

Display the top three featured projects on the home page.

Add a button:

```text
View All Projects
```

**File:**

```text
src/components/home/FeaturedProjects.jsx
```

---

## Step 20: Create Skills Section with Category Filter

Create a dynamic skills section with category filtering.

Examples:

* All
* Frontend
* Backend
* Database

**File:**

```text
src/components/home/Skills.jsx
```

---

## Step 21: Complete the Home Page

Combine all home page components.

**File:**

```text
src/pages/Home.jsx
```

---

## Step 22: Create a Reusable Search Input

Create a reusable search input component.

**File:**

```text
src/components/common/SearchInput.jsx
```

---

## Step 23: Display All Experiences

Display all experiences using the reusable `ExperienceCard` component.

**File:**

```text
src/pages/Experiences.jsx
```

---

## Step 24: Add Search Functionality

Add search functionality for experiences.

Users should be able to search by:

* Company name
* Position

**File:**

```text
src/pages/Experiences.jsx
```

---

## Step 25: Add Filter Functionality

Add filtering functionality for experiences.

Example filters:

* All
* Full Time
* Part Time
* Internship
* Freelance

**File:**

```text
src/pages/Experiences.jsx
```

---

## Step 26: Add Sorting Functionality

Add ascending and descending sorting.

Example:

```text
A → Z
Z → A
```

**File:**

```text
src/pages/Experiences.jsx
```
