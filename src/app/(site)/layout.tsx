import FooterComponent from "@/components/site/Footer";
import HeaderComponent from "@/components/site/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </main>
  );
}
