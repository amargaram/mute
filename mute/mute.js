Simply Copy This Code And Paste It Into Your Discord Console !! 
To Open Your Dicord Console `Press CTRL Shif + I` To Open Your Console



var text = new TextDecoder("utf-8");
WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
if (text.decode(data).includes("self_deaf")) {
data = data.replace('"self_mute":false', 'NiceOneDiscord');
}
}
WebSocket.prototype.original.apply(this, [data]);
}
