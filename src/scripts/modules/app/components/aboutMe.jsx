import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

const AboutMe = () => (
  <div className={style.about_me}>
    <div className={classNames(style.about_container, sharedStyle.container)}>
      <div className={classNames(style.about_me_container, style.about_h2)}>
        <h1 className={style.about_h1}>Hi,</h1>
        {'My name is '}
        <a
          className={classNames(style.about_h2_my_name, sharedStyle.hover)}
          href="https://docs.google.com/document/d/1-CfxFemzyY_IsUhY0irR0GiQKViPq5nMqhG72oIPIcw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steven
        </a>
        .
        <br />
        {'I am currently at '}
        <a
          className={classNames(style.coda_a, sharedStyle.hover)}
          href="https://coda.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line react/style-prop-object */}
          <svg xmlns="http://www.w3.org/2000/svg" width="66" height="22" fill="none" viewBox="0 0 60 20"><path fill="rgb(var(--neutral1000-rgb, 16, 16, 16))" d="M0 12.21C0 17.015 3.383 20 7.663 20c1.505 0 3.01-.358 4.107-1.164v-3.754a5.447 5.447 0 01-3.615 1.348c-2.224 0-3.998-1.566-3.998-4.209 0-2.642 1.766-4.179 3.998-4.179a5.323 5.323 0 013.633 1.337V5.618c-1.09-.825-2.6-1.14-4.105-1.14C3.383 4.48 0 7.464 0 12.21zM20.493 4.48c-4.361 0-7.407 3.185-7.407 7.731 0 4.548 3.038 7.79 7.406 7.79s7.431-3.215 7.431-7.79c0-4.574-3.033-7.731-7.431-7.731zm0 12.024c-2.083 0-3.242-1.785-3.242-4.285s1.159-4.264 3.242-4.264c2.082 0 3.237 1.785 3.237 4.264s-1.127 4.285-3.237 4.285zm19.36-10.46a5.271 5.271 0 00-1.746-1.166 5.346 5.346 0 00-2.072-.398c-4.397 0-6.883 3.496-6.883 7.731 0 4.287 2.486 7.79 6.883 7.79.71 0 1.412-.139 2.068-.407a5.387 5.387 0 001.75-1.158v1.226h4.194V0h-4.193v6.042zm0 8.642a3.168 3.168 0 01-1.187 1.248 3.252 3.252 0 01-1.675.457c-2.287 0-3.634-1.787-3.634-4.18 0-2.392 1.358-4.149 3.633-4.149a3.258 3.258 0 011.682.47c.505.306.915.745 1.182 1.266v4.888zM52.44 4.48c-2.024 0-3.961.542-5.063 1.224v3.572a7.65 7.65 0 014.137-1.224c2.14 0 3.386.91 3.386 2.36v.825c-.61-.429-2.085-.882-3.387-.882-3.325 0-5.84 1.931-5.84 4.774 0 3.072 2.515 4.805 5.582 4.805 1.646 0 3.151-.569 3.634-1.05v.796h4.049v-9.515c.01-3.61-2.362-5.685-6.498-5.685zm2.46 11.142c-.363.797-1.475 1.282-2.663 1.282-1.33 0-2.69-.542-2.69-1.82 0-1.28 1.36-1.819 2.69-1.819 1.188 0 2.285.482 2.663 1.28v1.077z" /></svg>
        </a>
        .
        <br />
        {'I was previously at '}
        <a
          className={classNames(sharedStyle.hover)}
          href="https://www.opendoor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Opendoor logo"
            className={style.opendoor_a}
            src="/assets/opendoor.svg"
          />
        </a>
        {', '}
        <a
          className={classNames(style.google_a, sharedStyle.hover)}
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </a>
        {', '}
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
        .
      </div>
    </div>
  </div>
);

export default AboutMe;
