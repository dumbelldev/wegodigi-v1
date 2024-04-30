import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero1 from '@/components/pages/homepage/Hero1';
import Opener from '@/components/pages/homepage/Opener';
import Projects from '@/components/pages/homepage/Projects';
import Section1 from '@/components/pages/homepage/Section1';
import Section2 from '@/components/pages/homepage/Section2';

export default function App() {
  return (
    <>
      {/* <Opener /> */}
      <Header />
      <Hero1 />
      <Section1 />
      <Projects />
      <Section2 />
      <Footer />
    </>
  );
}
