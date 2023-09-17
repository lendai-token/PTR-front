import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useState, useEffect } from 'react'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useScreenSize = () => {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }
  
    const [windowSize, setWindowSize] = useState<{width: any; height:any;}>(getSize());
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(true);
  
    useEffect((): any => {
      if (!isClient) {
        return false;
      }
  
      function handleResize() {
        setWindowSize(getSize());
      }
      window.addEventListener('resize', handleResize);
  
    }, []);
  
    useEffect(() => {
      const width = windowSize?.width ?? 0;
      // is mobile
      if (width < 615) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    //   is tablet
      if (width >= 615 && width < 1024) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
  
      // is desktop
      if (width >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }, [windowSize.width]);
  
    return {
      windowSize,
      isDesktop,
      isTablet,
      isMobile,
    };
  };
  
