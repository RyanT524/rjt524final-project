import "./index.scss"
import pic1 from "./hw1.PNG"
import pic2 from "./hw1(2).PNG"
const Homework1 = () => {
  return (
    <div className={"hw1margin"}>
      <div>
      <h1 className={"head1"}>On Page Load and After Loading</h1>
      </div>
      {/*<div className={"column"}>*/}
      {/*<img src={pic1} width={"500"} height={"300"}/>*/}
      {/*</div>*/}
      {/*<div className={"column"}>*/}
      {/*<img src={pic2} width={"500"} height={"300"} />*/}
      {/*</div>*/}
      <div className={"row"}>
        <div className={"column"}>
          <img src={pic1} className={"pics"}/>
        </div>
        <div className={"column"}>
          <img src={pic2} className={"pics"}/>
        </div>
      </div>
    </div>
  )
}
export default Homework1;