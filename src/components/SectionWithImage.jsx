import React from 'react';

function SectionWithImage({ title, imgSrc, imgAlt, content }) {
  return (
    <section>
      <h2>{title}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <p>{content}</p>
    </section>
  );
}

export default SectionWithImage;