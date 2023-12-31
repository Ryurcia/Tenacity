import service from './service.module.css'

export const Services = () => {
  return(
    <div className={service.service_container}>
      <h1>Our Services</h1>
      <div className={service.serviceCards_container}>
        <div className={service.serviceCards_card}>
          <h1>Remodeling</h1>
        </div>
        <div className={service.serviceCards_card}>
          <h1>Painting</h1>
        </div>
        <div className={service.serviceCards_card}>
          <h1>Carpentry</h1>
        </div>
        <div className={service.serviceCards_card}>
          <h1>Plumbing</h1>
        </div>
      </div>
    </div>
  )
}









export default Services;