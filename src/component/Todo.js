import React, { useEffect, useState } from 'react'

const getData = () => {
	const list = localStorage.getItem('lists')

	if (list){
		return JSON.parse(localStorage.getItem('lists'));
	} else {
		return [];
	}

}

const Todo = () => {
	const [input,setInput] = useState("");
	const [data,setData]= useState(getData());

	const addData = () => {
		if(!input){

		} else {
		setData([...data,input])
		setInput("")
		}
	}
	const onDelete = (id) => {
		const Deleted = data.filter((elem,indc) => {
			return indc !== id
		});
		setData(Deleted)
	}
	useEffect(() => {
		localStorage.setItem('lists',JSON.stringify(data))
	},[data])
	return (
		<>
		<h1>To do Lists</h1>
		<input type="text" id='todo' value={input} onChange={(e) => setInput(e.target.value)} />
		<button onClick={addData}>Add</button>
		<ol>
			{
				data.map((elem,indc) => {
					return (
						<li key={indc}> <h3> {elem} <button onClick={() => onDelete(indc)}>Delete</button> </h3></li>
					)
				})
			}
		</ol>
		</>
	)
}

export default Todo