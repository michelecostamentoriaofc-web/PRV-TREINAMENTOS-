import { navigationItems } from "@/config/navigation";

export function Sidebar() {
  return (
    <aside>
      <h2>PRV Training</h2>

      <nav>
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
