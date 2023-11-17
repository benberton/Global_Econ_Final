import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const ChatUI = () => {
    const [input, setInput] = React.useState("");
    const [messages, setChatMessages] = React.useState([
    ]);

   const fetchData = async () => {
        try {
        const response = await fetch('/get-messeges');
        const data = await response.json();
        setChatMessages(data.chatMessages);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    fetchData()

  const handleSend = async () => {
    if (input.trim() !== "") {
        try {
            const response = await fetch('/api/send-message', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message : input }),
            });

            const data = await response.json();
            console.log('Message sent successfully:', data);
            // Update chatMessages with the new data
            setChatMessages(data.chatMessages);
            setInput("");
        } catch (error) {
        console.error('Error sending message:', error);
        }
        setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "light grey",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          backgroundColor: isBot ? "primary.light" : "secondary.light",
          borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
      </Paper>
    </Box>
  );
};


export default ChatUI;