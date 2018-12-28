import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

const AboutMe = () => (
  <div className={style.about_me}>
    <div className={classNames(style.about_container, sharedStyle.container)}>
      <div className={classNames(style.about_me_container, style.about_h2)}>
        <h1 className={style.about_h1}>
          Hi,
        </h1>
        {'My name is '}
        <a
          className={classNames(style.about_h2_my_name, sharedStyle.hover)}
          href="/assets/StevenSuh_Resume.pdf"
          target="_blank"
        >
          Steven
        </a>
        {'.'}
        <br />
        {'I will be joining '}
        <a
          className={classNames(style.google_a, sharedStyle.hover)}
          href="https://www.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </a>
        {' in 2019.'}
        <br />
        {'I was previously at '}
        <Link
          className={classNames(style.affirm_a, sharedStyle.hover)}
          to="/work/affirm"
        >
          Affirm
        </Link>
        {', '}
        <Link
          className={classNames(style.amazon_a, sharedStyle.hover)}
          to="/work/amazon"
        >
          Amazon
        </Link>
        {', and '}
        <Link
          className={classNames(style.golinks_a, sharedStyle.hover)}
          to="/work/golinks"
        >
          GoLinks
        </Link>
        {'.'}
      </div>
    </div>
  </div>
);

export default AboutMe;
