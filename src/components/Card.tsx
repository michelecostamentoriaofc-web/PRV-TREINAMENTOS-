type CardProps = {
  title: string;
  value: string;
};

export function Card({ title, value }: CardProps) {
  return (
    <div style={{ padding: 20, borderRadius: 16, background: "#0f1f36" }}>
      <h3>{title}</h3>
      <strong>{value}</strong>
    </div>
  );
}
