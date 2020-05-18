import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChannel } from '../../../../actions/channel_actions'


function ChannelForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createChannel({ name, description }));
  }

  return (
    <div className="create-channel-container">
      <h1 className="modal-header">Create a channel</h1>
      <div className="modal-body">
        <div style={{ marginBottom: "20px", color: "#616061" }}>
          Channels are where your team communicates. They’re best when organized
          around a topic — #marketing, for example.
        </div>

        <form
          onSubmit={handleSubmit}
          className="create-channel-form"
        >
          <div style={{ marginBottom: "7px" }}>Name</div>
          <input
            className="channel-form-input"
            style={{ marginBottom: "20px" }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value.replace(/\s/g, "").toLowerCase())}
            placeholder="# e.g. plan-budget"
          />
          <div style={{ marginBottom: "7px" }}>
            Description{" "}
            <span style={{ fontWeight: "100", color: "#616061" }}>
              (optional)
            </span>
          </div>
          <input
            className="channel-form-input"
            style={{ marginBottom: "0px" }}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div style={{ fontWeight: "100", color: "#616061" }}>
            what's this channel about?
          </div>

          <button className="modal-submit" type="submit" value="create">
            <span>Create</span>
          </button>
          {/* <div className="errors">{this.renderErrors()}</div> */}
        </form>
      </div>
    </div>
  );
}

export default ChannelForm