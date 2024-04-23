import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import About from './components/about/about';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <About />
      <Tabs />
      <Mentor />
      <Students />
      <Newsletter />
    </main>
  )
}
