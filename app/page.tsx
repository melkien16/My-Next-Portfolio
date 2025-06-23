"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Database,
  Globe,
  Zap,
  Star,
  Terminal,
  User,
  Briefcase,
  Coffee,
  Sun,
  Moon,
  MapPin,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  terminalCommands,
  projects,
  skills,
  filterOptions,
  testimonials,
} from "./data";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [terminalText, setTerminalText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }

    // Apply theme to document
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < terminalCommands.length) {
        setTerminalText((prev) => {
          const newLine = terminalCommands[index];
          return prev + (prev ? "\n" : "") + newLine;
        });
        index++;
      } else {
        clearInterval(timer);
      }
    }, 600);

    return () => clearInterval(timer);
  }, []);

  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => selectedFilter === "all" || project.category === selectedFilter
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "resume",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-mono transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-[#00ff99]"
            >
              {"<Melkie />"}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Projects", "Resume", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm transition-all duration-300 relative group ${
                      activeSection === item.toLowerCase()
                        ? "text-[#00ff99]"
                        : "text-gray-500 dark:text-gray-400 hover:text-[#00ff99]"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full ${
                        activeSection === item.toLowerCase() ? "w-full" : ""
                      }`}
                    ></span>
                  </button>
                )
              )}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["About", "Skills", "Projects", "Resume", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-[#00ff99] transition-colors relative group w-full text-left"
                  >
                    {item}
                    <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-8"></span>
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-[#00ff99]">Melkie</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-6">
                MERN Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Building scalable web applications with modern technologies.
                Turning ideas into digital reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-[#00ff99] text-black hover:bg-[#00e187] px-8 py-3 text-lg font-semibold"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-black px-8 py-3 text-lg font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4 mt-8"
              >
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Follow me:
                </span>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/melkien16"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00ff99] hover:text-black transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/melkieyilk"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00ff99] hover:text-black transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="mailto:melkie.yilk-ug@aauedu.et"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00ff99] hover:text-black transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff99]/10 via-transparent to-[#00ff99]/10 rounded-3xl blur-2xl"></div>

                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/melkie-profiles.jpg"
                    alt="Melkie Yilk - MERN Stack Developer"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl relative z-10 melkie-profile-image"
                    priority
                    style={{
                      filter: "contrast(1.1) saturate(0.8) brightness(1.05)",
                      background:
                        "linear-gradient(135deg, rgba(0,255,153,0.1) 0%, transparent 50%, rgba(0,255,153,0.05) 100%)",
                    }}
                  />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
                  <div className="absolute inset-0 rounded-2xl border border-[#00ff99]/20 z-30"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00ff99] to-[#00e187] rounded-full flex items-center justify-center shadow-lg z-40">
                  <Code className="h-16 w-16 text-black" />
                </div>

                {/* Additional Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00ff99] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/4 -right-2 w-4 h-4 bg-[#00ff99] rounded-full opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 -left-2 w-6 h-6 bg-[#00ff99] rounded-full opacity-30 animate-pulse delay-500"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="h-6 w-6 text-[#00ff99] animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Combined About & Terminal Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <Terminal className="inline-block mr-3 h-8 w-8 text-[#00ff99]" />
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get to know me through code and creativity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Bio Card */}
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-800 border-gray-200 dark:border-white/10 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src="/images/melkie-profile.jpg"
                        alt="Melkie Yilk"
                        width={80}
                        height={80}
                        className="rounded-full transition-all duration-300 melkie-bio-image"
                        style={{
                          filter: "contrast(1.1) saturate(0.9) brightness(1.1)",
                        }}
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00ff99] rounded-full flex items-center justify-center">
                        <Code className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Melkie Yilk
                      </h3>
                      <p className="text-[#00ff99] font-semibold">
                        MERN Stack Developer
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Passionate MERN Stack Developer with 2+ years of experience
                    building scalable web applications. I love turning complex
                    problems into simple, beautiful solutions through clean code
                    and innovative thinking.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-[#00ff99]">
                        3+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-[#00ff99]">
                        15+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What Drives Me */}
              <Card className="bg-white dark:bg-black border-gray-200 dark:border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-[#00ff99]" />
                    What Drives Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Building scalable, user-focused applications",
                    "Solving complex problems with elegant solutions",
                    "Continuous learning and staying updated with tech",
                    "Collaborating with teams to create amazing products",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#00ff99] rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Action Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: User,
                    label: "Problem Solver",
                    desc: "Complex challenges",
                  },
                  {
                    icon: Briefcase,
                    label: "Full-Stack",
                    desc: "End-to-end solutions",
                  },
                  {
                    icon: Award,
                    label: "Quality Focused",
                    desc: "Clean, efficient code",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg hover:border-[#00ff99]/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Terminal Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Code Snippet */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 z-10 bg-[#00ff99] text-black p-3 rounded-lg text-xs font-mono shadow-lg"
              >
                <div>const developer = "Melkie";</div>
                <div>console.log(`Hello, ${"{developer}"}!`);</div>
              </motion.div>

              {/* Terminal Window */}
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer transition-colors"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer transition-colors"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer transition-colors"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm ml-4 font-mono">
                    melkie@portfolio:~$ zsh
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm min-h-[500px] bg-black text-green-400">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">whoami</span>
                    {"\n"}
                    <span className="text-green-400">melkie_yilk</span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">cat</span>
                    <span className="text-white"> personal_info.json</span>
                    {"\n"}
                    <span className="text-white">{"{"}</span>
                    {"\n"}
                    <span className="text-cyan-400"> "name"</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">"Melkie Yilk"</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-cyan-400"> "role"</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">
                      "MERN Stack Developer"
                    </span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-cyan-400"> "experience"</span>
                    <span className="text-white">: </span>
                    <span className="text-orange-400">3+</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-cyan-400"> "location"</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">
                      "Addis Ababa, Ethiopia"
                    </span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-cyan-400"> "status"</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">
                      "Available for projects"
                    </span>
                    {"\n"}
                    <span className="text-white">{"}"}</span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">ls</span>
                    <span className="text-white"> -la skills/</span>
                    {"\n"}
                    <span className="text-blue-400">drwxr-xr-x</span>
                    <span className="text-white"> frontend/</span>
                    {"\n"}
                    <span className="text-blue-400">drwxr-xr-x</span>
                    <span className="text-white"> backend/</span>
                    {"\n"}
                    <span className="text-blue-400">drwxr-xr-x</span>
                    <span className="text-white"> tools/</span>
                    {"\n"}
                    <span className="text-gray-400">-rw-r--r--</span>
                    <span className="text-green-400"> react.js</span>
                    {"\n"}
                    <span className="text-gray-400">-rw-r--r--</span>
                    <span className="text-green-400"> node.js</span>
                    {"\n"}
                    <span className="text-gray-400">-rw-r--r--</span>
                    <span className="text-green-400"> mongodb.db</span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">git</span>
                    <span className="text-white"> log --oneline</span>
                    {"\n"}
                    <span className="text-yellow-400">a1b2c3d</span>
                    <span className="text-white">
                      {" "}
                      Built RentSmart platform
                    </span>
                    {"\n"}
                    <span className="text-yellow-400">e4f5g6h</span>
                    <span className="text-white"> Developed TaskFlow Pro</span>
                    {"\n"}
                    <span className="text-yellow-400">i7j8k9l</span>
                    <span className="text-white"> Created EcoTracker app</span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">echo</span>
                    <span className="text-white"> $PASSION</span>
                    {"\n"}
                    <span className="text-green-400">
                      Building scalable web applications
                    </span>
                    {"\n"}
                    <span className="text-green-400">
                      Problem solving & clean code
                    </span>
                    {"\n"}
                    <span className="text-green-400">
                      Continuous learning & growth
                    </span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="text-blue-400">status</span>
                    {"\n"}
                    <span className="text-green-400">
                      ● Active and ready for new challenges
                    </span>
                    {"\n"}
                    <span className="text-green-400">
                      ● Open to collaboration
                    </span>
                    {"\n"}
                    <span className="text-green-400">
                      ● Available for freelance projects
                    </span>
                    {"\n\n"}
                    <span className="text-white">$ </span>
                    <span className="animate-pulse">_</span>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tech Stack & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies I work with to build amazing applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-white/10 h-full hover:border-[#00ff99]/40 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white capitalize flex items-center gap-2">
                      {category === "frontend" && (
                        <Globe className="h-6 w-6 text-[#00ff99] group-hover:scale-110 transition-transform" />
                      )}
                      {category === "backend" && (
                        <Database className="h-6 w-6 text-[#00ff99] group-hover:scale-110 transition-transform" />
                      )}
                      {category === "tools" && (
                        <Zap className="h-6 w-6 text-[#00ff99] group-hover:scale-110 transition-transform" />
                      )}
                      {category
                        .replace("frontend", "Frontend Development")
                        .replace("backend", "Backend Development")
                        .replace("tools", "Development Tools")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="w-2 h-2 bg-[#00ff99] rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "C++",
                "Java",
                "C#",
                "Android Development (Kotlin)",
                "Python",
                "NLP",
                "ESLint",
                "Prettier",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="outline"
                    className="border-[#00ff99]/30 text-[#00ff99] hover:bg-[#00ff99] hover:text-black transition-all duration-300 cursor-default px-4 py-2"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Recent work showcasing my development skills
            </p>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === option.value
                      ? "bg-[#00ff99] text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#00ff99] hover:text-black"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-black border-gray-200 dark:border-white/10 overflow-hidden group hover:border-[#00ff99]/40 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-[#00ff99] text-black text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[#00ff99]/30 text-[#00ff99] text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-[#00ff99] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="bg-[#00ff99] text-black hover:bg-[#00e187] flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-black"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More Projects on GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-[#00ff99]/20 p-8">
              <CardContent className="space-y-4">
                <Github className="h-12 w-12 text-[#00ff99] mx-auto" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Explore More Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out my GitHub profile for more projects, contributions,
                  and open-source work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="https://github.com/melkie-yilk">
                    <Button className="bg-[#00ff99] text-black hover:bg-[#00e187]">
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub Profile
                    </Button>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-[#00ff99]" />
                      <span>50+ Stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4 text-[#00ff99]" />
                      <span>25+ Repositories</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <Button className="bg-[#00ff99] text-black hover:bg-[#00e187]">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                period: "2022 - Present",
                title: "Full-Stack Developer",
                company: "Freelance",
                description:
                  "Developing custom web applications using MERN stack for various clients.",
              },
              {
                period: "2021 - 2022",
                title: "Frontend Developer",
                company: "Tech Startup",
                description:
                  "Built responsive web interfaces and collaborated with design teams.",
              },
              {
                period: "2020 - 2021",
                title: "Computer Science Student",
                company: "University",
                description:
                  "Focused on software engineering principles and personal projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#00ff99] rounded-full"></div>
                  {index < 2 && (
                    <div className="w-0.5 h-20 bg-[#00ff99]/30 mt-2"></div>
                  )}
                </div>
                <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-white/10 flex-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-[#00ff99] text-[#00ff99] w-fit"
                      >
                        {item.period}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {item.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-black border-gray-200 dark:border-white/10 p-6 text-center">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-[#00ff99] fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full grayscale"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to bring your ideas to life?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    melkie.yilk@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    linkedin.com/in/melkie-yilk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center">
                  <Github className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    GitHub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    github.com/melkie-yilk
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-white/10">
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white dark:bg-black border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      className="bg-white dark:bg-black border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-white dark:bg-black border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white dark:bg-black border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                  <Button className="w-full bg-[#00ff99] text-black hover:bg-[#00e187]">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300">
                Made with ❤️ and JetBrains Mono by{" "}
                <span className="text-[#00ff99]">Melkie Yilk</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                © 2024 All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#00ff99] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#00ff99] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#00ff99] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
