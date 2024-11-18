import React, { useEffect, useRef, useState } from 'react';

const TotoItem = ({ type, data, updateTodo, deleteTodo }) => {
    const [checked, setChecked] = useState(data.checked);
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(data.content);

    const editInput = useRef();

    useEffect(() => {
        editMode && editInput.current.focus();
    }, [editMode]);

    useEffect(() => {
        setEditMode(false);
    }, [type]);

    useEffect(() => {
        if (data.type === 'routine') {
            // 매일 자정 루틴 초기화
            const now = new Date();
            const lastUpdateDate = new Date(data.lastDay);

            if (now.getMonth() !== lastUpdateDate.getMonth()) {
                // 달이 다른 경우
                return;
            }

            if (now.getDate() !== lastUpdateDate.getDate()) {
                // 일자가 다를 경우
            }
        }
    }, [type]);

    return (
        <li className={`${data.checked && type === 'dayTodo' ? 'checked' : ''}`}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateTodo(data.key, { ...data, content: editText });
                    setEditMode(false);
                }}
            >
                {type === 'routine' ? null : (
                    <div className="custom_checkbox_group">
                        <input
                            type="checkbox"
                            id={data.key}
                            checked={checked}
                            onChange={() => {
                                if (editMode) return;
                                const value = !checked;

                                setChecked(value);
                                updateTodo(data.key, { ...data, checked: value });
                            }}
                        />
                        <label htmlFor={data.key}></label>
                    </div>
                )}
                <div className="content">
                    {editMode ? (
                        <input
                            type="text"
                            value={editText}
                            ref={editInput}
                            onChange={({ target: { value } }) => {
                                setEditText(value);
                            }}
                        />
                    ) : (
                        <p
                            onClick={() => {
                                if (type === 'dayTodo') {
                                    if (!checked && type === data.type) setEditMode(true);
                                } else {
                                    setEditMode(true);
                                }
                            }}
                        >
                            <span> {data.content}</span>
                        </p>
                    )}
                </div>
                <div className="button_wrap">
                    {data.type === 'routine' && type === 'dayTodo' ? null : editMode ? (
                        <>
                            <button type="submit" className="btn">
                                적용
                            </button>
                            <button
                                className="btn"
                                onClick={() => {
                                    setEditMode(false);
                                }}
                            >
                                취소
                            </button>
                        </>
                    ) : (
                        <button
                            className="btn"
                            onClick={() => {
                                if (window.confirm('정말 삭제하시겠습니까?')) deleteTodo(data.key);
                            }}
                        >
                            삭제
                        </button>
                    )}
                </div>
            </form>
        </li>
    );
};

export default TotoItem;
