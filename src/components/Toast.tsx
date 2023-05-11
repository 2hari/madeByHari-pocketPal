import { Transition } from "@headlessui/react"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { toast, Toast } from "react-hot-toast"

import Loader from "./Skeleton"
import { toastMessages, defaulToasttDuration } from "@/utils/constants"

export const showToast = (message: string, duration = defaulToasttDuration) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } font-default inline-flex max-w-md rounded-md bg-white p-2 px-3 text-[0.8125rem] font-semibold leading-5 text-zinc-800 shadow-md`}
      >
        <div className="flex items-center">
          <Transition
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 rotate-[45deg] scale-0"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-100 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <InfoOutlinedIcon
              sx={{
                color: "blue-500",
                fontSize: 20,
              }}
            />
          </Transition>
          <span className="text-zinc-900">{message}</span>
        </div>
      </div>
    ),
    { duration }
  )
}

export const showSuccessToast = (
  message: string,
  duration = defaulToasttDuration
) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } font-default inline-flex max-w-md rounded-md bg-green-50 p-2 px-3 text-[0.8125rem] font-semibold leading-5 text-zinc-800 shadow-md`}
      >
        <div className="flex items-center">
          <Transition
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 rotate-[45deg] scale-0"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-100 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <CheckCircleOutlineOutlinedIcon
              sx={{
                color: "green-500",
                fontSize: 20,
              }}
            />
          </Transition>
          <span className="text-green-900">{message}</span>
        </div>
      </div>
    ),
    { duration }
  )
}

export const showErrorToast = (
  message = toastMessages.error,
  duration = 3000
) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } font-default inline-flex max-w-md rounded-lg bg-red-50 p-2 px-3 text-[0.8125rem] font-semibold leading-5 text-zinc-800 shadow-md`}
      >
        <div className="flex items-center">
          <Transition
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 rotate-[45deg] scale-0"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-100 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <CancelOutlinedIcon
              sx={{
                color: "red-500",
                fontSize: 20,
              }}
            />
          </Transition>
          <span className="text-red-900">{message}</span>
        </div>
      </div>
    ),
    { duration }
  )
}

export const showWarningToast = (message: string, duration = 3000) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } font-default inline-flex max-w-md rounded-md bg-orange-50 p-2 px-3 text-[0.8125rem] font-semibold leading-5 text-zinc-800 shadow-md`}
      >
        <div className="flex items-center">
          <Transition
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 rotate-[45deg] scale-0"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-100 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <ErrorOutlineOutlinedIcon
              sx={{
                color: "orange-500",
                fontSize: 20,
              }}
            />
          </Transition>
          <span className="text-orange-900">{message}</span>
        </div>
      </div>
    ),
    { duration }
  )
}

export const showToastLoading = (duration = defaulToasttDuration) => {
  return toast.custom(
    (t: Toast) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } font-default inline-flex max-w-md rounded-md bg-white p-2 px-3 text-[0.8125rem] font-semibold leading-5 text-zinc-800 shadow-md`}
      >
        <div className="flex items-center">
          <Loader color="black" className="mr-2 h-5 w-5" />
          <span>{toastMessages.loading}</span>
        </div>
      </div>
    ),
    { duration }
  )
}
