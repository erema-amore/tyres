import React from "react";
import "./tireCatalog.css";
import FilterSidebar from "./FilterSidebar";
import Tires from './Tires'
import HelpForm from "./HelpForm";
import CatalogInfo from "./CatalogInfo";




const TireCatalog = () => {
  return (
    <div className="tire-catalog">
      <div className="tire-filter">
        <FilterSidebar/>
      </div>
      <div className="tire-content">
        <Tires/>
        <HelpForm/>
        <CatalogInfo/>
      </div>
      
    </div>
  );
};

export default TireCatalog;