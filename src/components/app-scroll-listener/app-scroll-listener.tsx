import { Component, h, Listen, Host} from '@stencil/core';

@Component({
  tag: 'app-scroll-listener'
})
export class AppScrollListener {

  @Listen('scroll')
  onScroll() {
    console.log('scrolled');
  }

  render() {
    return (
      <Host
      />
    );
  }

}
