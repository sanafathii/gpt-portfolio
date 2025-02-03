import ContactForm from "@/components/ContactForm";
import socialLinks from "@/data/socialLinks";

export default function Contact() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <div className="max-w-2xl mx-auto">
        <ContactForm />

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
