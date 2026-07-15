import Link from "next/link";
import { notFound } from "next/navigation";

type Course = {
  code: string;
  slug: string;
  title: string;
  category: string;
  description: string;
};

const courseTitles = [
  "General Provisions and Occupational Risk Management",
  "Preliminary Inspection — Historical Standard",
  "Embargo and Interdiction",
  "Specialized Services in Occupational Safety and Medicine",
  "Internal Commission for Accident and Harassment Prevention",
  "Personal Protective Equipment",
  "Occupational Health Medical Control Program",
  "Buildings",
  "Assessment and Control of Occupational Exposure",
  "Safety in Electrical Installations and Services",
  "Transportation, Handling, Storage and Material Movement",
  "Safety at Work with Machinery and Equipment",
  "Boilers, Pressure Vessels, Piping and Metal Storage Tanks",
  "Industrial Furnaces",
  "Unhealthy Activities and Operations",
  "Hazardous Activities and Operations",
  "Ergonomics",
  "Occupational Safety and Health in the Construction Industry",
  "Explosives",
  "Safety and Health with Flammable and Combustible Materials",
  "Open-Air Work",
  "Occupational Safety and Health in Mining",
  "Fire Protection",
  "Sanitary and Comfort Conditions in Workplaces",
  "Industrial Waste",
  "Safety Signage",
  "Professional Registration of Occupational Safety Technicians — Historical",
  "Inspection and Penalties",
  "Occupational Safety and Health in Port Operations",
  "Occupational Safety and Health in Waterway Work",
  "Occupational Safety and Health in Agriculture, Livestock and Forestry",
  "Occupational Safety and Health in Healthcare Services",
  "Safety and Health in Confined Spaces",
  "Working Conditions in Shipbuilding, Repair and Dismantling",
  "Work at Height",
  "Safety and Health in Meat Processing Companies",
  "Safety and Health on Offshore Oil Platforms",
  "Safety and Health in Urban Cleaning and Solid Waste Management",
];

const courses: Course[] = courseTitles.map((title, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    code: `NR ${number}`,
    slug: `nr-${number}`,
    title,
    category: getCategory(index + 1),
    description:
      "Professional occupational safety training with recorded classes, live sessions, study materials, practical activities, assessments and digital certification.",
  };
});

function getCategory(number: number): string {
  const categories: Record<number, string> = {
    1: "Risk Management",
    2: "Historical Standard",
    3: "Inspection",
    4: "Occupational Health",
    5: "Accident Prevention",
    6: "Personal Protection",
    7: "Occupational Health",
    8: "Workplace Safety",
    9: "Occupational Exposure",
    10: "Electrical Safety",
    11: "Material Handling",
    12: "Machine Safety",
    13: "Pressure Equipment",
    14: "Industrial Safety",
    15: "Occupational Exposure",
    16: "High-Risk Activities",
    17: "Ergonomics",
    18: "Construction",
    19: "High-Risk Activities",
    20: "Fire and Chemical Safety",
    21: "Outdoor Work",
    22: "Mining",
    23: "Fire Safety",
    24: "Workplace Conditions",
    25: "Environmental Safety",
    26: "Safety Communication",
    27: "Historical Standard",
    28: "Inspection",
    29: "Port Operations",
    30: "Maritime Safety",
    31: "Rural Work",
    32: "Healthcare",
    33: "Confined Spaces",
    34: "Shipbuilding",
    35: "High-Risk Activities",
    36: "Food Industry",
    37: "Oil and Gas",
    38: "Urban Services",
  };

  return categories[number] ?? "Occupational Safety";
}

type CoursePageProps = {
  params: Promise<{
    courseCode: string;
  }>;
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { courseCode } = await params;

  const course = courses.find(
    (item) => item.slug === courseCode.toLowerCase(),
  );

  if (!course) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        color: "#ffffff",
        background:
          "linear-gradient(180deg, #020b16 0%, #071a2c 55%, #03111e 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "28px",
            fontWeight: 900,
          }}
        >
          PRV Training
        </Link>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/normativos"
            style={{
              padding: "12px 18px",
              border: "1px solid #258cff",
              borderRadius: "9px",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Training Catalog
          </Link>

          <Link
            href="/"
            style={{
              padding: "12px 18px",
              borderRadius: "9px",
              color: "#ffffff",
              background: "#087ef5",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Home
          </Link>
        </div>
      </header>

      <section
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "42px",
          border: "1px solid #1c4b73",
          borderRadius: "24px",
          background:
            "radial-gradient(circle at 80% 20%, rgba(0,126,255,.22), transparent 35%), linear-gradient(180deg, #09223a, #061522)",
          boxShadow: "0 28px 70px rgba(0,0,0,.35)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "10px 15px",
            borderRadius: "9px",
            background: "#0c80f2",
            fontSize: "18px",
            fontWeight: 900,
          }}
        >
          {course.code}
        </span>

        <p
          style={{
            margin: "25px 0 10px",
            color: "#32a8ff",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "3px",
          }}
        >
          {course.category.toUpperCase()}
        </p>

        <h1
          style={{
            maxWidth: "950px",
            margin: "12px 0 22px",
            fontSize: "clamp(38px, 6vw, 70px)",
            lineHeight: 1.08,
          }}
        >
          {course.title}
        </h1>

        <p
          style={{
            maxWidth: "900px",
            color: "#aebfd0",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          {course.description}
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            ["🎥", "Recorded Classes"],
            ["📡", "Live Classes"],
            ["🏢", "In-Person Training"],
            ["📚", "Study Materials"],
            ["✅", "Assessment"],
            ["🏆", "Digital Certificate"],
          ].map(([icon, title]) => (
            <article
              key={title}
              style={{
                minHeight: "130px",
                padding: "20px",
                border: "1px solid #1c4568",
                borderRadius: "14px",
                background: "#081b2c",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: "13px",
                  fontSize: "30px",
                }}
              >
                {icon}
              </span>

              <strong>{title}</strong>
            </article>
          ))}
        </div>

        <section
          style={{
            marginTop: "35px",
            padding: "28px",
            border: "1px solid #1b4569",
            borderRadius: "17px",
            background: "#071827",
          }}
        >
          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "28px",
            }}
          >
            Course Modules
          </h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {[
              "Course Introduction",
              "Regulatory Requirements",
              "Hazard Identification",
              "Risk Prevention and Control",
              "Safe Work Procedures",
              "Emergency Procedures",
              "Practical Activities",
              "Final Assessment",
              "Certificate Issuance",
            ].map((module, index) => (
              <div
                key={module}
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  border: "1px solid #183b59",
                  borderRadius: "10px",
                  background: "#0a2033",
                }}
              >
                <span
                  style={{
                    minWidth: "38px",
                    height: "38px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    background: "#0b75db",
                    fontWeight: 900,
                  }}
                >
                  {index + 1}
                </span>

                <strong>{module}</strong>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            style={{
              padding: "15px 24px",
              border: 0,
              borderRadius: "10px",
              color: "#ffffff",
              background: "#0b82f7",
              fontSize: "15px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Enroll in Course
          </button>

          <Link
            href={`/companies/request-training?course=${course.slug}`}
            style={{
              padding: "15px 24px",
              borderRadius: "10px",
              color: "#ffffff",
              background: "#167a43",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Request In-Person Training
          </Link>

          <Link
            href="/normativos"
            style={{
              padding: "15px 24px",
              border: "1px solid #277cc4",
              borderRadius: "10px",
              color: "#ffffff",
              background: "#071827",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Return to Catalog
          </Link>
        </div>
      </section>
    </main>
  );
}
