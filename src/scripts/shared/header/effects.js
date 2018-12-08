import * as detailsDefs from 'src/scripts/modules/projectDetails/defs';
import * as sharedDefs from 'src/scripts/shared/defs';

import headerStyle from 'src/scripts/shared/header/style.module.css';

export const onScrollLanding = function() {
  const header = document.getElementById(sharedDefs.HEADER);

  if (!header) {
    return;
  }

  const currentPosition = window.scrollY || window.scrollTop;

  const { pathname } = this.props.location;
  const isLanding = pathname === '/';

  let distance;
  if (isLanding) {
    distance = window.innerHeight;
  } else {
    const detailsBg = document.getElementById(detailsDefs.DETAILS_BG);
    distance = detailsBg.clientHeight + detailsBg.offsetTop;
  }

  if (currentPosition >= distance) {
    header.classList.add(headerStyle.scrolled);
  } else if (currentPosition >= (distance / 2)) {
    header.classList.remove(headerStyle.scrolled);
  } else {
    header.classList.remove(headerStyle.scrolled);
  }
};
