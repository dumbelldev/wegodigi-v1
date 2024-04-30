'use client';
import styles from '@/components/pages/homepage/homepage.module.css';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Opener() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="destructive"
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        Toggle
      </Button>
      {isOpen && (
        <>
          <div className="w-screen h-screen fixed top-0 left-0">
            <div className="animate-[scale-up-full_1500ms_ease-in-out_forwards] absolute w-[max(100vw,100vh)] h-[max(100vw,100vh)] bg-black origin-center"></div>
            <div
              className="animate-[scale-up-full_1500ms_ease-in-out_forwards] absolute w-[max(100vw,100vh)] h-[max(100vw,100vh)] bg-gray-900 origin-center"
              style={{ animationDelay: '300ms' }}
            ></div>
            <div
              className="animate-[scale-up-full_1500ms_ease-in-out_forwards] absolute w-[max(100vw,100vh)] h-[max(100vw,100vh)] bg-purple-900 origin-center"
              style={{ animationDelay: '600ms' }}
            ></div>
            <div
              className="animate-[scale-up-full_1500ms_ease-in-out_forwards] absolute w-[max(100vw,100vh)] h-[max(100vw,100vh)] bg-blue-900 origin-center"
              style={{ animationDelay: '900ms' }}
            ></div>
            <div
              className="animate-[scale-up-full_1500ms_ease-in-out_forwards] absolute w-[max(100vw,100vh)] h-[max(100vw,100vh)] bg-primary origin-center"
              style={{ animationDelay: '1200ms' }}
            ></div>
          </div>
        </>
      )}
    </>
  );
}
