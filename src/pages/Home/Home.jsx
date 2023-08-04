import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <div>
                  <Link to='/create-task'>Create a Task</Link>
            </div>
      );
};

export default Home;