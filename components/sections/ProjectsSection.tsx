
import { Languages, Wind, Leaf, HeartPulse, Gamepad2, Palette, Cpu, Sparkles, CheckCircle2, CheckCircle, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";

const projects = [
  {
    icon: Languages,
    id:'sign-language',
    title: "AI Sign Language Recognition",
    description: "Advanced AI system for real-time sign language recognition and translation, enabling seamless communication for the deaf and hard of hearing community. Features HCI integration for intuitive interaction.",
    features: ["Real-time recognition", "Multi-language support", "HCI integration", "Mobile & web platforms"],
    gradient: "from-purple-500 to-indigo-600",
    category: "Assistive Technology & AI",
    accentColor: "purple",
  },
  {
    icon: Wind,
    id:'clean-air',
    title: "Clean Air Solutions",
    description: "Portable air purifiers and advanced mask technology for personal and industrial air quality management. Research-backed filtration systems for optimal health protection.",
    features: ["Portable purifiers", "Advanced filtration", "Smart monitoring", "Industrial solutions"],
    gradient: "from-primary-500 to-primary-600",
    category: "Consumer Products",
    accentColor: "primary",
  },
  {
    icon: Leaf,
    id:'agriculture-systems',
    title: "Sustainable Agriculture Systems",
    description: "Ceramic micro furnaces for controlled environments and advanced hydroponic setups for sustainable food production. Integrated systems for year-round cultivation.",
    features: ["Ceramic micro furnaces", "Hydroponic systems", "Climate control", "IoT monitoring"],
    gradient: "from-green-500 to-emerald-600",
    category: "Agrotech & Sustainable Ceramics",
    accentColor: "green",
  },
  {
    icon: HeartPulse,
    id:'health-monitoring',
    title: "IoT Health Monitoring Device",
    description: "Two-in-one IoT-based health monitoring device combining vital signs tracking and remote patient monitoring. Enables continuous health assessment and telemedicine integration.",
    features: ["Vital signs monitoring", "Remote tracking", "Telemedicine ready", "Mobile app integration"],
    gradient: "from-red-500 to-pink-600",
    category: "Healthcare Technology",
    accentColor: "red",
  },
  {
    icon: Cpu,
    id:'bovidae-health',
    title: "Bovidae Health & Tracking System",
    description: "Comprehensive health monitoring and tracking solution for cattle through advanced muzzle-based identification and biometric tracking. Real-time health analytics for livestock management.",
    features: ["Muzzle-based tracking", "Health monitoring", "Real-time analytics", "Mobile alerts"],
    gradient: "from-amber-500 to-orange-600",
    category: "Animal Husbandry & IoT",
    accentColor: "amber",
  },
  {
    icon: Gamepad2,
    id:'educational-gaming',
    title: "Educational Gaming Platform",
    description: "Comprehensive gaming solutions including online, offline, and Montessori-inspired educational games. Designed to enhance learning through interactive play and cognitive development.",
    features: ["Online & offline modes", "Montessori games", "Educational content", "Multi-platform"],
    gradient: "from-violet-500 to-purple-600",
    category: "Consumer Products & Education",
    accentColor: "violet",
  },
  {
    icon: Palette,
    id:'home-decor',
    title: "Artisan Home Decor",
    description: "Premium wood and acrylic art pieces combining traditional craftsmanship with modern design. Customizable home decor solutions for residential and commercial spaces.",
    features: ["Wood & acrylic arts", "Custom designs", "Sustainable materials", "Commercial solutions"],
    gradient: "from-rose-500 to-pink-600",
    category: "Industrial Design & Consumer Products",
    accentColor: "rose",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 106 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <Sparkles className="w-6 h-6 text-primary-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Research Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Innovative solutions emerging from our research labs, addressing real-world challenges
            across multiple domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                id={project.id}
                className="group relative bg-white rounded-3xl p-8 max-[300px]:p-6 lg:p-10 shadow-modern hover:shadow-modern-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                {/* Gradient Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {project.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-6 mb-6 max-sm:flex-col">
                    <div className={`relative flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-soft-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Features List */}
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                        <CheckCircle2 className={`w-5 h-5 mr-3 text-white rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
