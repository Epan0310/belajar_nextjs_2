import React from "react";

export default function page() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>
        Email:{" "}
        <a href="mailto:epanfaadillah@gmail.com" className="text-blue-500">
          epanfaadillah@gmail.com
        </a>
      </p>
      <p>
        Instagram:{" "}
        <a href="https://instagram.com/evanfaadillah" className="text-blue-500">
          @evanfaadillah
        </a>
      </p>
    </div>
  );
}
