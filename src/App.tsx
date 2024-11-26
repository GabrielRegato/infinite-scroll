import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatFacts from "./CatFacts";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cat Facts</h1>
        <CatFacts />
      </div>
    </QueryClientProvider>
  );
};

export default App;
