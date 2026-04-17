const sections = ["STATES", "EVENTS", "INTERACTION", "START"];

export default function Nav() {
  return (
    <div className="w-full h-10 flex justify-between px-12 py-2">
      <p className="text-black text-xl font-semibold">blup ♦ blup</p>

      <ul className="flex gap-4">
        {sections.map((item, index) => (
          <li
            key={index}
            className="rounded-full flex items-center justify-center px-4 bg-gray-600"
          >
            <p className="text-black">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
