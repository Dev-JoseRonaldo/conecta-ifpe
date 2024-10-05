import React from "react"

const LoadingSpinner = () => {
  return (
    <div data-testid="loading-container" className="flex h-screen items-center justify-center bg-white">
      <div className="size-32 animate-spin rounded-full border-t-4 border-primary-medium"></div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner
