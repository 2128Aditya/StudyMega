import { useMemo } from "react";
import { PDFS } from "../../../data/pdfs";
import PdfCard from "../../../components/common/PdfCard";

export default function LatestUploadsSection() {
  const latest = useMemo(() => {
    return [...PDFS].slice(-4).reverse();
  }, []);

  return (
    <section className="w-full py-14">
      <div className="w-full px-6 md:px-12">
        <div>
          <p className="text-sm text-text/60">Fresh Uploads</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">
            Latest PDFs ✨
          </h2>
          <p className="mt-2 text-text/70">
            New resources added recently on StudyMega.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {latest.map((pdf) => (
            <PdfCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </div>
    </section>
  );
}
