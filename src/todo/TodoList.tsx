import React, { useState, useCallback } from "react";
import * as todoItem from "./TodoItem";

type TProps = {
  title?: string;
  // items: TItem[];
};

const initialItems: todoItem.TItem[] = [
  {
    id: "-1",
    isCompleted: true,
    text: "Task1"
  },
  {
    id: "-2",
    isCompleted: false,
    text: "Task2"
  }
];

let id = 0;

export const TodoList: React.FC<TProps> = ({ title }: TProps) => {
  const [items, setItems] = useState<todoItem.TItem[]>(initialItems);
  const [newItemText, setNewItemText] = useState<string>("");

  const onItemDelete = useCallback((event: todoItem.TDeleteClickEvent) => {
    setItems((items) => items.filter((item) => item.id !== event.id));
  }, []);

  const onItemCheck = useCallback((event: todoItem.TCheckedClickEvent) => {
    setItems((items) =>
      items.map((item) => {
        return item.id === event.id
          ? { ...item, isCompleted: event.isChecked }
          : item;
      })
    );
  }, []);

  const onNewItemTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewItemText(event.target.value);
    },
    [setNewItemText]
  );

  const onNewItemKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setItems((items) => [
          ...items,
          {
            id: (++id).toString(),
            isCompleted: false,
            text: newItemText
          }
        ]);
        setNewItemText("");
      }
    },
    [newItemText]
  );

  return (
    <>
      <h3>{title}</h3>
      <label htmlFor="">
        New item
        <input
          value={newItemText}
          onChange={onNewItemTextChange}
          onKeyDown={onNewItemKeyPress}
          type="text"
        />
      </label>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <todoItem.TodoItem
              item={item}
              onDeleteClick={onItemDelete}
              onCheckedClick={onItemCheck}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
