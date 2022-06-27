import ReactDOM from 'react-dom';
import './App.css';

function hex(){

/*const buttonStyles = {
    fontSize: '1.5rem',
    padding: '10px 20px',
    background: 'rgb(0, 255, 0',
    border: 'none',
    borderRadius: 5,
    color: 'white'
}
*/
//const Button = () => <button style={buttonStyles}> TESTING </button>



// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const rootElement = document.getElementById('root')

ReactDOM.render(<HexaColor />, rootElement)

const button = document.getElementById('button')
button.addEventListener('click', () => {
    const hexa = document.getElementById('hexa')
    hexa.innerHTML = hexaColor()
})

const hexColors = '#'+Math.floor(Math.random()*16777215).toString(16);

const Hexa = () => 

<div class ='hexbtn'>
    {hexColors}
</div>

return (
    <div style ={{backgroundColor:hexaColor}} className = 'container2'>
        <Hexa />
    </div>
)


}


export default hex;