import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import FormBuilder from "./components/FormBuilder";
import FormProvider from "./context/provider";
import Form from "./components/Form";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/build",
    element: <FormBuilder />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

function App() {
  return (
    <>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </>
  );
}

export default App;
