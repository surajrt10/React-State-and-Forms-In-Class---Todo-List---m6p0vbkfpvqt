import React, {useState} from "react";
import "./../styles/App.css";
import List from "./List";

export default function App() {
const [text, settext] = useState("");
const [list, setlist] = useState([])

const changeHandler =(e) =>{
	settext(e.target.value);
}

const addTodo = () =>{
   let nlist= list;
   nlist.push(text);
   setlist([...nlist]);
   settext("")
}
const editTodo = (e, index, text) =>{
	let nlist=list;
	nlist[index] = text;
	setlist([...nlist]);
}

const deleteTodo = (index) =>{
		console.log(index);
		let nlist = list;
		nlist.splice(index,1);
		setlist([...nlist]);
}
	return (
	<div id="main">
	<textarea id="task" value={text} onChange={changeHandler}/>
	<button id="btn" onClick={addTodo}>ADD</button>
	<ul>
		{list.map((each,index) =>{
			return (
				<List
				editTodo={editTodo}
				text={each}
				deleteTodo={deleteTodo}
				index={index}
				/>
			);

		})}

	</ul>
	</div>
	);
}