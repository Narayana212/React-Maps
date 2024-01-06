"use client";
import React, { useState, lazy, Suspense } from "react";

import SimpleMap from "../app/components/simple-map";
import dynamic from "next/dynamic";

// Use React.lazy to dynamically import PinMap



const PinMap = dynamic(() => import("../app/components/pin-map"), {
  loading: () => <p>loading...</p>,
  ssr: false
})
const Map = () => {
  return (
    <div className="mx-auto w-full overflow-x-hidden mt-3  max-w-screen-xl px-2.5 md:px-20 ">
      <div className="border-2 ">
        <h1 className="text-xl font-bold mb-3">Custom POI</h1>
        {/* Use Suspense to handle the loading of the dynamically imported component */}
        <Suspense fallback={<div>Loading...</div>}>
          <PinMap />
        </Suspense>
      </div>
      <SimpleMap />
    </div>
  );
};

export default Map;
