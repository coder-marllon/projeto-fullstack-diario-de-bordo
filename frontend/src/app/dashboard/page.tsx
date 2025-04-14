import Sidebar from '../../components/Sidebar';
import React from 'react';


export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Diário de Bordo</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Total de Atividades</h2>
            <p className="mt-2 text-3xl font-bold text-indigo-600">120</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Atividades Pendentes</h2>
            <p className="mt-2 text-3xl font-bold text-red-500">15</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Atividades Concluídas</h2>
            <p className="mt-2 text-3xl font-bold text-green-500">105</p>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Progresso Semanal</h2>
          {/* Aqui vai o gráfico */}
        </div>
      </main>
    </div>
  );
}