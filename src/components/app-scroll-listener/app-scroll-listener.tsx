import { Component, Element, Listen, h, Host } from '@stencil/core';

@Component({
  tag: 'app-scroll-listener'
})
export class AppScrollListener {

  @Element() host: HTMLAppScrollListenerElement;

  @Listen('scroll')
  onScroll() {
    console.log('app scroll listener - scrolled');
  }

  @Listen('click')
  onClick() {
    console.log('app scroll listener - clicked');
  }

  render() {
    return (<Host></Host>);
  }

}
