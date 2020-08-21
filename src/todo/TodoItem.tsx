import React, { useCallback } from "react";

export type TItem = {
  id: string;
  isCompleted: boolean;
  text: string;
};

type TProps = {
  item: TItem;
  onCheckedClick: (event: TCheckedClickEvent) => any;
  onDeleteClick: (event: TDeleteClickEvent) => any;
};

export type TCheckedClickEvent = {
  isChecked: boolean;
  id: string;
};

export type TDeleteClickEvent = {
  id: string;
};

export const TodoItem: React.FC<TProps> = (props) => {
  const onCheckedClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onCheckedClick({
        isChecked: event.target.checked,
        id: props.item?.id
      });
    },
    [props]
  );

  const onDeleteClick = useCallback(() => {
    props.onDeleteClick({ id: props.item?.id });
  }, [props]);

  return (
    <div>
      <input
        type="checkbox"
        onChange={onCheckedClick}
        checked={props.item.isCompleted}
      />
      {props.item.text}
      <button type="button" onClick={onDeleteClick}>
        x
      </button>
    </div>
  );
};
