/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import AddButton from './add-button';

const Content = React.createClass( {
	propTypes: {
		selectedDomainName: React.PropTypes.string.isRequired,
		selectedSite: React.PropTypes.oneOfType( [
			React.PropTypes.object,
			React.PropTypes.bool
		] ).isRequired
	},

	render() {
		return (
			<section className="privacy-protection-card__content">
				<div className="privacy-protection-card__description">
					<h2>{ this.translate( 'Why use Privacy Protection?' ) }</h2>

					<p>
						{ this.translate( 'With Privacy Protection, we show our partner\'s contact information instead of your own.' ) }
						<a href="https://support.wordpress.com/domains/register-domain/#public-versus-private"
							target="_blank">{ this.translate( 'Learn more.' ) }</a>
					</p>
				</div>
				<div className="privacy-protection-card__features">
					<h5>
						<span className="noticon noticon-checkmark"></span>
						{ this.translate( '{{strong}}Protects{{/strong}} Your Identity Online', {
							components: {
								strong: <strong />
							}
						} ) }
					</h5>

					<h5>
						<span className="noticon noticon-checkmark"></span>
						{ this.translate( '{{strong}}Reduces{{/strong}} Email Spam', {
							components: {
								strong: <strong />
							}
						} ) }
					</h5>

					<h5>
						<span className="noticon noticon-checkmark"></span>
						{ this.translate( '{{strong}}Helps{{/strong}} Prevent Domain Hacking', {
							components: {
								strong: <strong />
							}
						} ) }
					</h5>
				</div>

				<AddButton
					selectedDomainName={ this.props.selectedDomainName }
					selectedSite={ this.props.selectedSite } />
			</section>
		);
	}
} );

export default Content;
