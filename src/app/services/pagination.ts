export class Pagination<T>
{
    constructor(
        public index: number,
        public size: number = 20,
        public totalPages: number,
        public totalSizes: number,
        public list: T[]
    ) {}
}