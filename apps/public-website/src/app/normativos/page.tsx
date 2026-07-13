"use client";

import { useMemo, useState } from "react";

type Standard = {
  number: string;
  title: string;
  status?: "Disponível" | "Histórico";
};

const standards: Standard[] = [
  {
    number: "NR 01",
    title:
      "Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
  },
  {
    number: "NR 02",
    title: "Inspeção Prévia",
    status: "Histórico",
  },
  {
    number: "NR 03",
    title: "Embargo e Interdição",
  },
  {
    number: "NR 04",
    title:
      "Serviços Especializados em Segurança e Medicina do Trabalho",
  },
  {
    number: "NR 05",
    title:
      "Comissão Interna de Prevenção de Acidentes e de Assédio",
  },
  {
    number: "NR 06",
    title: "Equipamentos de Proteção Individual",
  },
  {
    number: "NR 07",
    title:
      "Programa de Controle Médico de Saúde Ocupacional",
  },
  {
    number: "NR 08",
    title: "Edificações",
  },
  {
    number: "NR 09",
    title:
      "Avaliação e Controle das Exposições Ocupacionais",
  },
  {
    number: "NR 10",
    title:
      "Segurança em Instalações e Serviços em Eletricidade",
  },
  {
    number: "NR 11",
    title:
      "Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
  },
  {
    number: "NR 12",
    title:
      "Segurança no Trabalho em Máquinas e Equipamentos",
  },
  {
    number: "NR 13",
    title:
      "Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos",
  },
  {
    number: "NR 14",
    title: "Fornos",
  },
  {
    number: "NR 15",
    title: "Atividades e Operações Insalubres",
  },
  {
    number: "NR 16",
    title: "Atividades e Operações Perigosas",
  },
  {
    number: "NR 17",
    title: "Ergonomia",
  },
  {
    number: "NR 18",
    title:
      "Segurança e Saúde no Trabalho na Indústria da Construção",
  },
  {
    number: "NR 19",
    title: "Explosivos",
  },
  {
    number: "NR 20",
    title:
      "Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
  },
  {
    number: "NR 21",
    title: "Trabalhos a Céu Aberto",
  },
  {
    number: "NR 22",
    title:
      "Segurança e Saúde Ocupacional na Mineração",
  },
  {
    number: "NR 23",
    title: "Proteção Contra Incêndios",
  },
  {
    number: "NR 24",
    title:
      "Condições Sanitárias e de Conforto nos Locais de Trabalho",
  },
  {
    number: "NR 25",
    title: "Resíduos Industriais",
  },
  {
    number: "NR 26",
    title: "Sinalização de Segurança",
  },
  {
    number: "NR 27",
    title:
      "Registro Profissional do Técnico de Segurança do Trabalho",
    status: "Histórico",
  },
  {
    number: "NR 28",
    title: "Fiscalização e Penalidades",
  },
  {
    number: "NR 29",
    title:
      "Segurança e Saúde no Trabalho Portuário",
  },
  {
    number: "NR 30",
    title:
      "Segurança e Saúde no Trabalho Aquaviário",
  },
  {
    number: "NR 31",
    title:
      "Segurança e Saúde no Trabalho Rural",
  },
  {
    number: "NR 32",
    title:
      "Segurança e Saúde no Trabalho em Serviços de Saúde",
  },
  {
    number: "NR 33",
    title:
      "Segurança e Saúde nos Trabalhos em Espaços Confinados",
  },
  {
    number: "NR 34",
    title:
      "Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval",
  },
  {
    number: "NR 35",
    title: "Trabalho em Altura",
  },
  {
    number: "NR 36",
    title:
      "Segurança e Saúde no Trabalho em Empresas de Abate e Processamento de Carnes",
  },
  {
    number: "NR 37",
    title:
      "Segurança e Saúde em Plataformas de Petróleo",
  },
  {
    number: "NR 38",
    title:
      "Segurança e Saúde nas Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos",
  },
];

const countries = [
  "Brasil",
  "Estados Unidos",
  "Portugal",
  "Canadá",
  "Reino Unido",
  "Austrália",
  "Espanha",
  "França",
  "Alemanha",
  "Itália",
  "México",
];

const languages = [
  "Português",
  "English",
  "Español",
  "Français",
  "Deutsch",
  "Italiano",
];

