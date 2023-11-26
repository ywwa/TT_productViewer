import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageProduct from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/:id",
    element: <PageProduct/>
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


/* I prefer dark theme please dont judge me */

/**  	Compelled against my will, I plunged into the blinding abyss of 
 *		light-themed websites and software. The allure of gentle whites 
 *		masked the malevolent brilliance that awaited me. Each click felt 
 *		like a step deeper into a digital purgatory, an unwelcome journey 
 *		forced upon me. The luminosity seared my eyes, etching discomfort 
 *		into my psyche. That night, sleep was a fleeting luxury, replaced 
 *		by nightmares woven from glaring screens and haunting interfaces. 
 *		The week that followed unfolded like a doomed odyssey, each 
 *		moment haunted by the spectral glow of compelled exposure. In the 
 *		pursuit of simplicity, I stumbled into a realm of relentless, 
 *		blinding complexity, coerced by circumstances beyond my control. */
