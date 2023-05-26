// import { useState } from 'react'
import browserRouters from "./routers/routers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(browserRouters);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
