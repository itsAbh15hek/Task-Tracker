const Button = ({onClick,bgColor,text}) => {

  
  return (
    <div>
      <button onClick={onClick} className="btn" style={{backgroundColor:bgColor}}>{text}</button> 
    </div>
  )
}

export default Button
