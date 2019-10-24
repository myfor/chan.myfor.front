export class Pagination<T>
{
    //  当前页码
    public Index: number;
    //  每页行数
    public Size: number;
    //  总页数
    public TotalPages: number;
    //  总行数
    public TotalSizes: number;
    //  分页数据
    public List: T[];
}