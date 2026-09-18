import Link from "next/link";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Sobre",
  description:
    "Auto e Cia é oficina mecânica em Santo Amaro da Imperatriz/SC. Mais de 18 anos de motor, freios, suspensão e revisão com garantia de 3 meses.",
};

export default function SobrePage() {
  return (
    <main>
      <section className="page-hero">
        <img src="/img/oficina-mecanico.jpg" alt="Mecânico da Auto e Cia no motor" />
        <div className="container">
          <p className="kicker">A oficina</p>
          <h1>18 anos de box, elevador e mecânica em Santo Amaro.</h1>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="container split">
          <div>
            <p className="muted">
              A Auto e Cia nasceu como oficina mecânica e continua assim: motor, freio, suspensão, alinhamento, óleo e
              câmbio. Estamos em Santo Amaro da Imperatriz, atendendo Palhoça, Florianópolis, Águas Mornas e quem passa
              na região.
            </p>
            <ul className="checklist">
              <li>Foco exclusivo em mecânica automotiva</li>
              <li>3 meses de garantia em todo serviço</li>
              <li>Parcelamento em até 10x sem juros</li>
              <li>Orçamento antes de qualquer troca</li>
            </ul>
            <Link className="btn btn-primary" href="/agendamento">
              Agendar agora
            </Link>
          </div>
          <div className="media">
            <img src="/img/oficina-elevador.jpg" alt="Carro no elevador da oficina" />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Por que a Auto e Cia</p>
              <h2>Mecânica clara, prazo combinado, carro no ponto.</h2>
            </div>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>Especialidade</h3>
              <p>Não diluímos o box com elétrica. O tempo da equipe vai para motor, freio e suspensão.</p>
            </article>
            <article className="card">
              <h3>Garantia</h3>
              <p>3 meses em todos os serviços mecânicos. Trabalho feito para durar na estrada.</p>
            </article>
            <article className="card">
              <h3>Transparência</h3>
              <p>Você autoriza peça e mão de obra antes de começar. Sem surpresa na entrega.</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">O pátio</p>
              <h2>Ferramenta, elevador e motor no mesmo lugar.</h2>
            </div>
          </div>
          <Gallery
            items={[
              { src: "/img/oficina-box.jpg", alt: "Interior da oficina" },
              { src: "/img/oficina-ferramentas.jpg", alt: "Ferramentas" },
              { src: "/img/oficina-chaves.jpg", alt: "Chaves e soquetes" },
              { src: "/img/oficina-caixa.jpg", alt: "Caixa de ferramentas" },
              { src: "/img/oficina-inspecao.jpg", alt: "Inspeção do veículo" },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="container grid-4">
          <article className="card">
            <strong>18+</strong>
            <p>anos de oficina</p>
          </article>
          <article className="card">
            <strong>3 meses</strong>
            <p>de garantia</p>
          </article>
          <article className="card">
            <strong>10x</strong>
            <p>sem juros</p>
          </article>
          <article className="card">
            <strong>Santo Amaro</strong>
            <p>da Imperatriz/SC</p>
          </article>
        </div>
      </section>
    </main>
  );
}
