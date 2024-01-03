import ts from './testimonial.module.css'
const Testimonial = () => {
  return(
    <div id="testimonials" className={ts.testimonial_container}>
      <h1>Testimonials</h1>
      <div className={ts.testimonialCard_container}>
        <div className={ts.testimonial_card}>
          <p>
            &quot;Tenacity are very good and reliable.They re-did part of
            the job without hassle, and made the cabinet and night stand look
            very good, Jason has a &apos; get it done right &apos; attitude.&quot;
          </p>
          <div className={ts.testimonial_client}>
            <h3>Carol E</h3>
            <span>Yonkers, NY</span>
          </div>
        </div>
        <div className={ts.testimonial_card}>
          <p>
            &quot;Tenacity was great! I told them nobody was in the apartment and just
            get the key from the front desk. Very friendly, on time, thorough
            and I definitely will be using their trust again thanks&quot;
          </p>
          <div className={ts.testimonial_client}>
            <h3>Eyal G.</h3>
            <span>New York, NY</span>
          </div>
        </div>
        <div className={ts.testimonial_card}>
          <p>
            &quot;Jason was great! very professional and came prepared would
            definitely hire him again to help out with handyman services!&quot;
          </p>
          <div className={ts.testimonial_client}>
            <h3>Jennifer R.</h3>
            <span>Jersey City, NJ</span>
          </div>
        </div>
        <div className={ts.testimonial_card}>
          <p>
            &quot;Tenacity are incredibly knowledgeable about everything under the
            &quot;HANDYMAN&quot; umbrella from electrical work to soldering. They are also
            very friendly and responsible and I look forward to hiring them for
            more projects!&quot;
          </p>
          <div className={ts.testimonial_client}>
            <h3>Daniela P.</h3>
            <span>Williamsburg, Brooklyn</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial