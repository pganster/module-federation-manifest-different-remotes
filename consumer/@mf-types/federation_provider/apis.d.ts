
    export type RemoteKeys = 'federation_provider/helloProducer';
    type PackageType<T> = T extends 'federation_provider/helloProducer' ? typeof import('federation_provider/helloProducer') :any;