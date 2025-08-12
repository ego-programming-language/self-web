import { c, colors } from "@/theme"

export const Badge = ({ children, onClick, translucent, bg, style }: { onClick: () => void } & any) => {
  return <div
    onClick={onClick}
    style={{
      backgroundColor: translucent ? bg + "81" : bg,
      fontSize: c.sm.fontSize,
      borderColor: bg,
      ...style
    }}
    //onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = colors.background }}
    //onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.background; e.currentTarget.style.color = colors.primary }}
    className="px-4 py-[1px] border-[1px]
      transition-all ease-in-out duration-75 rounded-full"
  >{children}</div>
}
