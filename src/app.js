import React from 'react';
import ReactDom from 'react-dom';

var CommentBox = React.createClass({
     render: function() {
       return (
         <div className="commentBox"> Hello, world!</div>
       );
     }
   });

ReactDom.render( <CommentBox />, document.getElementById('app'));
