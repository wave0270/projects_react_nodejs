/**
 * External dependencies
 */
var pluck = require( 'lodash/collection/pluck' );

/**
 * Internal dependencies
 */
var MediaStore = require( './store' ),
	Dispatcher = require( 'dispatcher' ),
	emitter = require( 'lib/mixins/emitter' );

/**
 * Module variables
 */
var _media = {},
	MediaLibrarySelectedStore = {};

function ensureSelectedItemsForSiteId( siteId ) {
	if ( siteId in _media ) {
		return;
	}

	_media[ siteId ] = [];
}

function setSelectedItems( siteId, items ) {
	_media[ siteId ] = pluck( items, 'ID' );
}

function addSingle( siteId, item ) {
	ensureSelectedItemsForSiteId( siteId );
	_media[ siteId ].push( item.ID );
}

function receiveSingle( siteId, item, itemId ) {
	var index;

	if ( ! itemId ) {
		itemId = item.ID;
	}

	if ( ! itemId || ! ( siteId in _media ) ) {
		return;
	}

	index = _media[ siteId ].indexOf( itemId );
	if ( -1 === index ) {
		return;
	}

	// Replace existing index if one exists
	_media[ siteId ].splice( index, 1, item.ID );
}

function receiveMany( siteId, items ) {
	items.forEach( function( item ) {
		receiveSingle( siteId, item );
	} );
}

function removeSingle( siteId, item ) {
	var index;

	if ( ! ( siteId in _media ) ) {
		return;
	}

	index = _media[ siteId ].indexOf( item.ID );
	if ( -1 !== index ) {
		_media[ siteId ].splice( index, 1 );
	}
}

emitter( MediaLibrarySelectedStore );

MediaLibrarySelectedStore.get = function( siteId, itemId ) {
	return MediaStore.get( siteId, itemId );
};

MediaLibrarySelectedStore.getAll = function( siteId ) {
	if ( ! ( siteId in _media ) ) {
		return [];
	}

	return _media[ siteId ].map( function( itemId ) {
		return MediaStore.get( siteId, itemId );
	} );
};

MediaLibrarySelectedStore.dispatchToken = Dispatcher.register( function( payload ) {
	var action = payload.action;

	Dispatcher.waitFor( [ MediaStore.dispatchToken ] );

	switch ( action.type ) {
		case 'SET_MEDIA_LIBRARY_SELECTED_ITEMS':
			if ( action.error || ! action.siteId || ! action.data || ! Array.isArray( action.data ) ) {
				break;
			}

			setSelectedItems( action.siteId, action.data );
			MediaLibrarySelectedStore.emit( 'change' );
			break;

		case 'CREATE_MEDIA_ITEM':
			if ( ! action.error && action.siteId && action.data ) {
				addSingle( action.siteId, action.data );
				MediaLibrarySelectedStore.emit( 'change' );
			}
			break;

		case 'RECEIVE_MEDIA_ITEM':
			if ( action.error && action.siteId && action.id ) {
				// If error occured while uploading, remove item from store
				removeSingle( action.siteId, { ID: action.id } );
				MediaLibrarySelectedStore.emit( 'change' );
			}

			if ( ! action.siteId || ! action.data || action.error ) {
				break;
			}

			receiveSingle( action.siteId, action.data, action.id );
			MediaLibrarySelectedStore.emit( 'change' );
			break;

		case 'RECEIVE_MEDIA_ITEMS':
			if ( ! action.error && action.siteId && action.data && action.data.media ) {
				receiveMany( action.siteId, action.data.media );
				MediaLibrarySelectedStore.emit( 'change' );
			}
			break;

		case 'REMOVE_MEDIA_ITEM':
			if ( ! action.siteId || ! action.data || action.error ) {
				break;
			}

			removeSingle( action.siteId, action.data );
			MediaLibrarySelectedStore.emit( 'change' );
			break;
	}
} );

module.exports = MediaLibrarySelectedStore;
