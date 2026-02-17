import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  return (
    <Link
      to={item.href}
      className="
        group w-full
        rounded-[34px] border border-border bg-card
        p-10
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-xl
        active:translate-y-0
      "
    >
      <div className="w-full flex flex-col items-center text-center">
        {/* Icon */}
        <div className="h-16 w-16 flex items-center justify-center">
          <img
            src={item.icon}
            alt={item.title}
            className="h-14 w-14 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-extrabold text-text">
          {item.title}
        </h3>

        {/* Desc */}
        <p className="mt-3 text-text/70 leading-relaxed">
          {item.description}
        </p>

        {/* Badge */}
        <div className="mt-6">
          <span
            className="
              inline-flex items-center justify-center
              px-5 py-2 rounded-full
              bg-primary/10 text-secondary
              font-bold text-sm
              border border-border
            "
          >
            {item.count}
          </span>
        </div>
      </div>
    </Link>
  );
}
