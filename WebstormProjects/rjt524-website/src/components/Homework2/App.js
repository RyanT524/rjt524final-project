import "./App.css"
//Changes to the style of the grid were made in the App.scss file, so I have submitted that file along with
//my App.js file. I was not sure if this file would be necessary as the assignment stated to only submit the
//App.js file, but my App.js would not properly function without importing the App.scss file and using the
// style provided. - Ryan Tabor

//Function to check prime
function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
function Block(props) {
    if(isPrime(props.num)) {
        return <div className={"grid-item-prime"}>{props.num} </div>
    }
    else if(props.num % 2 !== 0) {
        return <div className={"grid-item-odd"}>{props.num}</div>
    }
    else {
       return <div className={"grid-item-even"}>{props.num}</div>
    }
}

function Blocks(props) {
    const numbers = props.array
    return (
        <div className={"grid-container"}>
            {numbers.map((number) =>
                <Block key={number.toString()}
                       num={number} />
            )}
        </div>
    )

}
function Grid(props) {
    let gridArr = []
    for(let i = props.start; i <= props.end; i++ ) {
        gridArr.push(i)
    }
  return (
      <Blocks array={gridArr} />
  )
}

function Homework2() {
    return (
      <>
      <h1 className={"head1"}>Grid:</h1>
        <Grid start={1} end={79}/>
      </>
  );
}

export default Homework2;
