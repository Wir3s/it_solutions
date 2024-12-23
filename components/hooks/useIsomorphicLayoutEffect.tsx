import { useEffect, useLayoutEffect } from 'react';

// Use useLayoutEffect in the browser, and useEffect on the server
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;