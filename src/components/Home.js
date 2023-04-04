import Navbar from "./sidebar/navbar/Navbar";
import Todos from "./todos/Todos";
import TaskDetailsPanel from "./sidebar/taskdetails/TaskDetailsPanel";
import DeleteModel from "./deletemodel/DeleteModel";
import AddTodo from "./todos/addtodo/AddTodo";
import EditTodo from "./todos/edittodo/EditTodo";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Todos/>
            <TaskDetailsPanel/>
            {/* <DeleteModel/> */}
            {/* <AddTodo/> */}
            {/* <EditTodo/> */}
        </>
    )
}

export default Home;