import * as React from "react"
import { Toast } from "@/components/ui/toast"

type ToastType = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toast, setToast] = React.useState<ToastType | null>(null)

  const showToast = (toast: ToastType) => {
    setToast(toast)
    setTimeout(() => setToast(null), 3000)
  }

  const ToastComponent = () => (
    <>
      {toast && (
        <div className="fixed top-4 right-4 z-50">
          <Toast {...toast} />
        </div>
      )}
    </>
  )

  return { showToast, Toast: ToastComponent }
}
