import React, { useEffect, useState } from 'react';

import Hedaer from '../layouts/Hedaer';
import Layout from '../layouts/Layout';
import TodoContainer from '../components/todo_container/TodoContainer';
import RecordContainer from '../components/record_container/RecordContainer';

const Home = ({ title }) => {
    const [mode, setMode] = useState('todo');

    return (
        <Layout className="home">
            <Hedaer title={title} />
            <div className={`container ${mode}`}>
                <TodoContainer />
                <RecordContainer />
                <div className="mobile_button_wrap">
                    <button onClick={() => setMode('todo')} className={mode === 'todo' ? 'selected' : ''}>
                        <img src="/assets/icons/todo.png" alt="" />
                    </button>
                    <button onClick={() => setMode('record')} className={mode === 'record' ? 'selected' : ''}>
                        <img src="/assets/icons/record.png" alt="" />
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
