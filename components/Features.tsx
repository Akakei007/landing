import Image from 'next/image';
import styles from './Features.module.css';
import NeoButton from './NeoButton';

export default function Features() {
  return (
    <>
      <section className={styles.story} id="overview">
        <div className={styles.photo}>
          <Image
            src="/images/model.jpg"
            alt="Девушка в наушниках AirPods Max"
            width={330}
            height={497}
          />
        </div>
        <div className={styles.storyBody}>
          <h2 className={styles.ghostTitle}>
            Sounds like
            <br />
            an epiphany
          </h2>
          <p className={styles.textWide}>
            Industry-leading Active Noise Cancellation counters external sound with equal
            anti-noise, allowing you to immerse yourself in what you’re listening to.
            <br />
            Press the noise control button to switch to Transparency mode, which lets outside
            sound in so you can interact naturally with your surroundings
          </p>
          <NeoButton variant="round" label="Подробнее">
            <svg viewBox="0 0 44 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <path d="M0 5h43M38 1l5 4-5 4" />
            </svg>
          </NeoButton>
        </div>
      </section>

      <section className={styles.showcase} id="prices">
        <div className={styles.showcaseBody}>
          <h2 className={styles.title}>
            Magical
            <br />
            experience
          </h2>
          <p className={styles.textNarrow}>
            AirPods Max inherit all of the wireless, effortless magic of the AirPods family. From
            setup to Siri commands, they make the listening experience completely fluid — day to
            day, device to device.
          </p>
          <NeoButton>Read More</NeoButton>
        </div>
        <div className={styles.caseImg}>
          <Image
            src="/images/case.png"
            alt="Чехол Smart Case для AirPods Max"
            width={576}
            height={366}
          />
        </div>
      </section>
    </>
  );
}
