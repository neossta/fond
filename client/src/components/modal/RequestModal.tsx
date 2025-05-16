import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { $phoneWidth } from '../../styled/variables';

declare global {
  interface Window {
    amo_forms_params: {
      params?: any[];
      setMeta: (p: any) => void;
    };
    amo_forms_load: ((params: any) => void) & {
      f?: { func: (params: any, k?: any) => void; args: [any, any?] }[];
    };
    amo_forms_loaded: ((params: any, k?: any) => void) & {
      f?: { func: (params: any, k?: any) => void; args: [any, any?] }[] | any[];
    };
  }
}

export const RequestModal: React.FC = () => {
  useEffect(() => {
    // Function to dynamically load the amoCRM form script
    const loadAmoCrmForm = () => {
      const script = document.createElement('script');
      script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1720779984';
      script.async = true;
      script.charset = 'utf-8';
      document.getElementById('amoforms_script_1353650')?.appendChild(script);

      // Initialize the form setup
      window.amo_forms_params = window.amo_forms_params || {
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]);
        },
      };
      window.amo_forms_load =
        window.amo_forms_load ||
        function (f) {
          window.amo_forms_load.f = (window.amo_forms_load.f || []).concat([f]);
        };
      window.amo_forms_load({
        id: '1353650',
        hash: '16ba1607e0d5632610d09f7b839fad84',
        locale: 'ru',
      });

      window.amo_forms_loaded =
        window.amo_forms_loaded ||
        function (f, k) {
          window.amo_forms_loaded.f = (window.amo_forms_loaded.f || []).concat([[f, k]]);
        };
    };

    // Call the function to load the script
    loadAmoCrmForm();
  }, []);

  return <Wrapper id="amoforms_script_1353650" />;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40rem;
  @media screen and (max-width: ${$phoneWidth}) {
    min-width: 100%;
  }
`;
