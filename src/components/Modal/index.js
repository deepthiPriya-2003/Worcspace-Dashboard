const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      <div className="ml-auto w-[450px] h-full bg-white shadow-lg p-6 relative z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Create New Knowledge Base</h2>

          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              Name (cannot be edited later){" "}
              <span className="text-red-500">*</span>
            </label>
            <p className="text-sm mb-2">
              Best for quick answers from documents, websites and text files.
            </p>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              placeholder="Description"
              className="w-full mt-1 px-3 py-2 border rounded-lg h-24"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 px-3 py-2 text-[grey] border rounded-lg">
              <option>Qdrant</option>
              <option>qdrant</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 px-3 py-2 text-[grey] border rounded-lg">
              <option>text-embedding-ada-002</option>
              <option>text-embedding-ada-003</option>
            </select>
          </div>
        </div>

        <div className="absolute bottom-6 flex justify-center w-[450px]">
          <button
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            onClick={onClose}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