export default function NormativeTrainingPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [language, setLanguage] = useState("Português");

  const filteredStandards = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return standards;
    }

    return standards.filter((standard) => {
      return (
        standard.number.toLowerCase().includes(normalizedSearch) ||
        standard.title.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [search]);

  return (
    <main className="page">
      <header className="header">
        <a href="/" className="brand">
          <div className="brandShield">PRV</div>

          <div className="brandText">
            <strong>PRV</strong>
            <span>Treinamentos Normativos</span>
          </div>
        </a>

        <div className="headerControls">
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            aria-label="Selecionar país"
          >
            {countries.map((countryName) => (
              <option key={countryName}>{countryName}</option>
            ))}
          </select>

          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Selecionar idioma"
          >
            {languages.map((languageName) => (
              <option key={languageName}>{languageName}</option>
            ))}
          </select>

          <a href="/dashboard" className="dashboardButton">
            Meu painel
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroContent">
          <span className="heroLabel">
            SEGURANÇA • QUALIDADE • CONFORMIDADE
          </span>

          <h1>Treinamentos Normativos</h1>

          <p>
            Plataforma profissional de cursos, aulas ao vivo,
            treinamentos presenciais, materiais, simulados,
            avaliações e certificados digitais.
          </p>

          <div className="highlights">
            <span>✓ 38 normas cadastradas</span>
            <span>✓ Cursos gravados</span>
            <span>✓ Aulas ao vivo</span>
            <span>✓ Treinamentos presenciais</span>
            <span>✓ Certificação digital</span>
            <span>✓ Tradução internacional</span>
          </div>
        </div>

        <div className="heroLogo">
          <div className="largeShield">PRV</div>
          <strong>PRV</strong>
          <span>TREINAMENTOS</span>
        </div>
      </section>

      <section className="catalogHeader">
        <div>
          <h2>Catálogo de cursos — {country}</h2>

          <p>
            Escolha uma norma para acessar aulas, materiais,
            avaliações, simulados e certificados.
          </p>
        </div>

        <input
          type="search"
          placeholder="Buscar por NR ou nome do treinamento..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      <section className="courseGrid">
        {filteredStandards.map((standard) => {
          const courseCode = standard.number
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <article className="courseCard" key={standard.number}>
              <div className="courseCardHeader">
                <span className="standardNumber">
                  {standard.number}
                </span>

                <span
                  className={
                    standard.status === "Histórico"
                      ? "courseStatus historical"
                      : "courseStatus"
                  }
                >
                  {standard.status ?? "Disponível"}
                </span>
              </div>

              <h3>{standard.title}</h3>

              <p className="courseDescription">
                Curso completo com conteúdo teórico, aulas,
                material de apoio, treinamento presencial,
                exercícios, avaliação e certificado.
              </p>

              <div className="courseInformation">
                <span>🎥 Aulas gravadas</span>
                <span>📡 Aulas ao vivo</span>
                <span>🏢 Treinamento presencial</span>
                <span>📄 Apostila</span>
                <span>✅ Simulado</span>
                <span>🏆 Certificado</span>
              </div>

              <div className="courseFooter">
                <span>Idioma: {language}</span>

                <div className="courseActions">
                  <a href={`/normativos/${courseCode}`}>
                    Acessar curso
                  </a>

                  <a
                    href={`/empresas/solicitar-treinamento?curso=${courseCode}`}
                    className="inPersonButton"
                  >
                    Solicitar presencial
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {filteredStandards.length === 0 && (
        <div className="emptyState">
          Nenhum treinamento foi encontrado.
        </div>
      )}

      <section className="internationalSection">
        <div>
          <span className="internationalLabel">
            PLATAFORMA INTERNACIONAL
          </span>

          <h2>Treinamentos organizados por país</h2>

          <p>
            A plataforma poderá apresentar cursos e normas de
            segurança ocupacional específicas para cada país.
          </p>
        </div>

        <div className="countryGrid">
          <article>
            <span>🇧🇷</span>
            <strong>Brasil</strong>
            <small>Normas Regulamentadoras</small>
          </article>

          <article>
            <span>🇺🇸</span>
            <strong>Estados Unidos</strong>
            <small>OSHA</small>
          </article>

          <article>
            <span>🇨🇦</span>
            <strong>Canadá</strong>
            <small>CCOHS e CSA</small>
          </article>

          <article>
            <span>🇬🇧</span>
            <strong>Reino Unido</strong>
            <small>HSE</small>
          </article>

          <article>
            <span>🇵🇹</span>
            <strong>Portugal</strong>
            <small>ACT e legislação europeia</small>
          </article>

          <article>
            <span>🌐</span>
            <strong>Outros países</strong>
            <small>Catálogo internacional</small>
          </article>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 0 28px 60px;
          color: #f7fbff;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 123, 255, 0.17),
              transparent 34%
            ),
            linear-gradient(180deg, #020b16, #031322);
          font-family: Arial, Helvetica, sans-serif;
        }

        .header {
          width: min(1500px, 100%);
          min-height: 84px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #17324c;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
          color: white;
          text-decoration: none;
        }

        .brandShield {
          width: 54px;
          height: 62px;
          display: grid;
          place-items: center;
          border: 3px solid #138cff;
          border-radius: 15px 15px 22px 22px;
          background: #061626;
          font-weight: 900;
        }

        .brandText strong {
          display: block;
          font-size: 31px;
          line-height: 1;
        }

        .brandText span {
          display: block;
          margin-top: 5px;
          color: #188cff;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .headerControls {
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
          outline: none;
        }

        select {
          padding: 11px 12px;
        }

        select:focus,
        input:focus {
          border-color: #138cff;
        }

        .dashboardButton {
          padding: 12px 18px;
          border-radius: 9px;
          background: #087ef5;
          color: white;
          text-decoration: none;
          font-weight: 700;
        }

        .hero {
          width: min(1500px, 100%);
          min-height: 350px;
          margin: 24px auto 18px;
          padding: 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          border: 1px solid #19456e;
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(0, 112, 255, 0.28),
              transparent 35%
            ),
            linear-gradient(100deg, #071725, #0b2948);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
        }

        .heroContent {
          max-width: 850px;
        }

        .heroLabel {
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

        .heroContent p {
          max-width: 780px;
          color: #b0c0d1;
          font-size: 19px;
          line-height: 1.6;
        }

        .highlights {
          margin-top: 25px;
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .highlights span {
          padding: 9px 12px;
          border: 1px solid #1e527c;
          border-radius: 999px;
          background: rgba(5, 25, 43, 0.7);
          color: #dcecff;
          font-size: 13px;
        }

        .heroLogo {
          min-width: 310px;
          text-align: center;
        }

        .largeShield {
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

        .heroLogo strong {
          display: block;
          font-size: 72px;
          line-height: 1;
        }

        .heroLogo span {
          display: block;
          margin-top: 8px;
          color: #1592ff;
          font-size: 14px;
          letter-spacing: 6px;
        }

        .catalogHeader {
          width: min(1500px, 100%);
          margin: 30px auto 18px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
        }

        .catalogHeader h2 {
          margin: 0 0 8px;
          font-size: 29px;
        }

        .catalogHeader p {
          margin: 0;
          color: #93a8bc;
        }

        .catalogHeader input {
          width: min(450px, 100%);
          padding: 15px 17px;
          font-size: 15px;
        }

        .courseGrid {
          width: min(1500px, 100%);
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .courseCard {
          min-height: 390px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          border: 1px solid #183d5d;
          border-radius: 16px;
          background: linear-gradient(180deg, #0a1e31, #061521);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .courseCard:hover {
          transform: translateY(-5px);
          border-color: #178fff;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .courseCardHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .standardNumber {
          padding: 10px 13px;
          border-radius: 9px;
          background: #0d7ff2;
          font-size: 17px;
          font-weight: 900;
        }

        .courseStatus {
          color: #33dc89;
          font-size: 12px;
        }

        .courseStatus.historical {
          color: #ffc45b;
        }

        .courseCard h3 {
          margin: 22px 0 12px;
          min-height: 70px;
          font-size: 18px;
          line-height: 1.35;
        }

        .courseDescription {
          margin: 0;
          color: #9eb0c2;
          font-size: 14px;
          line-height: 1.55;
        }

        .courseInformation {
          margin: 20px 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
          color: #bdd0e2;
          font-size: 12px;
        }

        .courseFooter {
          margin-top: auto;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 13px;
          border-top: 1px solid #17324b;
          color: #91a7bb;
          font-size: 12px;
        }

        .courseActions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .courseActions a {
          flex: 1;
          min-width: 120px;
          padding: 11px 12px;
          border-radius: 8px;
          background: #0b6fd3;
          color: white;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          white-space: nowrap;
        }

        .courseActions .inPersonButton {
          background: #167a43;
        }

        .courseActions a:hover {
          filter: brightness(1.12);
        }

        .emptyState {
          width: min(1500px, 100%);
          margin: 35px auto;
          padding: 30px;
          border: 1px solid #183d5d;
          border-radius: 15px;
          text-align: center;
          color: #9eb0c2;
          background: #071827;
        }

        .internationalSection {
          width: min(1500px, 100%);
          margin: 40px auto 0;
          padding: 34px;
          border: 1px solid #183d5d;
          border-radius: 20px;
          background: linear-gradient(180deg, #081b2d, #061420);
        }

        .internationalLabel {
          color: #32a9ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .internationalSection h2 {
          margin: 12px 0 8px;
          font-size: 30px;
        }

        .internationalSection p {
          color: #9eb0c2;
          line-height: 1.6;
        }

        .countryGrid {
          margin-top: 25px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }

        .countryGrid article {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          border: 1px solid #1b405f;
          border-radius: 12px;
          background: #08192a;
        }

        .countryGrid article > span {
          font-size: 28px;
        }

        .countryGrid strong {
          font-size: 14px;
        }

        .countryGrid small {
          color: #93a8bc;
        }

        @media (max-width: 1180px) {
          .courseGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .countryGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .heroLogo {
            min-width: 240px;
          }
        }

        @media (max-width: 850px) {
          .page {
            padding: 0 15px 40px;
          }

          .header,
          .catalogHeader {
            align-items: stretch;
            flex-direction: column;
            padding: 18px 0;
          }

          .headerControls {
            flex-wrap: wrap;
          }

          .hero {
            padding: 30px 22px;
          }

          .heroLogo {
            display: none;
          }

          .courseGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .catalogHeader input {
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .courseGrid,
          .countryGrid {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
          }

          .heroLabel {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .courseCard h3 {
            min-height: auto;
          }

          .courseInformation {
            grid-template-columns: 1fr;
          }

          .headerControls select,
          .dashboardButton {
            width: 100%;
          }

          .dashboardButton {
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
