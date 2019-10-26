export class Pagination<T>
{
    constructor(
        public index: number,
        public size: number = 10,
        public totalPages: number,
        public totalSizes: number,
        public list: T[]
    ) {}

    static getEmpty()
    {
        return new Pagination<any>(
            0, 0, 0, 0, []
        );
    }
}