namespace App {
  // autobind decorator
  export const autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
    return {
      configurable: true,
      get() {
        return descriptor.value.bind(this);
      }
    } as PropertyDescriptor;
  };
}