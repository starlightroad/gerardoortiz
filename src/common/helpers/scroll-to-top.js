import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};
