import { Geist, Geist_Mono } from "next/font/google";
import MessageBox from '@/components/MessagesBox';
import styles from '../styles/Home.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Chat Global</h1>
      <MessageBox />
    </div>
  );
}
