export function HomePage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome to Codex
        </h2>
        <p className="text-gray-600">
          Your React + TypeScript + Tailwind CSS project is ready.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Components</h3>
          <p className="text-sm text-gray-600">
            Reusable UI components in src/components/
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Pages</h3>
          <p className="text-sm text-gray-600">Route pages in src/pages/</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Hooks</h3>
          <p className="text-sm text-gray-600">Custom hooks in src/hooks/</p>
        </div>
          </div>
    </div>
  );
}
