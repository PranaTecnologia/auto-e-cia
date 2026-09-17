"use client";

import { useState } from "react";

export default function Gallery({ items }) {
  const [src, setSrc] = useState("");

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <a
            key={item.src}
            href={item.src}
            onClick={(event) => {
              event.preventDefault();
              setSrc(item.src);
            }}
          >
            <img src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
      <div className={src ? "lightbox open" : "lightbox"} onClick={() => setSrc("")}>
        <img src={src || undefined} alt="Foto ampliada da oficina" />
      </div>
    </>
  );
}
