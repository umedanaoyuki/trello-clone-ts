import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="item"
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
