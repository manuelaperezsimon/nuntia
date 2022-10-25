import { toast } from "react-toastify";

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

export const successModal = (error: string) =>
  toast.success(error, {
    position: toast.POSITION.TOP_CENTER,
  });
