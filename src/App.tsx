import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
