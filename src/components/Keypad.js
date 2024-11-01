// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input onChange = {() => {console.log('Entering password...')}} />
        </div>
    )
}

export default Keypad;