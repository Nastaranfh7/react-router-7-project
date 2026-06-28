import { useLoaderData } from "react-router-dom";

export default function Settings() {
  const settings = useLoaderData(); // 🔥 داده از Loader میاد

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white shadow p-4 rounded space-y-3">
        <p>
          <strong>Username:</strong> {settings.username}
        </p>
        <p>
          <strong>Theme:</strong> {settings.theme}
        </p>
        <p>
          <strong>Notifications:</strong>{" "}
          {settings.notifications ? "On" : "Off"}
        </p>
      </div>
    </div>
  );
}
