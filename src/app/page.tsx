"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const BookPage = () => {
  const { data } = useQuery({
    queryKey: ["book"],
    queryFn: async () => Promise.resolve("The Great Gatsby"),
  });

  return (
    <div>
      <header>
        <h1>
          <span>Query Library</span>
        </h1>
      </header>
      <main>
        <h1>Query 1: {data}</h1>
      </main>
    </div>
  );
};

export default BookPage;
