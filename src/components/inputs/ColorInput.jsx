import { useDispatch } from "react-redux"
import { updateColorValue } from "../../features/gradient"

export default function ColorInput({id, color}) {
  const dispatch = useDispatch()

  return (
    <input 
    onChange={e => dispatch(updateColorValue({id, value: e.target.value, type: "color"}))}
    value={color}
    className="w-[60px] h-[60px] bg-transparent rounded-md cursor-pointer d-block [&:not(:last-child)]:mr-4"
    type="color" />
  )
}