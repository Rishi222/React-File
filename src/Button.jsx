// function printhello(){
//     console.log("Button was clicked");
// }

// function clickpara(){
//     console.log("Paragraph was clicked");
// }

// function overthepara(){
//     console.log("Mouse Over the para");
// }

function handleclick(event){
    console.log("Some thing is clicked.");
    console.log(event);
}

function handlehover(){
    console.log("Some this is over my paragraph");
}

function handledoubleclick(){
    console.log("Someone double clicked my button");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleclick}>Click Me!</button>
            <button onDoubleClick={handledoubleclick}>Double Click Me!</button>
            <p onClick={handleclick}>This is a paragraph.</p>
            <p onMouseOver={handlehover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in provident ipsa, nobis voluptate laudantium officia fugiat tempore, aspernatur, aliquam corporis veritatis quibusdam! Ex autem tempore debitis nam doloribus fugiat.</p>
        </div>
    );
}