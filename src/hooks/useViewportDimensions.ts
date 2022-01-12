import { useEffect, useState } from 'react';

const getViewportDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const useViewportDimensions = () => {
  const [viewportDimensions, setViewportDimensions] = useState(
    getViewportDimensions()
  );

  useEffect(() => {
    const viewportDimensionsHandler = () => {
      setViewportDimensions(getViewportDimensions());
    };

    window.addEventListener('resize', viewportDimensionsHandler);

    return () =>
      window.removeEventListener('resize', viewportDimensionsHandler);
  }, []);

  return viewportDimensions;
};

export default useViewportDimensions;
