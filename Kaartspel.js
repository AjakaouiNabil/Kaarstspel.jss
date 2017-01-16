var Deck = (function () {
	
	//var CardEnum = [
	              //  {Card0 : 0},
	               // {Card1 : 1},
	                //{Card2 : 2}]
	
	var CardEnum = [
	                Card0 ,
	                Card1,
	                Card2]
	
	var radomNr ; 
	var currCard;
    var instance;
 
    function createInstance() {
    	radomNr = Math.floor((Math.random() * 3) + 1);
    	return {
    		     getcurrCard : function(){
    		     currCard = CardEnum[radomNr];
    		     return currCard;
    		     }
            }
    }
    
    
    
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var deck = new Deck.getInstance();
deck.getcurrCard();
