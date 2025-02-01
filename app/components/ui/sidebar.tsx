export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <a
              href="/dashboard"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a href="/settings" className="block p-2 hover:bg-gray-700 rounded">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
