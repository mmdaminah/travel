import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const SiteSettings = ({ children }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const siteSetting = useSelector((state) => state.siteSetting);

  useEffect(() => {
    if (siteSetting.language) {
      router.push({ pathname, query }, asPath, {
        locale: siteSetting.language,
      });
    }
  }, [siteSetting]);

  return children;
};
