export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Temukan peluang franchise, mitra, dan bagi hasil di Indonesia
        </h1>
        <p className="text-lg mb-8">
          BizRing menghubungkan pemilik bisnis dengan investor dan mitra yang tepat.
        </p>
        <div className="space-x-4">
          <a
            href="/marketplace"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 inline-block"
          >
            Cari Bisnis Kerjasama
          </a>
          <a
            href="/onboarding/business"
            className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 inline-block"
          >
            Ajukan Bisnis Anda
          </a>
        </div>
      </section>
    </div>
  );
}