{
    'mod+b': bindPagedownButton('bold'),
    'mod+i': bindPagedownButton('italic'),
    'mod+l': bindPagedownButton('link'),
    'mod+q': bindPagedownButton('quote'),
    'mod+k': bindPagedownButton('code'),
    'mod+g': bindPagedownButton('image'),
    'mod+o': bindPagedownButton('olist'),
    'mod+u': bindPagedownButton('ulist'),
    'mod+h': bindPagedownButton('heading'),
    'mod+r': bindPagedownButton('hr'),
    'mod+z': bindPagedownButton('undo'),
    'mod+y': bindPagedownButton('redo'),
    'mod+shift+z': bindPagedownButton('redo'),
    'mod+d': function(evt) {
        $('.button-open-discussion').click();
        evt.preventDefault();
    },
    '= = > space': function() {
        expand('==> ', '⇒ ');
    },
    '< = = space': function() {
        expand('<== ', '⇐ ');
    },
    'S t a c k E d i t': function() {
        eventMgr.onMessage("You are stunned!!! Aren't you?");
    }
}
