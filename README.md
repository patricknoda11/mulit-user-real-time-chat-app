# Real-time Chat Application

<!-- ABOUT THE PROJECT -->

## About
|![same_room](https://user-images.githubusercontent.com/82549471/167042152-96165dc0-7e95-43cb-a167-ac23aac45d00.gif)|
|:--:|
|Two users chatting in the same room|

### Description
With the rise of the covid pandemic, loneliness had become a major concern as more and more people are stuck in their homes in isolation. Many communication applications have become the solution to stay socio-emotionally connected with others. This has inspired me to explore technologies which support interactive-communication between multiple users. The chat application I have built provides instant real-time communication between multiple users within the same room. The client-side was developed using ReactJS, and the server was constructed using NodeJS, Express, and Socket.io. The focus of building this application was to gain a better understanding on sockets and the process involved in developing a bidirectional, event-based communication application.

---

<!-- USAGE EXAMPLES -->

## Usage

#### Users chatting in different rooms
|![diff_rooms](https://user-images.githubusercontent.com/82549471/167042127-d36dfb7b-8771-4976-be6c-ad33f4c175cf.gif)|
|:--:|
|Message-events sent from one room is not emitted to other rooms|

#### Exitting a room
|![exit](https://user-images.githubusercontent.com/82549471/167042099-b07ee95c-1d53-4663-a763-e9e5077e1940.gif)|
|:--:|
|Exit-events triggers notification for all users currently in room|

---

### Built Using

#### Client:

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)

#### Server:

- [Node.js](https://jquery.com)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)

---

<!-- GETTING STARTED -->

## Getting Started

1. Clone the repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Change directories into server and install NPM package dependencies for server
   ```sh
   cd server
   npm install
   ```
3. Change directories into client and install NPM package dependencies for client

   ```sh
   cd ../client
   npm install
   ```

4. Create and configure .env file for server containing PORT variable

   ```js
   PORT = 5012;
   ```

5. Move to server directory and start server using NPM start
   ```sh
   cd server
   npm start
   ```
6. Likewise, create a new instance of the terminal and start client

   ```sh
   cd client
   npm start
   ```

---

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-url]: https://linkedin.com/in/patrick-noda/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
