/** @format */

import React from "react";
import Home from "../page";

type Props = {};

export default function Page({ params }: { params: { page: string } }) {
  return (
    <div>
      {/* <p className="text-3xl capitalize">{params.page} </p> */}

      <Home currentPage={params.page} />
    </div>
  );
}
