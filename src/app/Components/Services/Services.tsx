import service from './service.module.css';
import ConstructionIcon from '@mui/icons-material/Construction';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import PlumbingIcon from '@mui/icons-material/Plumbing';

export const Services = () => {
  return (
    <div className={service.service_container}>
      <h1>Our Services</h1>
      <div className={service.serviceCards_container}>
        <div className={service.serviceCards_card}>
          <ConstructionIcon fontSize="large" />
          <h1>Remodeling</h1>
        </div>
        <div className={service.serviceCards_card}>
          <FormatPaintIcon fontSize="large" />
          <h1>Painting</h1>
        </div>
        <div className={service.serviceCards_card}>
          <CarpenterIcon fontSize="large" />
          <h1>Carpentry</h1>
        </div>
        <div className={service.serviceCards_card}>
          <PlumbingIcon fontSize="large" />
          <h1>Plumbing</h1>
        </div>
      </div>
    </div>
  );
};


export default Services;