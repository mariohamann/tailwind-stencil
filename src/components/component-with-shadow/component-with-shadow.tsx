import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-with-shadow',
  shadow: true,
})
export class ComponentWithShadow {

  render() {
    return (
      <Host>
        <link rel="stylesheet" href="/tailwind.css" />
        <div class="bg-gray-50">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block text-green-800">I have a shadow.</span>
            </h2>
          </div>
        </div>
      </Host>
    );
  }

}
