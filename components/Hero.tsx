import Image from 'next/image';
import styles from './Hero.module.css';
import NeoButton from './NeoButton';

export default function Hero() {
  return (
    <section className={styles.hero} id="products">
      <div className={styles.ghost} aria-hidden="true">
        Air
        <br />
        Pods
        <br />
        Max
      </div>

      <div className={styles.front}>
        <Image
          src="/images/headphones-front.png"
          alt="AirPods Max, вид спереди"
          width={340}
          height={373}
          priority
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Air
          <br />
          Pods
          <br />
          Max
        </h1>
        <p className={styles.text}>
          “AirPods are the most popular headphones in the world, beloved for their effortless
          setup, incredible sound quality, and iconic design.” said Greg Joswiak
        </p>
        <NeoButton>Read More</NeoButton>
      </div>

      <div className={styles.side}>
        <Image
          src="/images/headphones-side.png"
          alt="AirPods Max, вид сбоку"
          width={177}
          height={406}
          priority
        />
      </div>
    </section>
  );
}
