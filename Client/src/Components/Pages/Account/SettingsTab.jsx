import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";
import { useNavigate } from "react-router-dom";


export default function SettingsTab() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleClearHistory = async () => {
    try {
      const response = await fetch("/api/results/ClearUserResults", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert("Your quiz result history has been cleared.");
      } else {
        alert("Failed to clear history: " + (data.error || data.message));
      }
    } catch (error) {
      console.error("Error while clearing history:", error);
      alert("An error occurred while clearing your history.");
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <button
          onClick={handleClearHistory}
          className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
        >
          <h4 className="font-medium text-gray-900 dark:text-white">Clear Result History</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Delete all your past quiz results and statistics
          </p>
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-800 transition-colors"
        >
          <h4 className="font-medium text-yellow-900 dark:text-yellow-200">Logout</h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Sign out of your account and clear session
          </p>
        </button>

        <button
          onClick={() => setShowDeleteModal(true)}
          className="w-full text-left p-4 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition-colors"
        >
          <h4 className="font-medium text-red-900 dark:text-red-200">Delete Account</h4>
          <p className="text-sm text-red-600 dark:text-red-300">
            Permanently remove your account and all data
          </p>
        </button>

        <DeleteAccountModal
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
        />
      </div>
    </div>
  );
}
