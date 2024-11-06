import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface UseRedirectProps {
  handleRedirect: () => void;
}

const useRedirect = (path: string): UseRedirectProps => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = () => {
    setShouldRedirect(true);
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate(path);
    }
  }, [shouldRedirect, navigate, path]);

  return { handleRedirect };
};

export default useRedirect;
