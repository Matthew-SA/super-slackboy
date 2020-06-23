# Super SlackBoy
[Super SlackBoy live page](https://super-slackboy.herokuapp.com "Super SlackBoy")

<img width="1682" alt="screen2" src="https://user-images.githubusercontent.com/47997709/84433044-8aed7d80-abe2-11ea-9dd0-31ffc25a1952.png">

<img width="1682" alt="screen" src="https://user-images.githubusercontent.com/47997709/84432656-fa16a200-abe1-11ea-9ea1-abae87dc0545.png">

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

![slice1](https://user-images.githubusercontent.com/47997709/84436357-27fee500-abe8-11ea-94fa-29253906f927.png)

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

![slice2](https://user-images.githubusercontent.com/47997709/84436594-917ef380-abe8-11ea-8610-37c852c388b0.png)

* Chat Channels with persistent Messages - Channel logic is handled in the backend to keep conversations private and prevent abuse by the frontend user.  Additionally, Channel names in the sidebar will bold when user has unread messages.  All previous messages are handled through standard routes and the database, and will render upon page load. 

```ruby
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

* Persistant UI elements - User's menu state, including sidebar preferences, are saved between sessions.

```ruby
  create_table "uis", force: :cascade do |t|
    t.boolean "show_channels", default: true
    t.boolean "show_direct_messages", default: true
    t.integer "user_id"
    t.boolean "rightbar", default: true
    t.index ["user_id"], name: "index_uis_on_user_id"
  end
```

## Future Direction
* Direct messaging.
* advanced channel options (set title, topic, etc.).
* advanced UI options (set profile attributes including profile photo, dark mode, etc.)!

