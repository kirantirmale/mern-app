import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
    });
};

export const handleError = (msg) => {
    toast.error(msg, {  // Change this to toast.error for error messages
        position: 'top-right',
    });
};
