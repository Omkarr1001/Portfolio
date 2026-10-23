export const site = {
  name: 'Omkar Salunkhe',
  role: 'Software Developer',
  discipline: 'Full Stack & Mobile',
  experience: '1.5 years',
  location: 'Pune / Satara, India',
  email: 'salunkheomkar1001@gmail.com',
  phoneDisplay: '+91 93735 73102',
  phoneHref: 'tel:+919373573102',
  github: 'https://github.com/Omkarr1001',
  linkedin: 'https://linkedin.com/in/omkar-salunkhe',
  summary:
    'Software Developer with 1.5 years of experience delivering production web and mobile systems. Builds REST APIs, Android and React Native applications, and Linux deployments used by live customers.',
} as const;

export const worlds = [
  {
    id: 'hotel',
    path: '/work/hotel',
    kicker: 'A1 Systems · Satara',
    title: 'Hotel & restaurant operations',
    headline: 'The floor, the pad, the pass.',
    blurb:
      'Captain-pad ordering, live tables, and kitchen / admin sync for shops running a real service.',
    period: 'Sep 2025 – July 2026',
  },
  {
    id: 'medicine',
    path: '/work/medicine',
    kicker: 'ZepMed Pvt Ltd · Baramati',
    title: 'Medicine delivery operations',
    headline: 'Pharmacy, rider, order states.',
    blurb:
      'A hyperlocal healthcare marketplace spanning customer, pharmacy, delivery, doctor, laboratory, and hospital workflows.',
    period: 'Apr 2026 – Present',
  },
  {
    id: 'ai',
    path: '/work/ai',
    kicker: 'How the work gets done',
    title: 'AI systems',
    headline: 'Plan, tool, review, verify.',
    blurb:
      'Agent and workflow design for production delivery — finance insights, desktop automation, and reviewed multi-agent coding.',
    period: 'In production work',
  },
] as const;

export const experience = [
  {
    title: 'Software Developer',
    company: 'ZepMed Pvt Ltd',
    location: 'Baramati',
    period: 'Apr 2026 – Present',
    current: true,
    bullets: [
      'Own the production platform: PHP CodeIgniter API gateway, Node.js authentication, MySQL, Kotlin customer and delivery applications, React Native customer application, and role-based operations panels.',
      'Designed REST APIs and OTP / JWT authentication so web and mobile clients share one backend for catalog, cart, prescriptions, orders, payouts, and live updates.',
      'Released Android builds for field use, including background order alerts, maps resume, and Play Store Data safety, and resolved production API and panel defects under live load.',
      'Applied Cursor and Claude multi-agent workflows to increase delivery speed, with mandatory diff review and device / API verification before release.',
    ],
  },
  {
    title: 'Software Developer (Freelance)',
    company: 'A1 Systems',
    location: 'Satara',
    period: 'Sep 2025 – July 2026',
    current: false,
    bullets: [
      'Delivered CRM and POS / QSR billing for live shops, covering attendance, marketing, reporting, tax, discounts, settlements, and invoicing on PHP CodeIgniter and MySQL.',
      'Built Kotlin Android ordering (captain pad) integrated with PHP APIs and real-time multi-user synchronization on the local network.',
      'Improved API performance, corrected billing and data-consistency defects, and supported MilesWeb deployments.',
    ],
  },
  {
    title: 'Full Stack Java Intern',
    company: 'Java By Kiran',
    location: 'Pune',
    period: 'Aug 2023 – Jan 2024',
    current: false,
    bullets: [
      'Implemented REST API tests with JUnit and Mockito, configured GitHub Actions CI/CD, containerized services with Docker, and deployed demonstration applications.',
    ],
  },
] as const;

export const education = [
  {
    title: 'B.E. Computer Engineering',
    school: 'S.B. Patil College of Engineering, Pune',
    detail: 'CGPA 7.11',
  },
  {
    title: 'Diploma in Computer Engineering',
    school: 'KBP Polytechnic, Satara',
    detail: '83.87%',
  },
] as const;

export const stack = {
  Languages: ['Java', 'JavaScript', 'PHP', 'Kotlin', 'SQL', 'HTML', 'CSS'],
  Backend: [
    'Spring Boot',
    'JSP / Servlets',
    'PHP CodeIgniter',
    'Node.js / Express',
    'REST APIs',
    'JWT / OTP',
  ],
  'Mobile & frontend': [
    'Android (Kotlin, Jetpack Compose)',
    'React Native / Expo',
    'Angular (basic)',
  ],
  Data: ['MySQL', 'MongoDB'],
  'AI tooling': [
    'Cursor',
    'Claude',
    'GitHub Copilot',
    'OpenAI APIs',
    'Prompt and context engineering',
    'MCP',
    'Agentic development with code review',
  ],
  DevOps: [
    'Git',
    'GitHub',
    'Docker',
    'GitHub Actions',
    'Linux',
    'Nginx',
    'Vercel',
    'MilesWeb',
    'Play Store release',
  ],
} as const;

