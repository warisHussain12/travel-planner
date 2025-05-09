import "./index.css";
import OnboardingCard from "./components/OnboardingCard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PageNotFound from "./components/PageNotFound.jsx";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OnboardingCard />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/landingPage",
      element: <LandingPage />,
      errorElement: <PageNotFound />,
    },
  ]);
  return (
    <ErrorBoundary fallback={<p>404! Something went wrong</p>}>
      <div className="font-poppins">
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
