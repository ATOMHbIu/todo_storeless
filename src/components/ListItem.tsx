import {IToDoListItem} from "./Todo";

interface IItem extends IToDoListItem{
    finishCB: ()=>void;
    deleteCB: ()=>void;
}

const ListItem = ({...props}:IItem)=>{
    return (
        <div className="list_item" style={props.finished ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
            <div className="name"> {props.name}</div>
            <div className="title"> {props.title}</div>
            <div className="description">{props?.description}</div>
            <button className="button finish" onClick={()=>props.finishCB()}>{props.finished?"Не сделано":"Готово"}</button>
            <button className="button finish" onClick={()=>props.deleteCB()}>Удалить</button>
        </div>
    )
}

export default ListItem;