import services from "@/data/services";

export default function Services() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
