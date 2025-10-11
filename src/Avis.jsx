import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Avis() {
  const reviews = [
    {
      name: "Michael Bonin",
      text: "Très bon service",
      rating: 5,
    },
    {
      name: "KooL MaT",
      text: "Service pro, rapide et efficace. Scories et arbres morts.",
      rating: 5,
    },
    {
      name: "P Latulippe",
      text: "Professionnel du service",
      rating: 5,
    },
    {
      name: "Sandra Lizotte",
      text: "Super service, très satisfaite.",
      rating: 5,
    },
  ];

  return (
    <section id="avis" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Votre satisfaction, nos meilleures références</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-white rounded-2xl shadow h-full flex flex-col justify-between">
                <p className="text-yellow-500 text-lg">
                  {"★".repeat(r.rating)}
                </p>
                <p className="italic mt-2">"{r.text}"</p>
                <p className="mt-4 font-semibold">– {r.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-8 text-sm text-gray-600">
          Voir tous nos avis sur{" "}
          <a
            href="https://www.google.com/search?q=Émondage+Arbro&sca_esv=5950ff312d9797ee&ei=bJnaaLT0OpGIptQP6IGfuAc&ved=0ahUKEwi02tv8mP6PAxURhIkEHejAB3cQ4dUDCBA&uact=5&oq=Émondage+Arbro&gs_lp=Egxnd3Mtd2l6LXNlcnAiD8OJbW9uZGFnZSBBcmJybzICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FSOILUMEEWLYHcAF4AZABAJgBlwGgAfUBqgEDMS4xuAEDyAEA-AEBmAIDoAKBAsICChAAGLADGNYEGEeYAwCIBgGQBgiSBwMyLjGgB6wGsgcDMS4xuAf8AcIHBTAuMi4xyAcH&sclient=gws-wiz-serp"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600"
          >
            Google
          </a>
        </p>
      </div>
    </section>
  );
}
