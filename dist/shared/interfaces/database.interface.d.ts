export interface IDataSource<Source> {
    instance(): Source;
    connect(): Promise<void>;
}
