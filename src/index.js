import react from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root=ReactDOM.createRoot(document.getElementById("root"))

function Error(){
  return(<div >
    <div className='text-white container'>
      <h1 className="font-medium text-2xl "> 404 Error Page</h1>
      
      <p>| Sorry The Page are not found |
      <i class="fa-light fa-star"></i></p>
      <button className="text-white ">GO Home </button>

      
      
    </div>
    </div>
    
  )
}
root.render(
  <Error></Error>
)
