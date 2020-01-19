# Slack-Clone (working title!)

Slack clone is a light weight communication application where users can post messages to a common channel for others to view.

## Features
* Instant messaging
* Messages persist in channel


## [Slack Clone Homepage](https://fullstack-slack-clone.herokuapp.com/#/ "Slack Clone Homepage")




## Slack Clone Stack:
React / Redux
Rails
Postgres

### Additional technologies:
Websockets (Action Cable)




## Main Features:
* Messages are instant by use of websockets.  When a user joins the chat page, a user subscription is created to the chat channel.  Any time a user posts a new message, the chat channel will update all current clients with the new message.

* Messages are persistant.  All older messages are handled through standard routes and the database, and will render upon page load.



## Code highlights

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

