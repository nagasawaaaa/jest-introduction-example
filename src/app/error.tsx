'use client';

import { useEffect } from 'react';
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>エラーが発生しました。ホーム画面にお戻りください。</h2>
      <div>
        <Link className="underline hover:no-underline" href="/">Go to
          Home</Link>
      </div>
    </div>
  );
}
