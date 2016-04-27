'use strict';

var React = require('react'),
    ReactDnD = require('react-dnd'),
    ItemTypes = require('./ItemTypes');

var cardSource = {
    beginDrag: function beginDrag(props) {
        return { id: props.id };
    }
};

var cardTarget = {
    hover: function hover(props, monitor) {
        var draggedId = monitor.getItem().id;

        if (draggedId !== props.id) {
            props.swapCards(draggedId, props.id);
        }
    }
};

var Card = React.createClass({
    displayName: 'Card',

    propTypes: {
        connectDragSource: React.PropTypes.func.isRequired,
        connectDropTarget: React.PropTypes.func.isRequired,
        isDragging: React.PropTypes.bool.isRequired,
        id: React.PropTypes.any.isRequired,
        text: React.PropTypes.string.isRequired,
        swapCards: React.PropTypes.func.isRequired
    },

    render: function render() {
        var style = {
            border: '1px dashed gray',
            padding: '0.5rem 1rem',
            marginBottom: '.5rem',
            backgroundColor: 'white',
            cursor: 'move',
            opacity: this.props.isDragging ? 0 : 1
        };
        return this.props.connectDragSource(this.props.connectDropTarget(React.createElement(
            'div',
            { style: style },
            this.props.text
        )));
    }
});

var DragSourceDecorator = ReactDnD.DragSource(ItemTypes.CARD, cardSource, function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
});

var DropTargetDecorator = ReactDnD.DropTarget(ItemTypes.CARD, cardTarget, function (connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
});

module.exports = DropTargetDecorator(DragSourceDecorator(Card));