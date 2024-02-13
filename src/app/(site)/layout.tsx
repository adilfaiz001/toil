import Header from "@/components/site/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Header />
      {children}
    </main>
  );
}
