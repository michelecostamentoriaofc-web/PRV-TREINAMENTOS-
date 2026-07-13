"use client";

import { useMemo, useState } from "react";

const normas = [
  { numero: "NR 01", titulo: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais" },
  { numero: "NR 02", titulo: "Inspeção Prévia — conteúdo histórico" },
  { numero: "NR 03", titulo: "Embargo e Interdição" },
  { numero: "NR 04", titulo: "Serviços Especializados em Segurança e Medicina do Trabalho" },
  { numero: "NR 05", titulo: "Comissão Interna de Prevenção de Acidentes e de Assédio" },
  { numero: "NR 06", titulo: "Equipamento de Proteção Individual" },
  { numero: "NR 07", titulo: "Programa de Controle Médico de Saúde Ocupacional" },
  { numero: "NR 08", titulo: "Edificações" },
  { numero: "NR 09", titulo: "Avaliação e Controle das Exposições Ocupacionais" },
  { numero: "NR 10", titulo: "Segurança em Instalações e Serviços em Eletricidade" },
  { numero: "NR 11", titulo: "Transporte, Movimentação, Armazenagem e Manuseio de Materiais" },
  { numero: "NR 12", titulo: "Segurança no Trabalho em Máquinas e Equipamentos" },
  { numero: "NR 13", titulo: "Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos" },
  { numero: "NR 14", titulo: "Fornos" },
  { numero: "NR 15", titulo: "Atividades e Operações Insalubres" },
  { numero: "NR 16", titulo: "Atividades e Operações Perigosas" },
  { numero: "NR 17", titulo: "Ergonomia" },
  { numero: "NR 18", titulo: "Segurança e Saúde no Trabalho na Indústria da Construção" },
  { numero: "NR 19", titulo: "Explosivos" },
  { numero: "NR 20", titulo: "Segurança e Saúde com Inflamáveis e Combustíveis" },
  { numero: "NR 21", titulo: "Trabalhos a Céu Aberto" },
  { numero: "NR 22", titulo: "Segurança e Saúde Ocupacional na Mineração" },
  { numero: "NR 23", titulo: "Proteção Contra Incêndios" },
  { numero: "NR 24", titulo: "Condições Sanitárias e de Conforto nos Locais de Trabalho" },
  { numero: "NR 25", titulo: "Resíduos Industriais" },
  { numero: "NR 26", titulo: "Sinalização de Segurança" },
  { numero: "NR 27", titulo: "Registro Profissional do Técnico de Segurança — conteúdo histórico" },
  { numero: "NR 28", titulo: "Fiscalização e Penalidades" },
  { numero: "NR 29", titulo: "Segurança e Saúde no Trabalho Portuário" },
  { numero: "NR 30", titulo: "Segurança e Saúde no Trabalho Aquaviário" },
  { numero: "NR 31", titulo: "Segurança e Saúde no Trabalho Rural" },
  { numero: "NR 32", titulo: "Segurança e Saúde no Trabalho em Serviços de Saúde" },
  { numero: "NR 33", titulo: "Segurança e Saúde nos Trabalhos em Espaços Confinados" },
  { numero: "NR 34", titulo: "Condições de Trabalho na Indústria Naval" },
  { numero: "NR 35", titulo: "Trabalho em Altura" },
  { numero: "NR 36", titulo: "Segurança e Saúde em Empresas de Abate e Processamento de Carnes" },
  { numero: "NR 37", titulo: "Segurança e Saúde em Plataformas de Petróleo" },
  { numero: "NR 38", titulo: "Segurança e Saúde nas Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos" },
];

export default function NormativosPage() {
  const [busca, setBusca] = useState("");
  const [pais, setPais] = useState("Brasil");
  const [idioma, setIdioma] = useState("Português");

  const normasFiltradas = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return normas.filter(
      (norma) =>
        norma.numero.toLowerCase().includes(termo) ||
        norma.titulo.toLowerCase().includes(termo)
    );
  }, [busca]);

  return (
    <main className="pagina">
      <header className="topo">
        <a href="/" className="marca">
          <div className="escudo">PRV</div>

          <div>
            <strong>PRV</strong>
            <span>Treinamentos Normativos</span>
          </div>
        </a>

        <div className="seletores">
          <select value={pais} onChange={(e) => setPais(e.target.value)}>
            <option>Brasil</option>
            <option>Estados Unidos</option>
            <option>Portugal</option>
            <option>Canadá</option>
            <option>Reino Unido</option>
            <option>Austrália</option>
          </select>

          <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option>Português</option>
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>Italiano</option>
          </select>

          <a href="/dashboard" className="painel">
            Meu painel
          </a>
        </div>
      </header>

      <section className="banner">
        <div>
          <span className="etiqueta">
            SEGURANÇA • QUALIDADE • CONFORMIDADE
          </span>

          <h1>Treinamentos Normativos</h1>

          <p>
            Biblioteca profissional de cursos de segurança do trabalho,
            normas regulamentadoras, aulas ao vivo, materiais, simulados e
            certificados.
          </p>

          <div className="destaques">
            <span>✓ 38 normas cadastradas</span>
            <span>✓ Cursos ao vivo e gravados</span>
            <span>✓ Certificação digital</span>
            <span>✓ Tradução internacional</span>
          </div>
        </div>

        <div className="logoGrande">
          <div className="iconeLogo">PRV</div>
          <strong>PRV</strong>
          <span>TREINAMENTOS</span>
        </div>
      </section>

      <section className="filtros">
        <div>
          <h2>Catálogo de cursos — {pais}</h2>
          <p>
            Selecione uma norma para visualizar módulos, aulas, materiais,
            provas e certificados.
          </p>
        </div>

        <input
          type="search"
          placeholder="Buscar por NR ou nome do treinamento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </section>

      <section className="grade">
        {normasFiltradas.map((norma, indice) => {
          const codigo = norma.numero.toLowerCase().replace(" ", "-");

          return (
            <article className="cartao" key={norma.numero}>
              <div className="cabecalhoCartao">
                <span className="numero">{norma.numero}</span>
                <span className="status">
                  {indice === 1 || indice === 26 ? "Histórico" : "Disponível"}
                </span>
              </div>

              <h3>{norma.titulo}</h3>

              <p className="descricao">
                Curso completo com conteúdo teórico, aulas, material de apoio,
                exercícios, avaliação e certificado.
              </p>

              <div className="informacoes">
                <span>🎥 Aulas gravadas</span>
                <span>📄 Apostila</span>
                <span>✅ Simulado</span>
                <span>🏆 Certificado</span>
              </div>

              <div className="rodapeCartao">
                <span>Idioma: {idioma}</span>

                <a href={`/normativos/${codigo}`}>
                  Acessar curso →
                </a>
              </div>
            </article>
          );
        })}
      </section>

      {normasFiltradas.length === 0 && (
        <div className="semResultado">
          Nenhum treinamento foi encontrado.
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .pagina {
          min-height: 100vh;
          padding: 0 28px 50px;
          color: #f7fbff;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 123, 255, 0.16),
              transparent 33%
            ),
            linear-gradient(180deg, #020b16, #031322);
          font-family: Arial, Helvetica, sans-serif;
        }

        .topo {
          width: min(1500px, 100%);
          min-height: 82px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #17324c;
        }

        .marca {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .escudo {
          width: 52px;
          height: 58px;
          display: grid;
          place-items: center;
          border: 3px solid #138cff;
          border-radius: 14px 14px 20px 20px;
          background: #061626;
          font-weight: 900;
        }

        .marca strong {
          display: block;
          font-size: 30px;
          line-height: 1;
        }

        .marca span {
          display: block;
          margin-top: 4px;
          color: #188cff;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .seletores {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        select,
        input {
          color: #eaf4ff;
          border: 1px solid #24445f;
          background: #071827;
          border-radius: 9px;
        }

        select {
          padding: 11px 12px;
        }

        .painel {
          padding: 12px 18px;
          border-radius: 9px;
          background: #087ef5;
          color: white;
          text-decoration: none;
          font-weight: 700;
        }

        .banner {
          width: min(1500px, 100%);
          min-height: 340px;
          margin: 24px auto 18px;
          padding: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          border: 1px solid #19456e;
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(0, 112, 255, 0.27),
              transparent 34%
            ),
            linear-gradient(100deg, #071725, #0b2948);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
        }

        .banner > div:first-child {
          max-width: 820px;
        }

        .etiqueta {
          color: #32a9ff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        h1 {
          margin: 18px 0;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 1;
        }

        .banner p {
          max-width: 780px;
          color: #b0c0d1;
          font-size: 19px;
          line-height: 1.6;
        }

        .destaques {
          margin-top: 25px;
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .destaques span {
          padding: 9px 12px;
          border: 1px solid #1e527c;
          border-radius: 999px;
          background: rgba(5, 25, 43, 0.7);
          color: #dcecff;
          font-size: 13px;
        }

        .logoGrande {
          min-width: 310px;
          text-align: center;
        }

        .iconeLogo {
          width: 145px;
          height: 155px;
          margin: 0 auto 10px;
          display: grid;
          place-items: center;
          border: 8px solid #0d8bff;
          border-radius: 35% 35% 48% 48%;
          background: #051320;
          font-size: 34px;
          font-weight: 900;
        }

        .logoGrande strong {
          display: block;
          font-size: 72px;
          line-height: 1;
        }

        .logoGrande span {
          display: block;
          margin-top: 8px;
          color: #1592ff;
          font-size: 14px;
          letter-spacing: 6px;
        }

        .filtros {
          width: min(1500px, 100%);
          margin: 28px auto 18px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
        }

        .filtros h2 {
          margin: 0 0 8px;
          font-size: 28px;
        }

        .filtros p {
          margin: 0;
          color: #93a8bc;
        }

        .filtros input {
          width: min(430px, 100%);
          padding: 15px 17px;
          font-size: 15px;
        }

        .grade {
          width: min(1500px, 100%);
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .cartao {
          min-height: 350px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          border: 1px solid #183d5d;
          border-radius: 16px;
          background: linear-gradient(180deg, #0a1e31, #061521);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .cartao:hover {
          transform: translateY(-5px);
          border-color: #178fff;
        }

        .cabecalhoCartao {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .numero {
          padding: 10px 13px;
          border-radius: 9px;
          background: #0d7ff2;
          font-size: 17px;
          font-weight: 900;
        }

        .status {
          color: #33dc89;
          font-size: 12px;
        }

        .cartao h3 {
          margin: 22px 0 12px;
          min-height: 66px;
          font-size: 18px;
          line-height: 1.35;
        }

        .descricao {
          margin: 0;
          color: #9eb0c2;
          font-size: 14px;
          line-height: 1.55;
        }

        .informacoes {
          margin: 20px 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 9px;
          color: #bdd0e2;
          font-size: 12px;
        }

        .rodapeCartao {
          margin-top: auto;
          padding-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-top: 1px solid #17324b;
          color: #91a7bb;
          font-size: 12px;
        }

        .rodapeCartao a {
          padding: 10px 12px;
          border-radius: 8px;
          background: #0b6fd3;
          color: white;
          text-decoration: none;
          font-weight: 700;
          white-space: nowrap;
        }

        .semResultado {
          width: min(1500px, 100%);
          margin: 35px auto;
          padding: 30px;
          border: 1px solid #183d5d;
          border-radius: 15px;
          text-align: center;
          color: #9eb0c2;
          background: #071827;
        }

        @media (max-width: 1180px) {
          .grade {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .logoGrande {
            min-width: 240px;
          }
        }

        @media (max-width: 850px) {
          .pagina {
            padding: 0 15px 40px;
          }

          .topo,
          .filtros {
            align-items: stretch;
            flex-direction: column;
            padding: 18px 0;
          }

          .seletores {
            flex-wrap: wrap;
          }

          .banner {
            padding: 30px 22px;
          }

          .logoGrande {
            display: none;
          }

          .grade {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .filtros input {
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .grade {
            grid-template-columns: 1fr;
          }

          .banner {
            min-height: auto;
          }

          .etiqueta {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .cartao h3 {
            min-height: auto;
          }
        }
      `}</style>
    </main>
  );
}
