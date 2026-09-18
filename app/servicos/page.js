import Link from "next/link";

export const metadata = {
  title: "Serviços mecânicos",
  description:
    "Serviços de oficina mecânica na Auto e Cia em Santo Amaro da Imperatriz: motor, freios, suspensão, alinhamento, óleo, câmbio e revisão. Agende pelo site.",
};

export default function ServicosPage() {
  return (
    <main>
      <section className="page-hero">
        <img src="/img/oficina-chaves.jpg" alt="Serviços da oficina mecânica Auto e Cia" />
        <div className="container">
          <p className="kicker">Catálogo mecânico</p>
          <h1>Só mecânica. O que o carro precisa na estrada.</h1>
          <p className="muted" style={{ maxWidth: "62ch", marginTop: 14 }}>
            Motor, freios, suspensão, alinhamento, óleo e câmbio. Garantia de 3 meses e até 10x sem juros.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 12 }}>
        <div className="container grid-3">
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-motor.jpg" alt="Motor" />
            </div>
            <h3>Motor</h3>
            <p>Vazamento, kit correia, junta, compressão, fumaça e barulho interno. Avaliação no elevador antes de qualquer desmonte.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-freio.jpg" alt="Freios" />
            </div>
            <h3>Freios</h3>
            <p>Pastilhas, discos, fluido e o sistema de frenagem conferido para o uso na serra e na estrada.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-inspecao.jpg" alt="Suspensão" />
            </div>
            <h3>Suspensão</h3>
            <p>Amortecedores, bandejas, pivôs e coxins. Elimina estalo, afundamento e o carro “andando solto”.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-pneu.jpg" alt="Alinhamento e balanceamento" />
            </div>
            <h3>Alinhamento e balanceamento</h3>
            <p>Geometria, pneu e volante. Corrige puxada, vibração e desgaste irregular da banda.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-oleo.jpg" alt="Troca de óleo" />
            </div>
            <h3>Troca de óleo e filtro</h3>
            <p>Óleo, filtro e inspeção de nível. Manutenção curta que protege o motor no longo prazo.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
          <article className="card service-card">
            <div className="thumb">
              <img src="/img/oficina-box.jpg" alt="Câmbio" />
            </div>
            <h3>Câmbio e transmissão</h3>
            <p>Troca de fluido do automático, tranco, patinação e revisão da transmissão com procedimento correto.</p>
            <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
              Agendar agora
            </Link>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner">
            <img src="/img/oficina-elevador.jpg" alt="Agendar na oficina Auto e Cia" />
            <div>
              <p className="kicker">Agenda</p>
              <h2>Reserve o elevador para o seu carro.</h2>
              <p className="muted">Segunda a sábado, só serviços mecânicos.</p>
            </div>
            <Link className="btn btn-primary btn-lg" href="/agendamento">
              Agendar agora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
