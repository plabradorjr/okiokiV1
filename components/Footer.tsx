import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} OkiOki.xyz All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
