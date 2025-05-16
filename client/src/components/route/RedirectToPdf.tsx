import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type RedirectToPdfProps = {
  url: string;
};

export const RedirectToPdf: React.FC<RedirectToPdfProps> = ({ url }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = url;
  }, [url, navigate]);

  return null;
};
