import { useNavigate } from "react-router-dom";

export const Startpage = () => {
  const navigate = useNavigate()

  return(<div>Box för att fylla i nickname + knapp för att gå vidare
    <button onClick={() => {navigate('/rooms')}}>Fakeknapp för navigering</button>
  </div>)
}