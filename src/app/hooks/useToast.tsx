import { Bounce, toast, ToastOptions } from "react-toastify"

export function useToast() {
    
    const config: ToastOptions  = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    }

    const ToastSuccess = (message: string) => {
        toast.success(message , config)
    }

    const ToastError = (message: string) => {
        toast.error(message , config)
    }

    const ToastInfo = (message: string) => {
        toast.info(message , config)
    }

    const ToastWarning = (message: string) => {
        toast.warning(message , config)
    }

    return {
        ToastWarning,
        ToastInfo,
        ToastError,
        ToastSuccess
    }
}