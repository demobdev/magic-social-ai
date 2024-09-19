"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), {
      ssr: false,
      loading: () => <p>Loading editor...</p>
    }),
    []
  );

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['clean']
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      className="h-[350px] pb-10 bg-white whitespace-pre-wrap"
    ></ReactQuill>
  );
};
