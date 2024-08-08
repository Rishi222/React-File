 function handlerFormSubmit(event){
    event.preventDefault();
    console.log("Submit Success");
 }
 
 
 export default function Form(){
    return(
        <form onSubmit={handlerFormSubmit}>
            <input type="text" placeholder="Enter Something"/>
            <button>Submit</button>
        </form>
    )
 }