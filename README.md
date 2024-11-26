# Infinite Scroll  - Vite + React + Typescript + TailwindCSS

## Description

This project is a React application built with Vite, TypeScript, and TailwindCSS. It implements infinite scrolling to display data fetched from two different URLs.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository: `git clone https://github.com/GabrielRegato/infinite-scroll.git`
2. Navigate to the project directory:
```bash
cd infinite-scroll
```
3. Install dependencies: `npm install`
```bash
npm install
```
4. Run the application: `npm run dev`
```bash
npm run dev
```

### Development Server

Run `npm run dev` to start the development server. 

```bash
npm run dev
```

Navigate to `http://localhost:5173/` to access the app.

### Build and Deployment

To build the application for production, run the following command:

```bash
npm run build
```

This command generates an optimized production build of your app in the dist folder. Vite bundles your React application efficiently, ensuring that it runs in production mode with optimal performance.

## How to Use

### Basic Usage

This example demonstrates the basic setup for using Infinite Scroll in a React component.

```javascript
import React, { useState, useEffect } from "react";
import InfiniteScroll from "./InfiniteScroll";
import { useCustomizedDataHook } from "./hooks/useCustomizedDataHook";
import Item from "./Item";
import LoadingSkeleton from "./LoadingSkeleton";

const MyComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [facts, setFacts] = useState<string[]>([]);
  const { data, isLoading, isError } = useCustomizedDataHook(page);

  const loadMore = () => {
    if (data && page < data.last_page) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (data?.records) {
      setFacts((prev) => [...prev, ...data.records]);
    }
  }, [data]);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <div>Error fetching data.</div>;

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={page < data.last_page}>
      <div>
        {data.map((record, index) => (
          <Item key={index} data={record} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MyComponent;
```



## Features

- Infinite scrolling functionality to load more data as the user scrolls down.
- Fetches and displays data from two different APIs.
- Built with modern web technologies for optimal performance.

## Technologies Used

- **Vite**: A fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **TailwindCSS**: A utility-first CSS framework for styling.


## Disclaimer

This repository is provided "as is" and without warranty of any kind. Use it at your own risk. While we hope this repository serves as a helpful starting point for implementing infinite scroll functionality in your React applications, you are responsible for modifying and adapting the code to meet your specific requirements.

You may enhance, modify, or change the Infinite Scroll component, data-fetching logic, and related templates as necessary. However, please be aware that we do not guarantee the accuracy, completeness, or reliability of the code provided. It is your responsibility to ensure that the implementation meets your needs and adheres to best practices.

By using this repository, you acknowledge that you understand these terms and agree to assume all risks associated with its use.

Infinite Scroll - Gabriel A.R.
