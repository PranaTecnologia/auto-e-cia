import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/">
            <div className="logo-mark">A</div>
            <div>AUTO E CIA</div>
          </Link>
          <p style={{ marginTop: 12 }}>
            Oficina mecânica em Paulo Lopes/SC. Motor, freios, suspensão e revisão na BR-101, KM 252.
          </p>
        </div>
        <div>
          <h4>Navegação</h4>
          <div className="footer-links">
            <Link href="/servicos">Serviços</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/agendamento">Agendamento</Link>
          </div>
        </div>
        <div>
          <h4>Horários</h4>
          <p>
            Seg a sex: 8h – 18h
            <br />
            Sábado: 8h – 12h
          </p>
        </div>
        <div>
          <h4>Endereço</h4>
          <p>
            BR-101, KM 252
            <br />
            Anexo ao Posto Sorocaba
            <br />
            Paulo Lopes/SC
          </p>
        </div>
      </div>
      <div className="container copy">
        <span>© {year} Auto e Cia Oficina Mecânica. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
