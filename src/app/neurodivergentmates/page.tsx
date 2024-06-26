'use client';
import styles from './page.module.css';
import DisplayPodcast from '../components/podcast/DisplayPodcast';
import PodcastBanner from '../components/podcastBanner/PodcastBanner';

import PodcastText from '../components/podcastTextSection/podcastText';
import BlogList from '../components/blogList/blogList';

export default function Home() {
  return (
    <main className={styles.main}>
      <title>Homepage - Neurodivergent Mates</title>
      <meta
        name='keywords'
        content='homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, neurodivergentmates'
      ></meta>
      <meta
        name='description'
        content={'homepage for Neurodivergent Mates'}
      ></meta>
      <PodcastBanner />
      <PodcastText />
      <div>
        <DisplayPodcast />
      </div>
      <div>
        <BlogList />
      </div>
    </main>
  );
}
