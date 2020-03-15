import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'its-button',
  styleUrl: 'its-button.css',
  shadow: false
})
export class ItsButton {

  @Prop() label: string;

  render() {
    return <button class="button button--primary" type="submit"><slot></slot></button>;
  }
}
