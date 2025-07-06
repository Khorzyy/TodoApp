import React, { Component } from "react";
import {
    addTask,
    getTask,
    updateTask,
    deleteTask
} from './services/taskServices';

class Tasks extends Component {
    state = { tasks :[], currentTask: ""}
    state = {
        tasks: [],
        currentTask: "",
        // ⬇️ untuk modal
        editingTask: null,          // objek task yang sedang diedit
        editedValue: "",            // nilai textfield dalam modal
        isEditOpen: false
    };

    openEditModal = (task) => {
        this.setState({
        editingTask: task,
        editedValue: task.task,
        isEditOpen: true,
        });
    };

    closeEditModal = () => {
        this.setState({ isEditOpen: false, editingTask: null, editedValue: "" });
    };

    handleEditChange = ({ target: { value } }) => {
        this.setState({ editedValue: value });
    };

    saveEdit = async () => {
        const { editingTask, editedValue, tasks } = this.state;
        if (!editingTask) return;

        const originalTasks = [...tasks];
        try {
        const idx = tasks.findIndex((t) => t._id === editingTask._id);
        tasks[idx] = { ...tasks[idx], task: editedValue };
        this.setState({ tasks, isEditOpen: false });

        await updateTask(editingTask._id, { task: editedValue });
        } catch (err) {
        this.setState({ tasks: originalTasks });
        console.log(err);
        }
    };

    async componentDidMount() {
        try {
            const {data} = await getTask();
            this.setState({tasks: data})
        } catch (error) {
            console.log(error);
        }
    }


    handleChange = ({currentTarget: input}) => {
        this.setState({currentTask: input.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTask = this.state.tasks
        try {
            const {data} = await addTask({task: this.state.currentTask});
            const task = originalTask;
            task.push(data);
            this.setState({task, currentTask: ""});
        } catch (error) {
            console.log(error)
        }
    }

    handleUpdate = async (currentTask) => {
        const originalTask = this.state.tasks;
        try {
            const tasks = [...originalTask];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].completed = !tasks[index].completed
            this.setState({tasks})
            await updateTask(currentTask, {completed: tasks[index].completed})
        } catch (error) {
            this.setState({tasks: originalTask})
            console.log(error)
        }
    }

    handleDelete = async (currentTask) => {
        const originalTasks = this.state.tasks;    
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            this.setState({tasks});
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({tasks: originalTasks});
            console.log(error);
        }
    }
}

export default Tasks