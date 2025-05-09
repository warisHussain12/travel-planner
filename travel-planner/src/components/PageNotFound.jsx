import React from "react";

const PageNotFound = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl text-red font-bold">404</h1>
        <p className="text-2xl font-bold">PageNotFound</p>
      </div>
    </div>
  );
};

export default PageNotFound;
