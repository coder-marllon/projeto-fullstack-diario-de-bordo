import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10 text-indigo-600">Diário de Bordo</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">
          Dashboard
        </Link>
        <Link href="/atividades" className="text-gray-700 hover:text-indigo-600 font-medium">
          Atividades
        </Link>
        <Link href="/perfil" className="text-gray-700 hover:text-indigo-600 font-medium">
          Perfil
        </Link>
      </nav>
    </aside>
  );
}
