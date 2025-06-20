import React, { useReducer, useState } from "react";

function itemListReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.item, created: Date.now() }
        ],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

function ItemList() {
  const [state, dispatch] = useReducer(itemListReducer, { items: [] });
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortType, setSortType] = useState("created");
  const [filter, setFilter] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({
      type: "ADD_ITEM",
      item: { id: Date.now(), name: input },
    });
    setInput("");
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleEditSave = (id) => {
    if (editValue.trim() === "") return;
    dispatch({ type: "EDIT_ITEM", id, name: editValue });
    setEditId(null);
    setEditValue("");
  };

  // Sắp xếp
  let items = [...state.items];
  if (sortType === "alpha") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "created") {
    items.sort((a, b) => a.created - b.created);
  }

  // Lọc
  if (filter.trim() !== "") {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tên item"
        />
        <button onClick={handleAdd}>Thêm item</button>
      </div>
      <div style={{ margin: "10px 0" }}>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Tìm kiếm item"
        />
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{ marginLeft: 8 }}
        >
          <option value="created">Theo thời gian thêm</option>
          <option value="alpha">Theo bảng chữ cái</option>
        </select>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") handleEditSave(item.id);
                  }}
                />
                <button onClick={() => handleEditSave(item.id)}>Lưu</button>
                <button onClick={() => setEditId(null)}>Hủy</button>
              </>
            ) : (
              <>
                {item.name}{" "}
                <button onClick={() => handleEdit(item.id, item.name)}>Sửa</button>
                <button onClick={() => handleRemove(item.id)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;