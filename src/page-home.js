import React, { Component } from 'react';

import SampleEmbed from './home/sample-embed';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>

				<section>

					<SampleEmbed mode="optin" />

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

					<p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p>

					<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.</p>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

					<SampleEmbed mode="optin" />

				</section>

			</React.Fragment>
		);
	}
}
