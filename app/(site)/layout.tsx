import Loader from "@/components/layout/Loader";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
