import React, { useContext } from 'react';
import UserContext from '../context/user/userContext';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';


 const Vlog = ({blogs}) => {
  const userContext = useContext(UserContext);
  const { setUser, users, setUserBlogs } = userContext;
    let vlog;
  return (
    <div>
      <div className="vlog">
        <Iframe
          url="https://drive.google.com/file/d/1pYNKeo8pQ_BzbxCNNFo1km4KZl2wxJ-u/preview"
          width="100%"
          height="480"
          className="iframe-video"
          frameBorder="0"
        ></Iframe>
        
        {/* <div className="vlog-details">
          <p>{vlog[0].x_categories}</p>
          <p>
            {new Date(vlog[0].date).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}{' '}
            |{' '}
            <Link
              className="author"
              to={`/author/${vlog[0].author}`}
              onClick={() => {
                const user = users.filter((data) => data.id === vlog[0].author);

                setUser(user[0]);
                setUserBlogs(user[0], blogs);
              }}
            >
              {vlog[0].x_author}
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};
export default Vlog;