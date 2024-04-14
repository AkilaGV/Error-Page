import react from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root=ReactDOM.createRoot(document.getElementById("root"))

function Error(){
  return( <div className="flex flex-row justify-center items-center h-[100vh]">
            <div className="container">
            <center>
            <h2 className="font-medium text-2xl p-2 "> 4☹️4 Error Page</h2>
      
      <p className="text-sm ">| Sorry The Page are not found | 
      
</p>
      <button className="bg-black text-white rounded-lg mt-3  p-3 text-sm " >GO Home <i class="fa-solid fa-house ml-1"></i></button>
      <button className="bg-black text-white rounded-lg mt-3  p-3 text-sm ml-3" >Explore  <i class="fa-solid fa-arrow-right ml-1"></i></button>     
            </center>
            

      
      
             </div>
          </div>
   
           
    
    
  )
}
root.render(
  <Error></Error>
)
