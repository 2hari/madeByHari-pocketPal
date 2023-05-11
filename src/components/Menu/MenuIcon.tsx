import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"

export default function MenuIcon({ onShow }: { onShow: () => void }) {
  return (
    <button
      onClick={onShow}
      className="absolute top-[12px] left-[12px] h-[44px] w-[44px] items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-zinc-300 focus:outline-none focus:ring-gray-100 xs:inline-flex sm:inline-flex md:inline-flex"
    >
      <MenuOutlinedIcon
        sx={{
          color: "black",
          fontSize: 24,
        }}
      />
    </button>
  )
}
