import { useRef, useState } from "react";

const ToDo = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const ref = useRef(null);

    const addItem = () => {
        if (item.trim() === '') return;
        setList([...list, { description: item, completed: false }]);
        ref.current.value = '';
    };

    const removeItem = (index) => {
        alert(`You want to remove ${index} No. item from the list?`);
        list.splice(index, 1);
        setList([...list])
    };

    const handleCompleteTask = (index) => {
        const updatedList = [...list];
        updatedList[index].completed = !updatedList[index].completed;
        setList(updatedList);
    };
    return (
        <div>
            <div className='text-center my-5'>
                <table>
                    <tbody>
                        {list.length !== 0 ? (
                            list.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <span style={{ textDecoration: element.completed ? 'line-through' : 'none' }}>
                                                {element.description}
                                            </span>
                                        </td>
                                        <td>
                                            <button onClick={() => handleCompleteTask(index)}>
                                                {element.completed ? 'Undo' : 'Complete'}
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => removeItem(index)}>Remove Task</button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td>No tasks yet!</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <input ref={ref} onChange={(e) => setItem(e.target.value)} type='text' />
                <button onClick={addItem}>Add Task</button>
            </div>
        </div>
    );
};

export default ToDo;