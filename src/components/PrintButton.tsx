// src/components/PrintButton.tsx
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import MainComponent from './MainComponent';

const PrintButton: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint} className="bg-primary text-white px-4 py-2 rounded shadow">
        Télécharger mon CV
      </button>
      <div style={{ display: 'none' }}>
        <MainComponent ref={componentRef} isPDF={true} />
      </div>
    </div>
  );
};

export default PrintButton;
