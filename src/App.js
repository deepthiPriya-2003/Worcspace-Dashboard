import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import KnowledgeBase from "./pages/knowledgeBase"; 
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      
      <Header />

      <div className="flex flex-1">
        
         <Sidebar />

        <div className="flex-1 bg-gray-50 overflow-y-auto">
          <Routes>
            <Route path="/" element={<KnowledgeBase />} />
            
            <Route path="/agents" element={<div className="font-bold m-2">Agents</div>} />
            <Route path="/models" element={<div className="font-bold m-2">Models</div>} />
            <Route path="/library" element={<div className="font-bold m-2">Library</div>} />
            <Route path="/published" element={<div className="font-bold m-2">Published</div>} />
            <Route path="/machines" element={<div className="font-bold m-2">Machines</div>} />
            <Route path="/queues" element={<div className="font-bold m-2">Queues</div>} />
            <Route path="/triggers" element={<div className="font-bold m-2">Triggers</div>} />
            <Route path="/jobs" element={<div className="font-bold m-2">Jobs</div>} />
            <Route path="/executions" element={<div className="font-bold m-2">Executions</div>} />
            <Route path="/vault" element={<div className="font-bold m-2">Vault</div>} />
            <Route path="/keystore" element={<div className="font-bold m-2">Key Store</div>} />
            <Route path="/tenant" element={<div className="font-bold m-2">Tenant</div>} />
          </Routes>

        </div>

      </div>
    </div>
  );
};

export default App; 


