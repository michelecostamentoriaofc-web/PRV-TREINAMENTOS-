import { dashboardNavigation } from "@/config/dashboard-navigation";

export function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        padding: 24,
        background: "#020817",
        borderRight: "1px solid #1e3a5f",
      }}
    >
      <h2>PRV Training</h2>

      <nav style={{ display: "grid", gap: 12 }}>
        {dashboardNavigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
