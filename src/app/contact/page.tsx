export default function ContactPage() {
  return (
    <main>
      <h1>Contact PRV Training</h1>
      <p>Talk to our team about courses, companies, live classes and in-person training.</p>

      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Company" />
        <textarea placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
