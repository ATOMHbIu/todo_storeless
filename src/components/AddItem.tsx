import React, {FC, useState} from 'react';
import {IToDoListItem} from "./Todo";

interface IAddData{
    cb: (arg:IToDoListItem)=>void;
}

const AddItem:FC<IAddData> = ({cb}) => {

    const [title, setTitle] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const addData = ()=>{
        cb({
            id: Date.now(),
            title: title,
            name: name,
            description: description,
            finished: false
        })
    }
    return (
        <div>
            <div className="creating_item">
                <label htmlFor="title">Заголовок:</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} name="title"/>
            </div>
            <div className="creating_item">
                <label htmlFor="name">Название задачи:</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="creating_item">
                <label htmlFor="description">Описание задачи:</label>
                <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <button onClick={()=>addData()}>Добавить</button>
        </div>
    );
};

export default AddItem;