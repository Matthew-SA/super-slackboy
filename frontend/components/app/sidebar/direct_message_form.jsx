import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { requestUsers } from '../../../actions/user_actions';
import DirectMessageUserItem from './direct_message_user_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function DirectMessageForm() {
  const dispatch = useDispatch();
  const users = useSelector((state => state.entities.users))

  useEffect(() => {
    dispatch(requestUsers())
  },[])

  const buildUsersList = () => {
    let usersArray = Object.values(users);

    const userList = usersArray.map((user, idx) => {
      return <DirectMessageUserItem user={user} key={idx} />
    })

    return userList;
  }

  return(
      <div className="create-dm-container">

        <div className="modal-header">
          <div className="modal-title">Direct Messages</div>
          <div className="rightbar-x" onClick={() => dispatch(closeModal())}>
            <FontAwesomeIcon
              style={{ fontSize: "18px" }}
              icon="times"
            />
          </div>
        </div>

        <div className="modal-body">
          {buildUsersList()}
        </div>
      </div>
    )
}

export default DirectMessageForm;