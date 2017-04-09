var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Go picnic'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Go for a ride'
        },
        {
          id: 4,
          text: 'Play with Garu'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
