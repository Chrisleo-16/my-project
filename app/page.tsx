import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
      <Hero />
      <Trusted />
      <About />
      <Testimonial/>
    </>
  );
}
