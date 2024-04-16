import Navbar from "./compnents/navbar/Navbar";
import Table from "./compnents/table/Table";
import "./app.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {path: '/',
  element:<Navbar />,
    children:[
      {index:true, element:<Table />},
    ]}
  ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
