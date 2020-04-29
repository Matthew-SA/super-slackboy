# Super SlackBoy
[Super SlackBoy live page](https://super-slackboy.herokuapp.com "Super SlackBoy")

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
 * PostgreSQL

## Features

* Instant Messaging - Action Cable web sockets provide messaging updates without having to manually refresh the page.  When a user joins the chat page, a user subscription is created to the chat channel.  Anytime a user posts a new message, the chat channel will update all current clients with the new message.

```javascript
  componentDidMount() {
    this.props.requestMessages()
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = { author: data.author, body: data.body, id: data.id, user_id: data.user_id };
              this.props.incomingMessage(message)
              break;
          }
        },

        speak: function (data) { return this.perform("speak", data) },

      }
    );
  }
```

* Messages persist between session - All older messages are handled through standard routes and the database, and will render chat history upon page load.

## Future Direction
* Persistant user UI elements
* Multiple channels
* Direct messaging
