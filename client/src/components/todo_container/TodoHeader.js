import React from 'react';

const TodoHeader = ({ type, setType }) => {
    return (
        <div className="container_title">
            {type === 'dayTodo' ? <h2>오늘 할일</h2> : <h2>버킷리스트</h2>}

            <div className="button_wrap">
                {type === 'dayTodo' ? (
                    <button
                        className="btn"
                        onClick={() => {
                            setType('routine');
                        }}
                    >
                        버킷리스트 보기
                    </button>
                ) : (
                    <button
                        className="btn"
                        onClick={() => {
                            setType('dayTodo');
                        }}
                    >
                        오늘 할일 보기
                    </button>
                )}
            </div>
        </div>
    );
};

export default TodoHeader;
