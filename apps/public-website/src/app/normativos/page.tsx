import Link from "next/link";

const standards = Array.from({ length: 38 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    code: `NR ${number}`,
    slug: `nr-${number}`,
    title: `Brazilian Regulatory Standard ${number}`,
  };
});

export default function NormativeTrainingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        color: "#ffffff",
        background:
          "linear-gradient(180deg, #020b16 0%, #061827 50%, #03111e 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <strong
            style={{
              display: "block",
              fontSize: "30px",
            }}
          >
            PRV Normative Training
          </strong>

          <span
            style={{
              display: "block",
              marginTop: "6px",
              color: "#279cff",
            }}
          >
            Safety • Quality • Compliance
          </span>
        </div>

        <Link
          href="/"
          style={{
            padding: "12px 20px",
            borderRadius: "9px",
            color: "#ffffff",
            background: "#087ef5",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Return Home
        </Link>
      </header>

      <section
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px",
          border: "1px solid #1b476d",
          borderRadius: "24px",
          background:
            "linear-gradient(180deg, rgba(10, 36, 60, 0.96), rgba(5, 20, 34, 0.98))",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#31a7ff",
            fontWeight: 800,
            letterSpacing: "3px",
          }}
        >
          BRAZILIAN REGULATORY STANDARDS
        </p>

        <h1
          style={{
            margin: "18px 0",
            fontSize: "clamp(40px, 7vw, 76px)",
          }}
        >
          Training Catalog
        </h1>

        <p
          style={{
            maxWidth: "850px",
            color: "#aebfd0",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Access occupational safety courses, recorded classes, live
          training, in-person programs, assessments, study materials and
          digital certificates.
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {standards.map((standard) => (
            <article
              key={standard.code}
              style={{
                minHeight: "230px",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #1c4568",
                borderRadius: "15px",
                background: "#081b2c",
              }}
            >
              <span
                style={{
                  width: "fit-content",
                  padding: "9px 13px",
                  borderRadius: "8px",
                  background: "#0c7ff1",
                  fontWeight: 900,
                }}
              >
                {standard.code}
              </span>

              <h2
                style={{
                  margin: "22px 0 12px",
                  fontSize: "19px",
                }}
              >
                {standard.title}
              </h2>

              <p
                style={{
                  margin: "0 0 20px",
                  color: "#9fb1c2",
                  lineHeight: 1.5,
                }}
              >
                Professional training with lessons, materials, assessment
                and certification.
              </p>

              <Link
                href={`/normativos/${standard.slug}`}
                style={{
                  marginTop: "auto",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  color: "#ffffff",
                  background: "#0b6fd3",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Open Training
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
