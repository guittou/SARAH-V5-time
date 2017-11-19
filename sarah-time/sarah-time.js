module.exports = function(RED) {
    function sarahtime(config) {
        RED.nodes.createNode(this,config);

        var node = this;

		var date = new Date();
		var hour = date.getHours();
		var min = date.getMinutes();

		node.on('input', function(msg) {
            msg.speak = "il est "+hour+" heure "+min;
			node.send(msg);
        });
    }
	

    RED.nodes.registerType("sarah-time",sarahtime);
}



