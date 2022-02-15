import React, {useState} from 'react'

function List(props) {
    const [edit, setedit] = useState(false)
    const [text, settext] = useState(props.text);

    const savetask =(e) =>{
        props.editTodo(e, props.index,text);
        setedit(false)
    }
  return (
    <li>
        {edit ? (<>
            <textarea className='editTast' value={text} onChange={(e) => settext(e.target.value)}/>
            <button className='saveTask' onClick={savetask}>SAVE</button>  
            </>):(props.text)}
                <button onClick={() => props.deleteTodo(props.Listindex)}>DELETE</button>
                <button onClick={() => setedit(true)}>EDIT</button>
    </li>
  )
}

export default List