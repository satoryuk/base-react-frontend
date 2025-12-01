import "./App.css";
import RootContainer from "./layouts/root-container";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
