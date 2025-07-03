import Bio from "./_components/bio";
import Favorite from "./_components/favorite";
import Greet from "./_components/greet";
import Hero from "./_components/hero";
import Socials from "./_components/socials";
import About from "./_components/about";
export default function Home() {
  return (
    <div className="px-4 relative isolate min-h-screen max-w-[60ch] mx-auto">
      <Greet />
      <Hero/>
      <About/>
      <Bio/>
      <Favorite/>
      <Socials/>

    </div>
  );
}
