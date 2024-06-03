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
    <div className="flex flex-col">
      <div className="p1 md:h7 text-center">Trusted by</div>
      <div className={styles.orgSliderContainer}>
        <div className="org-slider">
          <div className="slide-track flex gap-4">
            {arrayOne.map((partner, index) => (
              <div key={index} className="slide">
                <img src={partner.url} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="org-slider">
          <div className="slide-track flex gap-4">
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
