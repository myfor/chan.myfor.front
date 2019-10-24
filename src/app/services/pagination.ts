export class Pagination<T>
{
    constructor(
        public index: number,
        public size: number,
        public totalPages: number,
        public totalSizes: number,
        public list: T[]
    ) {}
}