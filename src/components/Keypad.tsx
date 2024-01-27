import { BiUpArrowAlt } from 'react-icons/bi'
export const Keypad = () => {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-blur py-3 rounded-3xl">Call 20</div>
        <div className="text-center bg-blur py-3 rounded-3xl">Raise 48</div>
      </div>
      <div className="absolute -bottom-1 bg-black rounded-full p-2 right-[50%] translate-x-[50%]">
        <div className="bg-green text-black rounded-full w-10 h-10 p-3 mx-auto border-black">
          <BiUpArrowAlt />
        </div>
      </div>
    </div>
  )
}
