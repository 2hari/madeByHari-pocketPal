import Image from "next/image"

export default function Logo({ theme = "dark", w = 28, h = 28 }) {
  return (
    <>
      <Image
        src="/images/Logo.svg"
        className="mr-2"
        width={w}
        height={h}
        alt="Expense.fyi"
      />
      <span className="font-default font-black tracking-[-0.02em]">
        Pocketpal
      </span>
    </>
  )
}
