import SmolAmeLoader from "@/components/3dloader";
import "../../styles/globals.css";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pb-8">
      <Navbar />
      <div className=" max-w-[768px] w-full mx-auto px-4 pt-14 ">
        <SmolAmeLoader />

        {children}
        <Footer />
      </div>
    </main>
  );
}
