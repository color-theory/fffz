const emoteList = new Set([{"text":"emoteCODE","url":"emoteImgURL"}]); // replace with your own array of code/url cominations

var targetNode = document.querySelector('.chat-scrollable-area__message-container');

var mutationHandler = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
			mutation.addedNodes.forEach( node => {
 				emoteList.forEach(emote => {
 					const img = `<img src='${emote.url}' width=32 height=32 title=${emote.text} />`;
 					const pattern = new RegExp(`\\b${emote.text}\\b`, 'g');
					 node.innerHTML = node.innerHTML.replace( pattern, img );
 				});				
			});
        }
    }
};
var observer = new MutationObserver(mutationHandler);
observer.observe(targetNode,  { childList: true });