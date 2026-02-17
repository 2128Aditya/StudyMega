import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-text">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
