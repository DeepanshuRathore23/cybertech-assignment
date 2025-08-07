import Navbar from './ui/navbar';
// import Footer from './ui/footer';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={``}>
          <Navbar />

          {/* ✅ Main content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* <Footer /> */}
      </body>
    </html>

    
  );
}
