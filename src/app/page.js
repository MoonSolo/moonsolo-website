export default function Home() {
  const tools = [
    { name: "Hash Generator", path: "/hash", desc: "Generate MD5, SHA-1, SHA-256 hashes" },
    { name: "File Converter", path: "/convert", desc: "Convert between common file formats" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-3">moonsolo</h1>
        <p className="text-gray-400 mb-12">a small collection of self-hosted tools</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.path}
              href={tool.path}
              className="border border-gray-800 rounded-xl p-6 text-left hover:border-gray-500 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
              <p className="text-sm text-gray-400">{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
