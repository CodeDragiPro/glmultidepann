import React, { useState } from 'react';
import PriceCard from './PriceCard';
import PriceTable from './priceTable';


const PriceSection = () => {
  const [visibleSections, setVisibleSections] = useState({
    jardinage: false,
    bricolage: false,
    demenagement: false,
  });

  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="py-10 md:px-20 px-4">
      <h2 className="text-3xl font-bold text-center text-teal-700">CE QUE L'ON PROPOSE</h2>

      {/* Grid for Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Price Cards */}
        <div>
          <PriceCard title="JARDINAGE" toggleVisibility={() => toggleVisibility('jardinage')} />
          <PriceTable section="jardinage" isOpen={visibleSections.jardinage} />
        </div>
        <div>
          <PriceCard title="BRICOLAGE" toggleVisibility={() => toggleVisibility('bricolage')} />
          <PriceTable section="bricolage" isOpen={visibleSections.bricolage} />
        </div>
        <div>
          <PriceCard title="DEMENAGEMENT" toggleVisibility={() => toggleVisibility('demenagement')} />
          <PriceTable section="demenagement" isOpen={visibleSections.demenagement} />
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
