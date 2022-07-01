import "./index.scss"
import pic1 from "./hw1.PNG"
import pic2 from "./hw1(2).PNG"
const Homework1 = () => {
  return (
    <div>
      <h1 className={"head1"}>On Page load</h1>
      <h2 className={"head2"}>After loading</h2>
      <img src={pic1} className={"hw1img"} align={"middle"} width={"500"} height={"300"}/>
      <img src={pic2} className={"hw1img2"} align={"middle"} width={"500"} height={"300"} />
    </div>
  )
}
export default Homework1;