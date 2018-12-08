import * as detailsDefs from 'src/scripts/modules/projectDetails/defs';

export const onScrollBar = function() {
  if (window.location.pathname !== '/') {
    const detailsBg = document.getElementById(detailsDefs.DETAILS_BG);
    const detailsBgHeight = detailsBg.clientHeight + detailsBg.offsetTop;

    const maxScrollHeight = Math.max((document.body.clientHeight - window.innerHeight) - detailsBgHeight, 0);
    const currentPosition = (window.scrollY || window.scrollTop || 0) - detailsBgHeight;

    this.setState({
      ...this.state,
      barPercentage: Math.max(currentPosition / maxScrollHeight, 0),
    });
  }
};
