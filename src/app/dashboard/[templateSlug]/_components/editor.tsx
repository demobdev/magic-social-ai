"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

export const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), {
      ssr: false,
      loading: () => <p>Loading editor...</p>
    }),
    []
  );

  return (
    <ReactQuill
      theme="snow"
      value={value}
      className="h-[350px] pb-10 bg-white whitespace-pre-wrap"
    ></ReactQuill>
  );
};
