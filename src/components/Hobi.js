export function Hobi () {

const onHover = () => {
    console.log ("Let's play");

}

const onLeave = () => {
    console.log ("Go for it");

}

return (
    <div className = "My hobby"> 

      <img src=" https://static.independent.co.uk/2023/09/12/20/GettyImages-1676632610.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp"
      className="fudbal"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    ></img>
    </div>
)

}