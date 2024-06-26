import React from 'react';
import Image from 'next/image';
import styles from './badgeDisplay.module.css';
import goldBadge from '../../images/goldBadge.svg';
import silverBadge from '../../images/silverBadge.svg';
import bronzeBadge from '../../images/bronzeBadge.svg';

export default function BadgeDisplay() {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.badgegroup1}>
        <Image src={goldBadge} alt='Gold Badge' />
      </div>
      <div className={styles.badgegroup2}>
        <Image src={silverBadge} alt='SilverBadge' />
        <Image src={bronzeBadge} alt='Bronze Badge' />
      </div>
    </div>
  );
}
