/**
Type definitions for to-fast-properties. Please use --esModuleInterop.
*/
/**
Force V8 to use fast properties for an object.

@param o Object to be made fast.
@returns Shallow copy of the original object, but uncallable. Since the input is also made fast you should probably never use this.

@remarks Callability should be declared stripped and reflected in tests when possible in the future.
*/
declare function FastObject<T extends object>(o?: T | null): T;
export = FastObject;
