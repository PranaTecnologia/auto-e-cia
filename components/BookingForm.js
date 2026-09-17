"use client";

import { useState } from "react";

export default function BookingForm() {
  const [toast, setToast] = useState("");

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const required = [...form.querySelectorAll("[required]")];
    const invalid = required.find((field) => !field.value.trim());
    if (invalid) {
      invalid.focus();
      showToast("Preencha todos os campos obrigatórios.");
      return;
    }
    form.reset();
    showToast("Pedido recebido. Vamos confirmar seu horário em breve.");
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="row-2">
          <label>
            Nome completo
            <input name="nome" required placeholder="Seu nome" />
          </label>
          <label>
            Telefone
            <input name="telefone" required placeholder="Seu telefone" />
          </label>
        </div>
        <label>
          Serviço mecânico
          <select name="servico" required defaultValue="">
            <option value="">Selecione</option>
            <option>Motor</option>
            <option>Freios</option>
            <option>Suspensão</option>
            <option>Alinhamento e balanceamento</option>
            <option>Troca de óleo e filtro</option>
            <option>Câmbio e transmissão</option>
            <option>Revisão mecânica</option>
          </select>
        </label>
        <div className="row-2">
          <label>
            Marca e modelo
            <input name="veiculo" required placeholder="Ex.: Gol 1.6" />
          </label>
          <label>
            Data preferida
            <input type="date" name="data" required />
          </label>
        </div>
        <label>
          Período
          <select name="periodo" required defaultValue="">
            <option value="">Selecione</option>
            <option>Manhã (8h – 12h)</option>
            <option>Tarde (13h – 18h)</option>
            <option>Sábado manhã (8h – 12h)</option>
          </select>
        </label>
        <label>
          O que o carro está sentindo?
          <textarea name="obs" rows="5" placeholder="Barulho, vazamento, pedal baixo, volante puxando, kilometragem..." />
        </label>
        <button className="btn btn-primary btn-lg" type="submit">
          Enviar pedido
        </button>
        <div className={toast ? "toast show" : "toast"}>{toast}</div>
      </form>
  );
}
