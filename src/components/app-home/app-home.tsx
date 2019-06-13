import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <Host>
        <div class='app-home' style={{'height': '300px', 'overflow': 'scroll', 'background': 'grey'}}>
          <p style={{'height': '500px'}}>
            Welcome to the Stencil App Starter.
            You can use this starter to build entire apps all with
            web components using Stencil!
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>
        </div>
        <app-scroll-listener></app-scroll-listener>
      </Host>
    );
  }
}
