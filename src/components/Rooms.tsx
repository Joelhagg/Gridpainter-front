import { useNavigate } from "react-router-dom";

export const Rooms = () => {
  const navigate = useNavigate()
  return(<div>
    Lista över rum man kan joina
    <div>
      Ett rum
      <button onClick={() => {navigate('/room')}}>Fakeknapp joina rum</button>
    </div>
  </div>
  )
}