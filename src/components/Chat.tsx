interface ICloseProps{
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Chat = (Props: ICloseProps) => {
  return(<div>
    Woooo chatten öppnades
    <button onClick={Props.closeClick}>Stäng</button>
  </div>
  )
}