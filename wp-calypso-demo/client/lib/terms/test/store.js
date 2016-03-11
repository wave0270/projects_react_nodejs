require( 'lib/react-test-env-setup' )();

/**
 * External dependencies
 */
var assert = require('chai').assert,
	Dispatcher = require( 'dispatcher' );

/**
 * Internal dependencies
 */
var TermStore = require( '../store' ),
	data = require( './data' );

var TEST_SITE_ID = 777,
	TEST_CATEGORY_ID = 1,
	TEMPORARY_ID = 'category-0';

describe( 'term-store', function() {

	beforeEach( function() {
		delete require.cache[ require.resolve( '../store' ) ];
		TermStore = require( '../store' );
	} );

	function dispatchReceiveTerms() {
		Dispatcher.handleServerAction( {
			type: 'RECEIVE_TERMS',
			siteId: TEST_SITE_ID,
			data: {
				terms: data.treeList,
				found: data.treeList.length
			},
			error: null
		} );
	}

	describe( 'dispatchToken', function() {
		it( 'should have a dispatch token', function() {
			assert.typeOf( TermStore.dispatchToken, 'string' );
		} );

		it( 'should emit change event', function( done ) {
			// Future tests may also trigger this event
			TermStore.once( 'change', done );
			dispatchReceiveTerms();
		} );
	} );

	it( 'Should remove a term if a temporary ID is present', function() {
		var categories;

		Dispatcher.handleServerAction( {
			type: 'RECEIVE_ADD_TERM',
			siteId: TEST_SITE_ID,
			data: {
				terms: [
					{
						id: TEMPORARY_ID,
						name: 'OMG temporary'
					}
				]
			},
			error: null
		} );
		assert.equal( TermStore.all( TEST_SITE_ID ).length, 1 );

		Dispatcher.handleServerAction( {
			type: 'RECEIVE_ADD_TERM',
			siteId: TEST_SITE_ID,
			id: TEMPORARY_ID,
			data: {
				terms: [
					{
						id: 1111,
						name: 'OMG temporary'
					}
				]
			},
			error: null
		} );
		categories = TermStore.all( TEST_SITE_ID );

		assert.equal( categories.length, 1 );
		assert.equal( categories[ 0 ].id, 1111 );
	} );

	it( '#all()', function() {
		dispatchReceiveTerms();
		var categoryData = TermStore.all( TEST_SITE_ID );

		assert.equal( categoryData[0].name, 'a cat' );
		assert.equal( categoryData.length, data.treeList.length );

	} );

	it( '#get()', function() {
		dispatchReceiveTerms();

		var category = TermStore.get( TEST_SITE_ID, TEST_CATEGORY_ID );
		assert.equal( category.name, 'a cat' );
	} );

	it( '#get() undefined', function() {
		dispatchReceiveTerms();

		assert.isUndefined( TermStore.get( TEST_SITE_ID, 7878 ) );
	} );
} );
