import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return <footer className="w-screen flex justify-center">
    <div className="container px-4 md:px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-neutral-400 text-sm">
          <span>© 2024 Your Name. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <span>Made with Next.js & Tailwind CSS</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="bg-gray-800 dark:bg-neutral-900 border-neutral-700 text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-neutral-800"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
}