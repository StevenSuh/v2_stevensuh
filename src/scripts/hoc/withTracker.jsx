import React from 'react';
import ReactGA from 'react-ga';

export default function withTracker(WrappedComponent) {
  const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC = class extends React.Component {
    componentDidMount() {
      const { location } = this.props;
      const page = location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const { location } = this.props;
      const currentPage = location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};
