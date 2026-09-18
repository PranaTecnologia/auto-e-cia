import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Agendamento",
  description:
    "Agende motor, freios, suspensão, alinhamento, óleo ou câmbio na oficina mecânica Auto e Cia em Santo Amaro da Imperatriz/SC.",
};

export default function AgendamentoPage() {
  return (
    <main>
      <section className="page-hero">
        <img src="/img/oficina-box.jpg" alt="Agendar na oficina mecânica Auto e Cia" />
        <div className="container">
          <p className="kicker">Agenda do box</p>
          <h1>Reserve o elevador para o seu carro.</h1>
          <p className="muted" style={{ maxWidth: "60ch", marginTop: 14 }}>
            Só serviços mecânicos. Informe o veículo, o que está sentindo e o horário. Confirmamos a vaga em seguida.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 8 }}>
        <div className="container form-grid">
          <BookingForm />
          <aside className="side-card">
            <h3>No elevador</h3>
            <p className="muted">
              O carro sobe, a gente inspeciona e só troca o que você autorizar. Elétrica não entra neste box.
            </p>
            <ul className="contact-list" style={{ marginTop: 18 }}>
              <li>
                <span>Óleo e filtro</span>
                <strong>~45 min</strong>
              </li>
              <li>
                <span>Freios</span>
                <strong>~2h</strong>
              </li>
              <li>
                <span>Alinhamento</span>
                <strong>~1h</strong>
              </li>
              <li>
                <span>Revisão</span>
                <strong>3 a 4h</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
