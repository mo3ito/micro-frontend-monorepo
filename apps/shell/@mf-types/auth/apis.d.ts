
    export type RemoteKeys = 'auth/Login';
    type PackageType<T> = T extends 'auth/Login' ? typeof import('auth/Login') :any;