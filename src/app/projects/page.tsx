export default function Projects() {
  const projectList = [
    { name: "Portfolio Website", desc: "Built with HTML, CSS, and JavaScript" },
    { name: "UI Design Concept", desc: "Created with Figma" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-4">
        {projectList.map((p, i) => (
          <li key={i} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
