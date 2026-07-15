import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#071321 0%,#0b1f33 50%,#06101c 100%)",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          background: "#0d1d30",
          borderRadius: "24px",
          padding: "50px",
          border: "1px solid #1e3b63",
          boxShadow: "0 0 40px rgba(0,0,0,.45)",
        }}
      >
        <p
          style={{
            color: "#3ea6ff",
            letterSpacing: "4px",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          SAFETY • QUALITY • COMPLIANCE
        </p>

        <h1
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          PRV Training
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#c8d5e5",
            fontSize: "22px",
            maxWidth: "900px",
            margin: "0 auto 50px",
          }}
        >
          Professional platform for online courses, live classes,
          in-person training, digital certificates and corporate
          safety solutions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "30px",
          }}
        >
       <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px",
  }}
>   
          <article
            style={{
              minHeight: "390px",
              padding: "30px",
              border: "1px solid #23578a",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg, rgba(16,44,73,.96), rgba(5,20,35,.98))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                marginBottom: "25px",
                border: "1px solid #278cff",
                background:
                  "radial-gradient(circle, #1976d2, #073764 75%)",
                fontSize: "48px",
              }}
            >
              🎓
            </div>

            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              View Courses
            </h2>

            <p
              style={{
                color: "#aebfd0",
                lineHeight: 1.7,
                margin: "0 0 28px",
              }}
            >
              Access the complete course catalog, recorded classes,
              live training, simulations, study materials and digital
              certificates.
            </p>

            <Link
              href="/normativos"
              style={{
                width: "100%",
                marginTop: "auto",
                padding: "15px 18px",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, #1685ef, #0a5caf)",
                color: "#ffffff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Access Courses
            </Link>
          </article>

          <article
            style={{
              minHeight: "390px",
              padding: "30px",
              border: "1px solid #268451",
              borderRadius: "20px",
              background:
                "radial-gradient(circle at 50% 55%, rgba(0,155,77,.17), transparent 48%), linear-gradient(180deg, rgba(9,48,48,.96), rgba(4,25,29,.98))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                marginBottom: "25px",
                border: "1px solid #2acb79",
                background:
                  "radial-gradient(circle, #17984f, #07502c 75%)",
                fontSize: "54px",
                fontWeight: 900,
              }}
            >
              ✓
            </div>

            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              Regulatory Training
            </h2>

            <p
              style={{
                color: "#aebfd0",
                lineHeight: 1.7,
                margin: "0 0 28px",
              }}
            >
              Explore all 38 Brazilian Regulatory Standards and
              occupational safety training organized by country.
            </p>

            <Link
              href="/normativos"
              style={{
                width: "100%",
                marginTop: "auto",
                padding: "15px 18px",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, #1b9d58, #116d3b)",
                color: "#ffffff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              View the 38 NRs
            </Link>
          </article>

          <article
            style={{
              minHeight: "390px",
              padding: "30px",
              border: "1px solid #23578a",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg, rgba(16,44,73,.96), rgba(5,20,35,.98))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                marginBottom: "25px",
                border: "1px solid #278cff",
                background:
                  "radial-gradient(circle, #1976d2, #073764 75%)",
                fontSize: "48px",
              }}
            >
              🏢
            </div>

            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "25px",
                textTransform: "uppercase",
              }}
            >
              Training for Companies
            </h2>

            <p
              style={{
                color: "#aebfd0",
                lineHeight: 1.7,
                margin: "0 0 28px",
              }}
            >
              Request in-person, live or customized training programs
              for your company, teams and employees.
            </p>

            <Link
              href="/companies"
              style={{
                width: "100%",
                marginTop: "auto",
                padding: "15px 18px",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, #1685ef, #0a5caf)",
                color: "#ffffff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Request Training
            </Link>
          </article>
        </div>        
                  <section
          style={{
            marginTop: "38px",
            paddingTop: "30px",
            borderTop: "1px solid #21415f",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <article
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              padding: "18px",
              borderRadius: "14px",
              background: "rgba(7, 26, 43, 0.72)",
              border: "1px solid #173c5d",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                border: "2px solid #158cff",
                borderRadius: "13px",
                color: "#35a8ff",
                fontSize: "23px",
                fontWeight: 900,
              }}
            >
              ✓
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "16px",
                }}
              >
                Compliance
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "5px",
                  color: "#91a6ba",
                  fontSize: "12px",
                }}
              >
                Standards-based training
              </span>
            </div>
          </article>

          <article
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              padding: "18px",
              borderRadius: "14px",
              background: "rgba(7, 26, 43, 0.72)",
              border: "1px solid #173c5d",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                border: "2px solid #158cff",
                borderRadius: "13px",
                color: "#35a8ff",
                fontSize: "23px",
                fontWeight: 900,
              }}
            >
              ✦
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "16px",
                }}
              >
                Quality
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "5px",
                  color: "#91a6ba",
                  fontSize: "12px",
                }}
              >
                Professional content
              </span>
            </div>
          </article>

          <article
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              padding: "18px",
              borderRadius: "14px",
              background: "rgba(7, 26, 43, 0.72)",
              border: "1px solid #173c5d",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                border: "2px solid #158cff",
                borderRadius: "13px",
                color: "#35a8ff",
                fontSize: "23px",
              }}
            >
                  <section
          style={{
            marginTop: "48px",
            padding: "34px",
            border: "1px solid #1c456a",
            borderRadius: "20px",
            background:
              "linear-gradient(180deg, rgba(8, 31, 51, 0.95), rgba(4, 17, 29, 0.98))",
          }}
        >
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#31a7ff",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "3px",
              }}
            >
              INTERNATIONAL TRAINING
            </span>

            <h2
              style={{
                margin: "16px 0",
                fontSize: "38px",
              }}
            >
              Training organized by country
            </h2>

            <p
              style={{
                margin: 0,
                color: "#a9bacb",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              Each country can have courses organized according to its
              occupational safety authorities, regulations and local
              legislation.
            </p>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🇧🇷
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                Brazil
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                Regulatory Standards — NRs
              </span>
            </article>

            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🇺🇸
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                United States
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                OSHA Standards
              </span>
            </article>

            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🇨🇦
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                Canada
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                CCOHS and CSA
              </span>
            </article>

            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🇬🇧
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                United Kingdom
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                HSE Regulations
              </span>
            </article>

            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🇵🇹
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                Portugal
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                ACT and European Legislation
              </span>
            </article>

            <article
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #1b456a",
                background: "#081a2b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "12px",
                }}
              >
                🌐
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                Other Countries
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  color: "#91a7bb",
                  fontSize: "13px",
                }}
              >
                International Expansion
              </span>
            </article>
          </div>
        </section>

        <section
          style={{
            marginTop: "48px",
            padding: "38px",
            border: "1px solid #1f4e77",
            borderRadius: "20px",
            background:
              "radial-gradient(circle at 50% 0%, rgba(0, 126, 255, 0.18), transparent 50%), linear-gradient(180deg, #08213a, #061522)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#31a7ff",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            CORPORATE TRAINING
          </span>

          <h2
            style={{
              margin: "16px 0",
              fontSize: "38px",
            }}
          >
            Bring PRV training to your company
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#a9bacb",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Request recorded courses, live classes, in-person training and
            customized occupational safety programs for your employees.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/companies"
              style={{
                padding: "15px 24px",
                borderRadius: "10px",
                background: "#0c82f7",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Request Corporate Training
            </Link>

            <Link
              href="/normativos"
              style={{
                padding: "15px 24px",
                borderRadius: "10px",
                border: "1px solid #1f79c4",
                background: "#071a2b",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              View Training Catalog
            </Link>
          </div>
        </section>

        <footer
          style={{
            marginTop: "50px",
            paddingTop: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            borderTop: "1px solid #21415f",
            color: "#879caf",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "13px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "55px",
                display: "grid",
                placeItems: "center",
                border: "2px solid #168cff",
                borderRadius: "12px 12px 18px 18px",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 900,
              }}
            >
              PRV
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  color: "#ffffff",
                  fontSize: "15px",
                }}
              >
                PRV Normative Training
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "6px",
                  fontSize: "11px",
                }}
              >
                Safety • Quality • Compliance
              </span>
            </div>
          </div>

          <p
            style={{
              maxWidth: "550px",
              margin: 0,
              textAlign: "right",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Professional occupational safety courses, regulatory training,
            digital certification and corporate solutions.
          </p>
        </footer>
      </div>
    </main>
  );
}   
