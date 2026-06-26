"use client";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ListForms() {
  // Store an array of objects to keep track of individual lists and their unique IDs
  const [lists, setLists] = useState([{ id: 1 }]);
  // Keep track of the next ID to assign so we don't get duplicates when deleting/adding
  const [nextId, setNextId] = useState(2);

  function handleAddList() {
    setLists([...lists, { id: nextId }]);
    setNextId(nextId + 1);
  }

  function handleDeleteList(idToRemove) {
    // Filter out the list that matches the ID we want to delete
    setLists(lists.filter((list) => list.id !== idToRemove));
  }

  return (
    <div className="flex flex-col justify-between items-center h-full w-full border-l border-accent">
      <div className="flex flex-col gap-4 items-center h-full w-full p-4 overflow-y-auto">
        {/* Map through the array to render a ListForm for every item in state */}
        {lists.map((list) => (
          <ListForm
            key={list.id}
            ind={list.id}
            onDelete={() => handleDeleteList(list.id)}
          />
        ))}
      </div>
      <div className="h-[8vh] w-full border-t border-accent p-2 flex justify-end gap-4 items-center">
        <button
          className="bg-accent h-full px-4 rounded-sm"
          onClick={handleAddList}
        >
          Add List
        </button>
        <button className="bg-green-500 h-full px-4 rounded-sm">Done</button>
      </div>
    </div>
  );
}

function ListForm({ ind, onDelete }) {
  const labelArr = ["Description", "Hours", "Rate", "Amount"];
  return (
    <div className="w-full border-2 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2 cursor-pointer">
        <p>{"List " + ind}</p>
        <div className="flex justify-between text-[1.4rem] gap-1">
          {/* Wire up the delete button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents clicking the row if you add an onClick to the row later
              onDelete();
            }}
          >
            <RiDeleteBin6Line />
          </button>
          <button>
            <IoIosArrowDropdown />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
        {labelArr.map((title, ind) => {
          return <ListInputComp title={title} key={ind} />;
        })}
      </div>
    </div>
  );
}

function ListInputComp({ title }) {
  return (
    <div className="flex gap-2 w-full text-[1rem]">
      <h1 className="w-38">{title + ":"}</h1>

      <input
        className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
        type="text"
      />
    </div>
  );
}
