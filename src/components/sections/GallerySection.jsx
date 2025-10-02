import Image from "next/image";

export default function GallerySection() {
  const galleryItems = [
    {
      src: "/img/church-building.jpg",
      alt: "Church Building",
      caption: "Our Beautiful Church",
    },
    {
      src: "/img/community-event.jpg",
      alt: "Community Event",
      caption: "Parish Community Gathering",
    },
    {
      src: "/img/choir-performance.jpg",
      alt: "Choir Performance",
      caption: "Choir Ministry",
    },
    {
      src: "/img/children-program.jpg",
      alt: "Children's Program",
      caption: "Children's Faith Formation",
    },
  ];

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={250}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 300 250'><rect width='300' height='250' fill='%23000080'/></svg>"
              />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
