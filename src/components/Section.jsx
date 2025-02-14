import React from 'react';

function Section({ title, content, linkText, linkHref }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
      {linkText && linkHref && (
        <a href={linkHref}>{linkText}</a>
      )}
    </section>
  );
}

export default Section;