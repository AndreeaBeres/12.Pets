import React from 'react';

function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <p>Check out some of our lovely pets!</p>
      <div className="gallery-grid">
        <img src="/images/parrot.webp" alt="Pet 1" />
        <img src="/images/cat.jpg" alt="Pet 2" />
        <img src="/images/dog.gif" alt="Pet 3" />
        <img src="/images/hamster.jpg" alt="Pet 4" />
      </div>
    </section>
  );
}

export default Gallery;