import Link from "next/link";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <main id="conteudo">
      <section className="hero">
        <div className="hero-content hero-layout">
          <div>
            <div className="eyebrow">Oficina mecânica • Santo Amaro da Imperatriz/SC</div>
            <h1>AUTO E CIA Mecânica. Seu carro em boas mãos.</h1>
            <p className="lead">
              Motor, freios, suspensão, alinhamento, óleo e câmbio. Mais de 18 anos no box, com garantia de 3 meses e
              parcelamento em até 10x sem juros.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href="/agendamento">
                Agendar revisão
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/servicos">
                Ver serviços
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>18+</strong>
                <span>anos de oficina</span>
              </div>
              <div className="stat">
                <strong>3 meses</strong>
                <span>de garantia</span>
              </div>
              <div className="stat">
                <strong>10x</strong>
                <span>sem juros</span>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/img/banner-oficina.png" alt="Box da oficina mecânica Auto e Cia em Santo Amaro" />
            <aside className="hero-card">
              <p className="kicker">No box agora</p>
              <h3>Ferramenta na bancada. Carro no elevador.</h3>
              <ul>
                <li>
                  <span>Unidade</span>
                  <strong>Santo Amaro</strong>
                </li>
                <li>
                  <span>Horário</span>
                  <strong>Seg a sex 8h–18h</strong>
                </li>
                <li>
                  <span>Foco</span>
                  <strong>Só mecânica</strong>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <div className="brands">
        <div className="container brand-row">
          <span>Motor</span>
          <span>Freios</span>
          <span>Suspensão</span>
          <span>Alinhamento</span>
          <span>Óleo</span>
          <span>Câmbio</span>
          <span>Revisão</span>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Serviços mecânicos</p>
              <h2>Do óleo ao motor: o carro inteiro, no mesmo box.</h2>
            </div>
            <Link className="btn btn-ghost" href="/servicos">
              Catálogo completo
            </Link>
          </div>
          <div className="grid-3">
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-motor.jpg" alt="Motor" />
              </div>
              <h3>Motor</h3>
              <p>Vazamento, correia, junta, compressão e barulho. Diagnóstico antes de abrir o capô.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-freio.jpg" alt="Freios" />
              </div>
              <h3>Freios</h3>
              <p>Pastilhas, discos, fluido e o pedal firme para a serra e o dia a dia na estrada.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-inspecao.jpg" alt="Suspensão" />
              </div>
              <h3>Suspensão</h3>
              <p>Amortecedores, bandejas e pivôs. Menos barulho, mais estabilidade no asfalto irregular.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-pneu.jpg" alt="Alinhamento" />
              </div>
              <h3>Alinhamento e balanceamento</h3>
              <p>Direção no eixo, pneu durando mais e o volante sem tremer na estrada.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-oleo.jpg" alt="Óleo e filtros" />
              </div>
              <h3>Óleo e filtros</h3>
              <p>Troca de óleo, filtro e conferência de nível para o motor trabalhar limpo.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
            <article className="card service-card">
              <div className="thumb">
                <img src="/img/oficina-box.jpg" alt="Câmbio" />
              </div>
              <h3>Câmbio</h3>
              <p>Troca de fluido do automático, tranco e revisão da transmissão com procedimento certo.</p>
              <Link className="btn btn-primary" style={{ marginTop: 16 }} href="/agendamento">
                Agendar agora
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="container work-layout">
          <div className="work-media">
            <img src="/img/mecanico-trabalho.png" alt="Mecânico da Auto e Cia trabalhando no motor" />
            <div className="work-tag">Oficina mecânica</div>
            <div className="work-caption">
              <strong>Mão na massa</strong>
              <p className="muted">Motor aberto, torque certo e serviço com garantia de 3 meses.</p>
            </div>
          </div>
          <div>
            <p className="kicker">O que fazemos</p>
            <h2>Somos oficina mecânica. Sem desvio, sem elétrica.</h2>
            <p className="work-lead">
              Na Auto e Cia o trabalho é mecânico do começo ao fim: abrir, medir, trocar, apertar no torque e devolver o
              carro pronto para a estrada. Cuidamos de motor, freios, suspensão, alinhamento, óleo e câmbio — o que o
              carro sente na rua, a gente resolve no elevador.
            </p>
            <p className="work-note">
              Cada serviço é combinado antes de começar. Peça, prazo e valor claros. Garantia de 3 meses e parcelamento
              em até 10x sem juros.
            </p>
            <div className="work-list">
              <article className="work-item">
                <em>01</em>
                <strong>Revisão mecânica</strong>
                <p>Óleo, filtros, correias, fluidos e o checklist do que o motor pede.</p>
              </article>
              <article className="work-item">
                <em>02</em>
                <strong>Freios e suspensão</strong>
                <p>Pastilha, disco, amortecedor e geometria para o carro parar e andar firme.</p>
              </article>
              <article className="work-item">
                <em>03</em>
                <strong>Motor e vazamento</strong>
                <p>Junta, retentor, kit correia e o barulho que ninguém quer ignorar.</p>
              </article>
              <article className="work-item">
                <em>04</em>
                <strong>Câmbio e alinhamento</strong>
                <p>Fluido do automático, tranco, geometria e pneu no ponto.</p>
              </article>
            </div>
            <Link className="btn btn-primary" href="/sobre" style={{ marginTop: 24 }}>
              Conheça a oficina
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Como funciona</p>
              <h2>Do agendamento à entrega, no mesmo pátio.</h2>
            </div>
          </div>
          <div className="grid-4">
            <article className="card step">
              <div className="num">01</div>
              <h3>Agende</h3>
              <p>Escolha o serviço mecânico, o dia e os dados do veículo na página de agendamento.</p>
            </article>
            <article className="card step">
              <div className="num">02</div>
              <h3>Inspecione</h3>
              <p>O carro sobe no elevador. Olhamos motor, freio, suspensão e só então fechamos o orçamento.</p>
            </article>
            <article className="card step">
              <div className="num">03</div>
              <h3>Executamos</h3>
              <p>Peça certa, torque certo. Você autoriza antes de qualquer troca.</p>
            </article>
            <article className="card step">
              <div className="num">04</div>
              <h3>Entregamos</h3>
              <p>Conferência final, garantia de 3 meses e o carro pronto para voltar à estrada.</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Galeria</p>
              <h2>O box, o elevador e a bancada no dia a dia.</h2>
            </div>
          </div>
          <Gallery
            items={[
              { src: "/img/oficina-elevador.jpg", alt: "Carro no elevador da oficina" },
              { src: "/img/oficina-mecanico.jpg", alt: "Mecânico em serviço" },
              { src: "/img/oficina-motor.jpg", alt: "Motor em manutenção" },
              { src: "/img/oficina-ferramentas.jpg", alt: "Ferramentas da oficina" },
              { src: "/img/oficina-caixa.jpg", alt: "Caixa de ferramentas" },
            ]}
          />
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Clientes</p>
              <h2>Quem já deixou o carro no box recomenda.</h2>
            </div>
          </div>
          <div className="grid-3">
            <article className="card quote">
              <div className="stars">★★★★★</div>
              <p>Faço toda a mecânica dos carros na Auto e Cia. Oficina de confiança.</p>
              <div className="person">
                <div className="avatar">SM</div>
                <div>
                  <strong>Solove Machado</strong>
                  <br />
                  <span className="muted">Cliente Auto e Cia</span>
                </div>
              </div>
            </article>
            <article className="card quote">
              <div className="stars">★★★★★</div>
              <p>Ótimo atendimento. Mecânica bem feita e prazo cumprido.</p>
              <div className="person">
                <div className="avatar">RV</div>
                <div>
                  <strong>Romerito Vieira Simões</strong>
                  <br />
                  <span className="muted">Cliente Auto e Cia</span>
                </div>
              </div>
            </article>
            <article className="card quote">
              <div className="stars">★★★★★</div>
              <p>Excelentes profissionais e muito corretos. Super recomendo a oficina.</p>
              <div className="person">
                <div className="avatar">RM</div>
                <div>
                  <strong>Rogério Bortolo Maciel</strong>
                  <br />
                  <span className="muted">Cliente Auto e Cia</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container faq">
          <div className="section-head">
            <div>
              <p className="kicker">Dúvidas</p>
              <h2>Perguntas frequentes</h2>
            </div>
          </div>
          <details open>
            <summary>Vocês fazem elétrica?</summary>
            <p>
              Não. A Auto e Cia é oficina mecânica: motor, freios, suspensão, alinhamento, óleo e câmbio. Elétrica não
              faz parte do nosso box.
            </p>
          </details>
          <details>
            <summary>Como agendar?</summary>
            <p>Pela página de agendamento. Escolha o serviço mecânico, o veículo e o horário. Confirmamos a vaga em seguida.</p>
          </details>
          <details>
            <summary>Os serviços têm garantia?</summary>
            <p>Sim. Todo serviço mecânico tem 3 meses de garantia.</p>
          </details>
          <details>
            <summary>Dá para parcelar?</summary>
            <p>Sim. Parcelamos em até 10x sem juros.</p>
          </details>
          <details>
            <summary>Onde fica a oficina?</summary>
            <p>Santo Amaro da Imperatriz/SC. Fácil para quem vem de Palhoça, Florianópolis, Águas Mornas e região.</p>
          </details>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner">
            <img src="/img/oficina-elevador.jpg" alt="Oficina mecânica Auto e Cia em Santo Amaro" />
            <div>
              <p className="kicker">Santo Amaro e região</p>
              <h2>Coloque o carro na bancada certa.</h2>
              <p className="muted">Segunda a sábado. Só mecânica, com vaga pelo agendamento.</p>
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
