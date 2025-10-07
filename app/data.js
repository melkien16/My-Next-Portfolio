export const terminalCommands = [
  "$ whoami",
  "melkie_yilk",
  "",
  "$ cat personal_info.json",
  "{",
  '  "name": "Melkie Yilk",',
  '  "role": "MERN Stack Developer",',
  '  "experience": "3+ years",',
  '  "location": "Addis ababa,Ethiopia",',
  '  "status": "Available for projects"',
  "}",
  "",
  "$ ls -la skills/",
  "drwxr-xr-x  frontend/",
  "drwxr-xr-x  backend/",
  "drwxr-xr-x  tools/",
  "-rw-r--r--  react.js",
  "-rw-r--r--  node.js",
  "-rw-r--r--  mongodb.db",
  "-rw-r--r--  express.js",
  "",
  "$ git log --oneline",
  "a1b2c3d Built RentSmart platform",
  "e4f5g6h Developed Pro Shop",
  "i7j8k9l Created Cinema Booking App",
  "",
  "$ echo $PASSION",
  "Building scalable web applications",
  "Problem solving & clean code",
  "Continuous learning & growth",
  "",
  "$ status",
  "● Active and ready for new challenges",
  "● Open to collaboration",
  "● Available for freelance projects",
  "",
  "$ _",
];

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  tools: ["Git/GitHub", "Docker", "AWS", "Vercel", "Figma"],
};

export const projects = [
  {
    title: "RentSmart",
    description:
      "A platform for renting everyday tools with wallet-based payments, collateral verification, and real-time booking management.",
    tech: ["React", "Node.js", "Mongodb", "Express.js", "Tailwind CSS"],
    features: [
      "Tool/item listing with categories",
      "Wallet-based payment and refund system",
      "Collateral verification system",
      "User profile and booking history",
      "Responsive design with secure authentication",
    ],
    image: "/rent-smart.png?height=300&width=500",
    liveUrl: "https://smartrent-render-21.onrender.com/",
    githubUrl: "https://github.com/melkien16/smartrent.git",
    tags: ["Full-stack", "Rental", "Payments"],
    category: "fullstack",
  },
  {
    title: "Pro Shop",
    description:
      "An e-commerce platform specializing in electronics, offering a seamless shopping experience with secure payments and user-friendly product browsing.",
    tech: ["Tailwind Css", "Vite", "Mongodb", "Mongoose", "Express Js"],
    features: [
      "Product catalog with filters and categories",
      "Secure user authentication and checkout",
      "Admin panel for managing products and orders",
      "Shopping cart and order history",
      "Responsive design for mobile and desktop",
    ],
    image: "/e-commerce.png?height=300&width=500",
    liveUrl: "#",
    githubUrl: "https://github.com/melkien16/AddisSpark.git",
    tags: ["E-commerce", "Electronics", "Payments"],
    category: "fullstack",
  },
  {
    title: "PharmaTrack",
    description:
      "A web application that helps users find nearby pharmacies, view available drugs, and filter by location, price, or rating. Includes pharmacy management for admins and a built-in messaging system.",
    tech: ["React", "Node.js", "Express", "MySql", "Tailwind CSS"],
    features: [
      "Real-time location-based pharmacy discovery",
      "Filter pharmacies by location, price, and rating",
      "Pharmacy dashboard for managing drug listings",
      "Admin panel to manage pharmacies and users",
      "User-to-pharmacy messaging (non real-time)",
      "Mobile-responsive UI with modern design",
    ],
    image: "/pharmapic0.png?height=300&width=500",
    liveUrl: "#",
    githubUrl: "https://github.com/melkien16/Pharmacy.git",
    tags: ["Web App", "Healthcare", "Location"],
    category: "fullstack",
  },
  {
    title: "FastMeal",
    description:
      "A modern food ordering web app that allows users to browse menus, place orders, and track delivery from nearby restaurants with ease.",
    tech: ["React", "HTML", "CSS", "Firebase", "JavaScript"],
    features: [
      "Restaurant and menu browsing",
      "Add to cart and place orders",
      "Order tracking and history",
      "Filter by cuisine, price, and rating",
      "Mobile-responsive design",
    ],
    image: "/FastFood.png?height=300&width=500",
    liveUrl: "https://melkiefastfood.netlify.app/",
    githubUrl: "https://github.com/melkien16/Order-meal.git",
    tags: ["Food", "Ordering", "Full-stack"],
    category: "fullstack",
  },
  {
    title: "Weather Forecaster",
    description:
      "A responsive web app that displays real-time weather information by city or current location, including temperature, humidity, wind speed, and forecast trends.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS", "JavaScript"],
    features: [
      "Search weather by city",
      "Current temperature, humidity, and wind speed",
      "5-day weather forecast",
      "Geolocation-based weather updates",
      "Responsive and clean UI design",
    ],
    image: "/Weather.png?height=300&width=500",
    liveUrl: "https://courageous-praline-1b578c.netlify.app/",
    githubUrl: "https://github.com/melkien16/Weather-App.git",
    tags: ["Weather", "API", "Frontend"],
    category: "frontend",
  },
  {
    title: "Simple Calculator",
    description:
      "A basic web calculator for performing arithmetic operations including addition, subtraction, multiplication, and division.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Addition, subtraction, multiplication, division",
      "Clear and backspace functions",
      "Responsive layout",
      "Keyboard input support",
      "Instant calculation display",
    ],
    image: "/Calculator.png?height=300&width=500",
    liveUrl: "https://transcendent-froyo-f15dc1.netlify.app/",
    githubUrl: "https://github.com/melkien16/simple-Calculator.git",
    tags: ["Utility", "Frontend"],
    category: "frontend",
  },
];

export const testimonials = [
  {
    name: "Abinet Degefa",
    role: "Junior Cloud Engineer",
    content:
      "Melkie is focused and reliable — he gets things done without overcomplicating the process.",
    avatar: "/p3.jpg?height=60&width=60",
  },
  {
    name: "Aymen Sileshi",
    role: "FullStack Developer",
    content:
      "Melkie somehow manages to make time bend to their will. — dedication like that almost feels unfair to the rest of us!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Haile Asaye",
    role: "Laravel Developer",
    content:
      "Melkie writes clean code and always takes the time to understand what really matters in a project.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full-Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
];
