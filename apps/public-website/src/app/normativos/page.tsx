export default function HomePage() {
  return (
    <main className="homePage">
      <div className="backgroundGlow backgroundGlowOne" />
      <div className="backgroundGlow backgroundGlowTwo" />

      <header className="header">
        <a href="/" className="brand">
          <div className="smallShield">
            <span>PRV</span>
          </div>

          <div className="brandText">
            <strong>PRV</strong>
            <span>Treinamentos Normativos</span>
          </div>
        </a>

        <nav className="navigation">
          <a href="#solutions">Soluções</a>
          <a href="/normativos">Cursos</a>
          <a href="#companies">Empresas</a>
          <a href="#contact">Contato</a>
        </nav>

        <a href="/dashboard" className="dashboardAccess">
          Acessar plataforma
        </a>
      </header>

      <section className="presentation">
        <div className="presentationHeader">
          <span className="eyebrow">
            SEGURANÇA • QUALIDADE • CONFORMIDADE
          </span>

          <h1>PRV Treinamentos Normativos</h1>

          <p>
            Plataforma profissional de cursos, aulas ao vivo,
            treinamentos presenciais, certificados digitais e soluções
            corporativas em segurança do trabalho.
          </p>
        </div>

        <section id="solutions" className="solutionGrid">
          <article className="solutionCard courseCard">
            <div className="iconCircle blueIcon">
              <span>🎓</span>
            </div>

            <h2>Ver cursos</h2>

            <p>
              Acesse o catálogo completo de treinamentos, aulas,
              simulados, materiais e certificados.
            </p>

            <a href="/normativos" className="cardButton blueButton">
              Acessar cursos
            </a>
          </article>

          <article className="solutionCard normativeCard">
            <div className="iconCircle greenIcon">
              <span>✓</span>
            </div>

            <h2>Treinamentos normativos</h2>

            <p>
              Conheça as 38 Normas Regulamentadoras brasileiras e os
              treinamentos organizados por país.
            </p>

            <a href="/normativos" className="cardButton greenButton">
              Ver as 38 NRs
            </a>
          </article>

          <article id="companies" className="solutionCard companyCard">
            <div className="iconCircle blueIcon">
              <span>▦</span>
            </div>

            <h2>Treinamento para empresas</h2>

            <p>
              Solicite treinamentos presenciais, ao vivo ou personalizados
              para sua empresa e seus colaboradores.
            </p>

            <a
              href="/empresas/solicitar-treinamento"
              className="cardButton blueButton"
            >
              Solicitar treinamento
            </a>
          </article>
        </section>

        <section className="advantages">
          <article>
            <div className="advantageIcon">✓</div>

            <div>
              <strong>Conformidade</strong>
              <span>Treinamentos alinhados às normas</span>
            </div>
          </article>

          <article>
            <div className="advantageIcon">✦</div>

            <div>
              <strong>Qualidade</strong>
              <span>Conteúdo profissional e atualizado</span>
            </div>
          </article>

          <article>
            <div className="advantageIcon">🌐</div>

            <div>
              <strong>Abrangência</strong>
              <span>Brasil e catálogo internacional</span>
            </div>
          </article>

          <article>
            <div className="advantageIcon">▣</div>

            <div>
              <strong>Certificação</strong>
              <span>Certificados digitais verificáveis</span>
            </div>
          </article>
        </section>
      </section>

      <section className="platformSection">
        <div className="platformText">
          <span className="sectionLabel">PLATAFORMA COMPLETA</span>

          <h2>Formação profissional em um único ambiente</h2>

          <p>
            Alunos, empresas, instrutores e administradores poderão acessar
            recursos específicos, acompanhar cursos, participar de aulas ao
            vivo e emitir certificados.
          </p>

          <div className="featureList">
            <span>✓ Cursos gravados</span>
            <span>✓ Aulas ao vivo</span>
            <span>✓ Treinamentos presenciais</span>
            <span>✓ Biblioteca digital</span>
            <span>✓ Simulados e avaliações</span>
            <span>✓ Certificados digitais</span>
          </div>

          <a href="/dashboard" className="platformButton">
            Entrar na plataforma
          </a>
        </div>

        <div className="platformPreview">
          <div className="previewTop">
            <div className="previewLogo">PRV</div>

            <div className="previewSearch">
              Buscar cursos e treinamentos...
            </div>

            <div className="previewProfile">MC</div>
          </div>

          <div className="previewContent">
            <aside className="previewSidebar">
              <span className="activeMenu">Início</span>
              <span>Meus cursos</span>
              <span>Aulas ao vivo</span>
              <span>Certificados</span>
              <span>Biblioteca</span>
              <span>Simulados</span>
            </aside>

            <div className="previewMain">
              <div className="previewBanner">
                <span>PLATAFORMA GLOBAL</span>
                <strong>Treinamentos profissionais</strong>
                <small>Segurança, qualidade e conformidade</small>
              </div>

              <div className="previewCards">
                <div>
                  <strong>Aulas ao vivo</strong>
                  <span>Participe em tempo real</span>
                </div>

                <div>
                  <strong>Cursos gravados</strong>
                  <span>Aprenda no seu ritmo</span>
                </div>

                <div>
                  <strong>Certificados</strong>
                  <span>Emissão digital</span>
                </div>
              </div>

              <div className="previewCourses">
                <div>
                  <span className="courseCode">NR 35</span>
                  <strong>Trabalho em Altura</strong>
                  <div className="progressBar">
                    <span style={{ width: "75%" }} />
                  </div>
                </div>

                <div>
                  <span className="courseCode">NR 10</span>
                  <strong>Segurança em Eletricidade</strong>
                  <div className="progressBar">
                    <span style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="countrySection">
        <div className="countryHeading">
          <span className="sectionLabel">TREINAMENTOS INTERNACIONAIS</span>

          <h2>Conteúdo organizado por legislação e país</h2>

          <p>
            O Brasil utiliza as Normas Regulamentadoras. Outros países serão
            organizados conforme seus próprios órgãos, normas e legislações.
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
            <small>Expansão internacional</small>
          </article>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <span className="sectionLabel">ATENDIMENTO CORPORATIVO</span>

        <h2>Leve os treinamentos da PRV para sua empresa</h2>

        <p>
          Solicite uma proposta para cursos normativos, capacitação de
          colaboradores e treinamentos presenciais.
        </p>

        <div className="contactActions">
          <a
            href="/empresas/solicitar-treinamento"
            className="contactPrimary"
          >
            Solicitar treinamento
          </a>

          <a href="/normativos" className="contactSecondary">
            Consultar cursos
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <div className="footerShield">PRV</div>

          <div>
            <strong>PRV Treinamentos Normativos</strong>
            <span>Segurança • Qualidade • Conformidade</span>
          </div>
        </div>

        <p>
          Plataforma de treinamentos profissionais, cursos normativos e
          soluções corporativas.
        </p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .homePage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 0 28px 40px;
          color: #f6f9fd;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 119, 255, 0.17),
              transparent 30%
            ),
            linear-gradient(180deg, #020b16, #031321);
          font-family: Arial, Helvetica, sans-serif;
        }

        .backgroundGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(110px);
          pointer-events: none;
          opacity: 0.34;
        }

        .backgroundGlowOne {
          width: 420px;
          height: 420px;
          top: 200px;
          left: -260px;
          background: #0077ff;
        }

        .backgroundGlowTwo {
          width: 420px;
          height: 420px;
          top: 720px;
          right: -280px;
          background: #005fcc;
        }

        .header {
          position: relative;
          z-index: 2;
          width: min(1500px, 100%);
          min-height: 86px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid #17324c;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .smallShield {
          width: 55px;
          height: 63px;
          display: grid;
          place-items: center;
          border: 3px solid #128dff;
          border-radius: 15px 15px 23px 23px;
          background: linear-gradient(180deg, #09223b, #04111f);
          box-shadow: 0 0 26px rgba(0, 130, 255, 0.22);
          font-size: 14px;
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
          color: #178fff;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .navigation {
          display: flex;
          align-items: center;
          gap: 28px;
          color: #aebdcd;
          font-size: 14px;
        }

        .navigation a:hover {
          color: #ffffff;
        }

        .dashboardAccess {
          padding: 12px 18px;
          border: 1px solid #188fff;
          border-radius: 9px;
          background: rgba(6, 33, 57, 0.75);
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        .presentation {
          position: relative;
          z-index: 1;
          width: min(1360px, 100%);
          margin: 34px auto 0;
          padding: 48px 58px 38px;
          border: 1px solid #1a466f;
          border-radius: 34px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 124, 255, 0.2),
              transparent 38%
            ),
            linear-gradient(180deg, #071a2c, #061421);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.38);
        }

        .presentationHeader {
          max-width: 960px;
          margin: auto;
          text-align: center;
        }

        .eyebrow,
        .sectionLabel {
          color: #32a8ff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .presentationHeader h1 {
          margin: 22px 0 18px;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1;
        }

        .presentationHeader p {
          max-width: 880px;
          margin: auto;
          color: #adbdcc;
          font-size: 19px;
          line-height: 1.6;
        }

        .solutionGrid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .solutionCard {
          min-height: 365px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #1b4c78;
          border-radius: 24px;
          text-align: center;
          background:
            linear-gradient(
              180deg,
              rgba(10, 34, 57, 0.94),
              rgba(4, 18, 31, 0.97)
            );
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .solutionCard:hover {
          transform: translateY(-7px);
          border-color: #198fff;
        }

        .normativeCard {
          border-color: #17643d;
          background:
            radial-gradient(
              circle at 50% 55%,
              rgba(0, 145, 71, 0.14),
              transparent 45%
            ),
            linear-gradient(
              180deg,
              rgba(8, 40, 41, 0.95),
              rgba(4, 23, 27, 0.98)
            );
        }

        .normativeCard:hover {
          border-color: #1eb76a;
        }

        .iconCircle {
          width: 118px;
          height: 118px;
          margin-bottom: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 48px;
          font-weight: 900;
        }

        .blueIcon {
          border: 1px solid #1b7ee3;
          background:
            radial-gradient(circle, #1368bf, #073563 75%);
          box-shadow: 0 0 35px rgba(0, 119, 255, 0.2);
        }

        .greenIcon {
          border: 1px solid #22ad67;
          background:
            radial-gradient(circle, #17944e, #074b29 75%);
          box-shadow: 0 0 35px rgba(0, 175, 88, 0.2);
        }

        .solutionCard h2 {
          margin: 0 0 14px;
          font-size: 23px;
          text-transform: uppercase;
        }

        .solutionCard p {
          margin: 0 0 24px;
          color: #a4b5c5;
          font-size: 15px;
          line-height: 1.6;
        }

        .cardButton {
          width: 100%;
          margin-top: auto;
          padding: 15px 18px;
          border-radius: 10px;
          color: white;
          font-size: 16px;
          font-weight: 800;
          transition: filter 0.2s ease;
        }

        .cardButton:hover {
          filter: brightness(1.15);
        }

        .blueButton {
          border: 1px solid #238cff;
          background: linear-gradient(180deg, #176fca, #0b54a0);
        }

        .greenButton {
          border: 1px solid #29c271;
          background: linear-gradient(180deg, #188b4c, #116637);
        }

        .advantages {
          margin-top: 38px;
          padding-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          border-top: 1px solid #173d5e;
        }

        .advantages article {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .advantageIcon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border: 2px solid #168cff;
          border-radius: 13px;
          color: #35a6ff;
          font-size: 21px;
          font-weight: 900;
        }

        .advantages strong {
          display: block;
          font-size: 15px;
        }

        .advantages span {
          display: block;
          margin-top: 5px;
          color: #8da2b6;
          font-size: 12px;
        }

        .platformSection {
          position: relative;
          z-index: 1;
          width: min(1500px, 100%);
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          align-items: center;
          gap: 55px;
        }

        .platformText h2,
        .countryHeading h2,
        .contactSection h2 {
          margin: 15px 0;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
        }

        .platformText p,
        .countryHeading p,
        .contactSection p {
          color: #9eb0c1;
          font-size: 17px;
          line-height: 1.7;
        }

        .featureList {
          margin: 26px 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
          color: #d5e5f4;
          font-size: 14px;
        }

        .platformButton {
          display: inline-block;
          padding: 15px 23px;
          border-radius: 9px;
          background: #0b7ff2;
          color: white;
          font-weight: 800;
        }

        .platformPreview {
          overflow: hidden;
          border: 1px solid #17446b;
          border-radius: 20px;
          background: #04111e;
          box-shadow: 0 32px 75px rgba(0, 0, 0, 0.4);
        }

        .previewTop {
          min-height: 60px;
          padding: 12px 16px;
          display: grid;
          grid-template-columns: 70px 1fr 42px;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid #173a58;
          background: #061522;
        }

        .previewLogo {
          color: #ffffff;
          font-weight: 900;
        }

        .previewSearch {
          padding: 10px 14px;
          border: 1px solid #1a3a55;
          border-radius: 8px;
          color: #7890a6;
          font-size: 12px;
          background: #081a2a;
        }

        .previewProfile {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #0c71cf;
          font-size: 12px;
          font-weight: 900;
        }

        .previewContent {
          min-height: 420px;
          display: grid;
          grid-template-columns: 145px 1fr;
        }

        .previewSidebar {
          padding: 18px 12px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-right: 1px solid #173a58;
          color: #95a8bb;
          font-size: 11px;
        }

        .previewSidebar span {
          padding: 10px;
          border-radius: 7px;
        }

        .previewSidebar .activeMenu {
          color: white;
          background: #0b78e7;
        }

        .previewMain {
          padding: 16px;
        }

        .previewBanner {
          min-height: 145px;
          padding: 23px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #18476f;
          border-radius: 12px;
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(0, 119, 255, 0.3),
              transparent 32%
            ),
            linear-gradient(90deg, #07192b, #0a2848);
        }

        .previewBanner span {
          color: #188fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .previewBanner strong {
          margin: 10px 0;
          font-size: 25px;
          text-transform: uppercase;
        }

        .previewBanner small {
          color: #a0b0bf;
        }

        .previewCards {
          margin-top: 13px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .previewCards div {
          min-height: 78px;
          padding: 13px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #173d5f;
          border-radius: 10px;
          background: #081a2a;
        }

        .previewCards strong {
          font-size: 11px;
        }

        .previewCards span {
          margin-top: 6px;
          color: #8599ac;
          font-size: 9px;
        }

        .previewCourses {
          margin-top: 13px;
          display: grid;
          gap: 10px;
        }

        .previewCourses > div {
          padding: 14px;
          display: grid;
          grid-template-columns: 65px 1fr;
          gap: 10px;
          align-items: center;
          border: 1px solid #173c5b;
          border-radius: 10px;
          background: #071827;
        }

        .courseCode {
          color: #27b2ff;
          font-size: 15px;
          font-weight: 900;
        }

        .previewCourses strong {
          font-size: 11px;
        }

        .progressBar {
          grid-column: 2;
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: #0d2b42;
        }

        .progressBar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #0c85ff;
        }

        .countrySection {
          position: relative;
          z-index: 1;
          width: min(1500px, 100%);
          margin: 85px auto 0;
        }

        .countryHeading {
          max-width: 850px;
        }

        .countryGrid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 14px;
        }

        .countryGrid article {
          min-height: 145px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
          border: 1px solid #193e5e;
          border-radius: 15px;
          background: linear-gradient(180deg, #081b2d, #061420);
        }

        .countryGrid article > span {
          font-size: 30px;
        }

        .countryGrid strong {
          font-size: 15px;
        }

        .countryGrid small {
          color: #8ea3b7;
          line-height: 1.4;
        }

        .contactSection {
          position: relative;
          z-index: 1;
          width: min(1200px, 100%);
          margin: 85px auto 0;
          padding: 55px;
          border: 1px solid #1a4a73;
          border-radius: 24px;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 121, 255, 0.19),
              transparent 48%
            ),
            linear-gradient(180deg, #081c2f, #061522);
        }

        .contactSection p {
          max-width: 760px;
          margin: auto;
        }

        .contactActions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .contactActions a {
          padding: 15px 22px;
          border-radius: 9px;
          font-weight: 800;
        }

        .contactPrimary {
          background: #0c81f7;
        }

        .contactSecondary {
          border: 1px solid #1f75bd;
          background: #071a2a;
        }

        .footer {
          position: relative;
          z-index: 1;
          width: min(1500px, 100%);
          margin: 75px auto 0;
          padding: 28px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-top: 1px solid #17324c;
          color: #8195a8;
        }

        .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footerShield {
          width: 44px;
          height: 50px;
          display: grid;
          place-items: center;
          border: 2px solid #188fff;
          border-radius: 11px 11px 17px 17px;
          color: white;
          font-size: 11px;
          font-weight: 900;
        }

        .footerBrand strong {
          display: block;
          color: #f3f7fb;
          font-size: 14px;
        }

        .footerBrand span {
          display: block;
          margin-top: 5px;
          font-size: 10px;
        }

        .footer p {
          margin: 0;
          max-width: 520px;
          text-align: right;
          font-size: 12px;
          line-height: 1.5;
        }

        @media (max-width: 1100px) {
          .solutionGrid {
            gap: 15px;
          }

          .solutionCard {
            padding: 22px;
          }

          .countryGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .platformSection {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 850px) {
          .homePage {
            padding: 0 15px 35px;
          }

          .header {
            padding: 16px 0;
            flex-wrap: wrap;
          }

          .navigation {
            width: 100%;
            order: 3;
            justify-content: center;
            gap: 18px;
          }

          .presentation {
            padding: 34px 20px 28px;
          }

          .solutionGrid {
            grid-template-columns: 1fr;
          }

          .solutionCard {
            min-height: 330px;
          }

          .advantages {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .countryGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contactSection {
            padding: 38px 22px;
          }

          .footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer p {
            text-align: left;
          }
        }

        @media (max-width: 560px) {
          .brandText strong {
            font-size: 24px;
          }

          .dashboardAccess {
            width: 100%;
            text-align: center;
          }

          .navigation {
            overflow-x: auto;
            justify-content: flex-start;
          }

          .presentationHeader h1 {
            font-size: 42px;
          }

          .advantages,
          .countryGrid,
          .featureList {
            grid-template-columns: 1fr;
          }

          .advantages article {
            justify-content: flex-start;
          }

          .previewContent {
            grid-template-columns: 90px 1fr;
          }

          .previewSidebar {
            padding: 12px 7px;
          }

          .previewCards {
            grid-template-columns: 1fr;
          }

          .previewCourses > div {
            grid-template-columns: 1fr;
          }

          .progressBar {
            grid-column: auto;
          }

          .platformPreview {
            overflow-x: auto;
          }
        }
      `}</style>
    </main>
  );
}
