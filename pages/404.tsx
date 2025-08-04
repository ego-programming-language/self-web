import { useSize } from "@/components/hooks/useSize"

export default function Root() {
  const size = useSize()
  const sizes = {
    "s": 0.3,
    "m": 0.6,
    "l": 1,
  }

  return <div className="h-screen w-screen flex  flex-col">
    <main className="fixed h-screen w-screen flex flex-col justify-center items-center z-0 gap-3">
      <a href="/">
        <p className="font-extralight hover:underline cursor-pointer text-center"
          style={{
            color: "#0a0a0a"
          }}>404 <br />not found</p>
      </a>
    </main >
  </div >
}