import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="w-full px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="StudyMega Logo"
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-extrabold text-text">
                Study<span className="text-primary">Mega</span>
              </span>
            </div>

            <p className="mt-4 text-sm text-text/70 leading-relaxed">
              StudyMega helps students from <b>Class 6 to Graduation</b> with
              Notes, PYQ, Sample Papers, Syllabus and AI Study Planner.
            </p>

            <p className="mt-4 text-sm text-text/60">
              Made with ❤️ for students.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-text">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-text/70">
              <li>
                <Link className="hover:text-primary" to="/notes">
                  Notes
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/pyq">
                  PYQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/sample-papers">
                  Sample Papers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/syllabus">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/college">
                  College Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="font-semibold text-text">AI Tools</h3>
            <ul className="mt-4 space-y-3 text-sm text-text/70">
              <li>
                <Link className="hover:text-primary" to="/ai-planner">
                  AI Study Planner
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/ai-planner">
                  Roadmap Generator
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/ai-planner">
                  Revision Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-text">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-text/70">
              <li>
                <Link className="hover:text-primary" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/terms">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-secondary transition shadow-sm"
              >
                Report PDF Issue
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between">
          <p className="text-sm text-text/60">
            © {new Date().getFullYear()} StudyMega. All rights reserved.
          </p>

          <p className="text-sm text-text/60">
            Built for Class 6 → Graduation 📚
          </p>
        </div>
      </div>
    </footer>
  );
}