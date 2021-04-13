import React from 'react'

const Form = ({ inputText, setInputText, toDos, setToDos }) => {

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        const item = { name: inputText, completed: false, id: Math.random() * 1000 };
        const lst = toDos.concat(item);
        localStorage.setItem("lst", lst)
        setToDos(lst);
        console.log("lst parameter", lst)
    }

    const clearStorage = (e) =>{
        e.preventDefault();
        localStorage.clear()
    }

    return(
        <form>
            <input onChange = {inputTextHandler} placeholder = "Enter Task" type = "text" />
            <select size="5" multiple>
                <option value = "MusicTech">Music Tech</option>
                <option value = "Performancence">Performance</option>
                <option value = "MusicCreator">Music Creator</option>
                <option value = "FinancialFreedom">Financial Freedom</option>
                <option value = "Personal">Personal</option>
            </select>
            <button onClick = {submitToDoHandler} type = "submit">Submit</button>
            <button onClick = {clearStorage}>Clear Storage</button>
        </form>
    )
}

export default Form;