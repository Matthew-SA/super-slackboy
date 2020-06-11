# Super SlackBoy
[Super SlackBoy live page](https://super-slackboy.herokuapp.com "Super SlackBoy")
<img width="1685" alt="Screen Shot 2020-04-29 at 11 16 47 AM" src="https://user-images.githubusercontent.com/47997709/80632101-95c1c980-8a0b-11ea-8ebc-8fe0c36ce811.png">

Super SlackBoy is a light weight communication application where users can post real-time messages in channels for others to view.  Chat messages persist between sessions.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Features](#features)
5. [Future Direction](#future-direction)

## Introduction
Super SlackBoy is a light weight communication application where users can post real-time messages in channels for others to view.  Chat messages persist between sessions.

## Technologies
 * React
 * Redux
 * Javascript
 * Action Cable (web sockets)
 * Ruby on Rails
 * Ruby
 * PostgreSQL

## Features

* Instant Messaging - Action Cable web sockets provide messaging updates without having to manually refresh the page.  When a user views a channel, a user subscription is created to the chat channel.  Anytime a user posts a new message, the chat channel will update all current clients with the new message.

```javascript
  useEffect(() => {
    dispatch(requestChannel(id))

    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel", room: id },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = {
                author: data.author,
                body: data.body,
                id: data.id,
                time: data.time,
                user_id: data.user_id,
                channel_id: data.channel_id,
              };
              dispatch(incomingMessage(message))
              let element = document.getElementById(`chan-${message.channel_id}`)
              if (element) element.classList.add("sidebar-highlight")
              break;
          }
        },
        update: function(data) { return this.perform("update", data)},
        speak: function (data) { return this.perform("speak", data) },
      }
    );

    return () => {
      App.room.unsubscribe();
    }
  }, [id])
```

* Persistant Messages - All older messages are handled through standard routes and the database, and will render chat history upon page load.

```
  def show # view a channel and its connected messages.
    @channel = Channel.find(params[:id])
    @membership = Membership.find_by(user_id: current_user.id, channel_id: params[:id])
    if @channel.direct_message 
      if @membership
        @messages = @channel.messages.includes(:user)
      end
    else
      @messages = @channel.messages.includes(:user)
    end
    render :show
  end
```

* Chat channels - Channel logic is handled in the backend to keep conversations private and prevent abuse by the frontend user.  Channel names in the sidebar will bold when user has unread messages.

* Persistant UI elements - User's menu state and current chat room are consistent between sessions.

## Future Direction
* Direct messaging
* advanced channel options (set title, topic, etc.)
* advanced UI options (set profile attributes including profile photo, dark mode, etc!)

