import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUi } from '../../../actions/ui_actions'
import { openModal } from '../../../actions/modal_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SidebarDMChannels() {
  const dispatch = useDispatch();
  const showDMChannels = useSelector(state => state.ui.persistentUi.show_direct_messages)

  return (
    <div>
      <div className="sidebar-header-container">

        <p className="channel-header" onClick={() => dispatch(updateUi("show_direct_messages"))}>
          <FontAwesomeIcon className={showDMChannels ? "caret-down" : "caret-down caret-rotate"} icon="caret-down" />&nbsp;&nbsp;Direct Messages
        </p>

        <div className="plus-button" onClick={() => dispatch(openModal("create-direct-message"))}>
          <FontAwesomeIcon icon="plus" />
        </div>

      </div>
      {/* {showChannels ? buildList(sortedUserChannels) : "" } */}
    </div>
  )
}

export default SidebarDMChannels;