import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "AUTO E CIA Mecânica | Oficina em Santo Amaro da Imperatriz - SC",
    template: "%s | Auto e Cia",
  },
  description:
    "Oficina mecânica em Santo Amaro da Imperatriz/SC: motor, freios, suspensão, alinhamento, óleo e câmbio. Mais de 18 anos no box, com garantia de 3 meses.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
