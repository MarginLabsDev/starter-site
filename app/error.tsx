'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)' }}>Something went wrong.</h2>
      <button onClick={reset} style={{ marginTop: '1rem', cursor: 'pointer' }}>
        Try again
      </button>
    </main>
  )
}