export const certifications = [
  'AI Generalist Certification',
  'Full Stack Java Internship',
] as const;

export const extraProjects = [
  {
    title: 'Live location tracking',
    detail: 'GPS tracking with backend APIs for continuous location updates.',
    href: 'https://github.com/Omkarr1001/Live-Location-Detection-Button',
  },
] as const;

export const hotelStory = {
  title: 'Hotel & restaurant operations',
  lede: 'A service is a clock. Tables turn, captains walk, the kitchen fires, admin closes the bill. The software has to keep those four views of the same order in step.',
  panels: [
    {
      label: 'Captain pad',
      title: 'Table-side ordering on Android',
      copy: 'Kotlin captain-pad ordering, talking to PHP APIs, so a captain can take a table without walking back to a terminal.',
    },
    {
      label: 'Live tables',
      title: 'One floor, many captains',
      copy: 'Real-time multi-user synchronization on the local network, so concurrent captains do not collide on the same table or KOT.',
    },
    {
      label: 'Kitchen / admin',
      title: 'Pass, bill, settle',
      copy: 'POS / QSR billing with tax, discounts, settlements, and invoicing, plus CRM around attendance, marketing, and reporting.',
    },
  ],
  stack: ['PHP CodeIgniter', 'MySQL', 'Kotlin Android', 'Local-network sync', 'MilesWeb'],
};

export const medicineStory = {
  title: 'Medicine delivery operations',
  product: 'ZepMed',
  lede: 'ZepMed is a hyperlocal healthcare marketplace. One backend serves catalog, cart, prescriptions, orders, payouts, and live updates across the people who actually run a delivery.',
  roles: ['Customer', 'Pharmacy', 'Delivery', 'Doctor', 'Laboratory', 'Hospital'],
  states: ['Placed', 'Pharmacy', 'Packed', 'Out for delivery', 'Delivered'],
  panels: [
    {
      label: 'Map',
      title: 'Field builds with maps resume',
      copy: 'Kotlin delivery application for riders, including maps resume and background order alerts for field use.',
    },
    {
      label: 'Pharmacy',
      title: 'Catalog, cart, prescriptions',
      copy: 'Web and mobile clients share REST APIs with OTP / JWT authentication for catalog, cart, prescriptions, and seller payouts.',
    },
    {
      label: 'Order states',
      title: 'One identity through the shift',
      copy: 'Role-based operations panels sit on a PHP CodeIgniter API gateway, Node.js authentication, and MySQL, with React Native and Kotlin customer apps in the same loop.',
    },
  ],
  stack: [
    'PHP CodeIgniter',
    'Node.js auth',
    'MySQL',
    'Kotlin',
    'React Native / Expo',
    'REST · OTP / JWT',
    'Play Store',
  ],
};

export const aiStory = {
  title: 'AI systems',
  lede: 'The useful shape is a workflow: gather context, plan, call tools, review the diff, verify on a device or an API. That is how the production work moves, and how the smaller AI products are built.',
  stages: [
    { id: 'context', label: 'Context', detail: 'Prompt and session memory, tight enough to act on.' },
    { id: 'plan', label: 'Plan', detail: 'Break the job into steps before anything executes.' },
    { id: 'tools', label: 'Tools', detail: 'Cursor, Claude, GitHub Copilot, OpenAI APIs, MCP.' },
    { id: 'review', label: 'Review', detail: 'Mandatory diff review. Nothing ships on trust alone.' },
    { id: 'verify', label: 'Verify', detail: 'Device, API, and live-panel checks before release.' },
  ],
  panels: [
    {
      label: 'Finance',
      title: 'AI finance manager',
      copy: 'Categorized expense insights from the same structured-prompt approach used in production work.',
    },
    {
      label: 'Desktop',
      title: 'Personal assistant',
      copy: 'Desktop task automation with context-aware AI execution across a session, not a single prompt.',
    },
    {
      label: 'CRM',
      title: 'Lead handling',
      copy: 'AI-assisted lead handling inside the A1 CRM — scoring and response support on live shop data.',
    },
  ],
  stack: [
    'Cursor',
    'Claude',
    'GitHub Copilot',
    'OpenAI APIs',
    'MCP',
    'Prompt / context engineering',
  ],
};
