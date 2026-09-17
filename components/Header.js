"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/agendamento", label: "Agendamento" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <div className="logo-mark">A</div>
          <div>
            AUTO E CIA
            <div>
              <span>Mecânica</span>
            </div>
          </div>
        </Link>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link className="btn btn-primary" href="/agendamento" onClick={() => setOpen(false)}>
            Agendar agora
          </Link>
          <button className="menu-btn" aria-label="Abrir menu" type="button" onClick={() => setOpen((value) => !value)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
