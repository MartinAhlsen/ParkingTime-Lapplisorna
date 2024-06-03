import styles from "./trustedBy.module.css";

interface Partners {
  url: string;
  alt: string;
}

interface TrustedByProps {
  arrayOne: Partners[];
  arrayTwo: Partners[];
}

const TrustedBy = ({ arrayOne, arrayTwo }: TrustedByProps) => {
  return (
    <div>
      <div className="p1">Trusted by</div>
      <div className={styles.orgSliderContainer}>
        <div className="org-slider">
          <div className="slide-track">
            {arrayOne.map((partner, index) => (
              <div key={index} className="slide">
                <img src={partner.url} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="org-slider">
          <div className="slide-track">
            {arrayTwo.map((partner, index) => (
              <div key={index} className="slide">
                <img src={partner.url} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
