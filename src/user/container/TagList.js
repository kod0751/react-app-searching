import { Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

export default function TagList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const tags = user?.tag ? user.tag.split(",").map((item) => item.trim()) : [];

  function onDelete(tag) {
    const newTag = tags.filter((item) => item !== tag).join(", ");
    dispatch(
      actions.fetchUpdateUser({
        user,
        key: "tag",
        value: newTag,
        fetchKey: "tag",
      })
    );
  }

  return (
    <>
      {tags.map((item) => (
        <Tag key={item} closable onClose={() => onDelete(item)}>
          {item}
        </Tag>
      ))}
    </>
  );
}
