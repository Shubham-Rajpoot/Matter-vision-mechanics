import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50 text-center px-4 overflow-hidden">
      
      {/* Floating 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl sm:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 mb-4"
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-600 max-w-lg mb-8"
      >
        The page you're looking for might have been removed, renamed, or never
        existed. Let’s get you back on track.
      </motion.p>

      {/* Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/"
          className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition shadow-lg"
        >
          Go to Home
        </Link>
      </motion.div>

      {/* Decorative background glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1 }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl"
      />
    </main>
  );
}
