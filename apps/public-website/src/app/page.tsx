export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
          padding: "48px 24px",
          border: "1px solid #1d4f7a",
          borderRadius: "24px",
          background: "#0a1a2d",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#38bdf8",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Segurança • Qualidade • Conformidade
        </p>

        <h1
          style={{
            margin: "20px 0 12px",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}
        >
          PRV Treinamento
        </h1>

        <p
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Plataforma de cursos, aulas ao vivo, treinamentos presenciais,
          certificados e soluções corporativas.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#cursos"
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              background: "#0284c7",
              fontWeight: 700,
            }}
          >
            Ver cursos
          </a>

          <a
            href="#empresas"
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "1px solid #38bdf8",
              fontWeight: 700,
            }}
          >
            Treinamento para empresas
          </a>
        </div>
      </section>
    </main>
  );
}
