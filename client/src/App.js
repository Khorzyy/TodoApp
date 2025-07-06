import './App.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Tasks from './Tasks';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

class App extends Tasks {
  state = {
    tasks: [],
    currenTask: "",
    editingTask: null,
    editedValue: "",
    isEditOpen: false
  };

  render() {
    const { tasks, isEditOpen, editedValue } = this.state;

    return (
      <div className='App flex'>
        <Paper elevation={3} className='container'>
          <div className='heading'>TO-DO</div>
          <form
            onSubmit={this.handleSubmit}
            className='flex'
            style={{ margin: "15px 0" }}
          >
            <TextField
              variant="outlined"
              size='small'
              style={{ width: "80%" }}
              required={true}
              onChange={this.handleChange}
              placeholder='Add new To-Do'
            />
            <Button
              style={{ height: "40px", marginLeft: "2%" }}
              color="primary"
              variant='outlined'
              type="submit"
            >
              AddTask
            </Button>
          </form>
          <div>
            {tasks.map((task) => (
              <Paper
                key={task._id}
                className='flex task_container'>
                <Checkbox
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                />
                <div
                  className={task.completed ? "task line-through" : "task"}>
                  {task.task}
                </div>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => this.openEditModal(task)}
                  sx={{ ml: 1 }}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <Button
                  onClick={() => this.handleDelete(task._id)}
                  color="secondary"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>

        <Dialog open={isEditOpen} onClose={this.closeEditModal}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent sx={{ pt: 1 }}>
            <TextField
              value={editedValue}
              onChange={this.handleEditChange}
              fullWidth
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeEditModal}>Cancel</Button>
            <Button variant="contained" onClick={this.saveEdit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App;
