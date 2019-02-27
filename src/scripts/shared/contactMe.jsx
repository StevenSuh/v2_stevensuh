import React from 'react';

import style from './style.module.css';

const ContactMe = () => (
  <div className={style.contact_me}>
    <span>
      <a
        className={style.hover}
        href="/assets/StevenSuh_Resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        resume
      </a>
      <span>
        {' / '}
      </span>
      <a
        className={style.hover}
        href="mailto:stevensuh.me@gmail.com"
        target="_top"
      >
        email
      </a>
      <span>
        {' / '}
      </span>
      <a
        className={style.hover}
        href="https://www.linkedin.com/in/Steven-Suh"
        rel="noopener noreferrer"
        target="_blank"
      >
        linkedin
      </a>
      <span>
        {' / '}
      </span>
      <a
        className={style.hover}
        href="https://github.com/StevenSuh"
        rel="noopener noreferrer"
        target="_blank"
      >
        github
      </a>
    </span>
  </div>
);

export default ContactMe;
