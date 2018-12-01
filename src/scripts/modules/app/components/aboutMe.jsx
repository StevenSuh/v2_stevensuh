import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

const AboutMe = () => (
  <div className={style.about_me}>
    <div className={sharedStyle.container}>
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
        {"I'm a software engineer intern at "}
        <Link
          className={classNames(style.affirm_a, sharedStyle.hover)}
          to="/work/affirm"
        >
          Affirm
        </Link>
        {'.'}
        <br />
        {'I was previously at '}
        <Link
          className={classNames(style.amazon_a, sharedStyle.hover)}
          to="/work/amazon"
        >
          Amazon
        </Link>
        {' and '}
        <Link
          className={classNames(style.golinks_a, sharedStyle.hover)}
          to="/work/golinks"
        >
          GoLinks
        </Link>
        {'.'}
        <br />
        <br />
        <span>all / work / project</span>
      </div>
    </div>
  </div>
);

export default AboutMe;
