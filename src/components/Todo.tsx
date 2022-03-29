import {useState} from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

export interface IToDoListItem{
    id: number;
    name: string;
    title: string;
    description?: string;
    finished: boolean;
}

interface IListItems{
    items: IToDoListItem[]
}

const TodoList=(items:IListItems)=>{
    const [listItems, setList] = useState<IToDoListItem[]>(items.items);

    const finishTask=(i: number)=>{
        const changed = listItems.slice(); //copying current array;
        changed[i].finished=!changed[i].finished;
        setList(changed);
    }

    const deleteItem = (id: number)=>{
        const updated = listItems.filter(e=>e.id!==id)
        setList(updated)
    }

    const addData=(newItem: IToDoListItem)=>{
        setList([...listItems, newItem])
    }

    return(
        <>
            <div className="todo_list">
                {listItems.length>0&&
                    listItems.map((e, i)=> (
                        <ListItem key={e.id} {...e} finishCB={()=>finishTask(i)} deleteCB={()=>deleteItem(e.id)}/>
                    ))
                }
                <div className="add_item">
                    <AddItem cb={addData}/>
                </div>
            </div>

        </>
    )
}

export default TodoList;